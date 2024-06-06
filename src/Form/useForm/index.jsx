import { useState,  useEffect } from "react";
import { validate } from "./validation";

/**
 * Creates an initial form data object with default values from a schema. 
 * @param {Object} options - The options object.
 * @param {Object} options.schema - The schema object.
 * @param {Object} [options.formData={}] - The existing form data object (optional).
 * @returns {Object} The initial form data object with default values.
 */
function createInitialFormData({schema, formData = {}}) {
  for (const key in schema.properties) {
    const property = schema.properties[key];
     if (formData[key] === undefined && property?.default !== undefined) {
      formData[key] = property.default;
    }
  }

  return formData;
}

/**
 *
 * @description Convenience hook to display captions for the audio player
 * for controlling captions use the useCaptions hook.
 * @param {object} param `{initialFormData, schema, onSubmitCallback, onChangeCallback}`
 * @param {object} [options.initialFormData={}] Optional data to initialize the form with. Eg if you are editing/updating existing data.
 * @param {object} options.schema The schema for the form 
 * @param {function} [options.onSubmitCallback] Optional callback for when the form is save/submit
 * @param {function} [options.onChangeCallback] Optional callback for then the form is saved
 * @returns {*} `{ formData, errors, handleChange, handleSubmit }`
 * @example <caption>`useForm` import</caption> 
 * import { useForm } from "./useForm/index.js";
 * @example <caption>useForm example </caption>
 * const { formData, errors, handleChange, handleSubmit } = useForm(({initialFormData, schema, onSubmitCallback, onChangeCallback})
  * @see [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
 * @todo should the on change be debounced?
 * @todo Do we need to handle edge case when `initialFormData` is empty object? (see in code comment) 
 * @todo Follow up - `initialFormData` Do we need to also do some validation on initial data? eg that is matches schema? (eg via `validate` function?)
 * @todo how to deal with situation when save btn is outside of form?
 */
export const useForm = ({ initialFormData, schema, onSubmitCallback, onChangeCallback }) => {
      // Todo: should also do some validation on initial data if it's not empty object
      // via validate function
      const [formData, setFormData] = useState({});
      const [errors, setErrors] = useState({});
      
      useEffect(() => {
        const initialFormDataWithSchemaDefaults = createInitialFormData({ schema, formData: initialFormData });
        setFormData(initialFormDataWithSchemaDefaults)
        if (onChangeCallback) (onChangeCallback(initialFormDataWithSchemaDefaults));
      }, []);
    
      // TODO: should this be debounced?
      const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => {
            const newState = { ...prevFormData, [name]: newValue };
            if(onChangeCallback)(onChangeCallback(newState));
            return newState;
        });        
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate({formData, schema});
        if (Object.keys(errors).length === 0) {
          if(onSubmitCallback)(onSubmitCallback(formData));
        } else {
          setErrors(errors);
        }
      };
    
      return { formData, errors, handleChange, handleSubmit };
    };
