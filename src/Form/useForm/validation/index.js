

/**
*
* Validates form data against a JSON schema and returns an object of errors, if any.
* @param {object} options - An object containing the formData and schema.
* @param {object} options.formData - The form data to be validated.
* @param {object} options.schema - The schema to be used for validation.
* @returns {object} - An object containing the validation errors, if any.
* @todo how to make validate function more robust?
 * @todo how to pass custom validation rules associated with the schema?
 * 
  * @example <caption>`validation` import</caption> 
 * import { validation } from "./validation/index.js";
 * 
 * @example <caption>validation function example </caption>
 *
 * const formData = {
 *   name: 'John Doe',
 *   age: 30,
 *   email: 'johndoe@example.com'
 * };
 *
 * const schema = {
 *   required: ['name', 'email'],
 *   properties: {
 *     name: {
 *       type: 'string',
 *       title: 'Name',
 *       minLength: 2,
 *       maxLength: 50
 *     },
 *     age: {
 *       type: 'number',
 *       title: 'Age',
 *       minimum: 18,
 *       maximum: 100
 *     },
 *     email: {
 *       type: 'string',
 *       title: 'Email',
 *       minLength: 5,
 *       maxLength: 100
 *     }
 *   }
 * };
 *
 * const errors = validate({ formData, schema });
 *
 * // errors will be an object containing the validation errors, if any
 * // e.g. { name: 'Name must be at least 2 characters long' }
*/
export const validate = ({formData, schema}) => {
    const errors = {};
    Object.keys(schema.properties).forEach((fieldName) => {
      const { type, title, minLength, maxLength, minimum, maximum, options: enumValues } = schema.properties[fieldName];
      const value = formData[fieldName];
      if (schema.required.includes(fieldName) && !value) {
        errors[fieldName] = `${title} is required`;
        return;
      }
      if (type === 'string') {
        if (minLength !== undefined && value.length < minLength) {
          errors[fieldName] = `${title} must be at least ${minLength} characters long`;
        }
        if (maxLength !== undefined && value.length > maxLength) {
          errors[fieldName] = `${title} must be at most ${maxLength} characters long`;
        }
      } else if (type === 'number') {
        if (minimum !== undefined && value < minimum) {
          errors[fieldName] = `${title} must be at least ${minimum}`;
        }
        if (maximum !== undefined && value > maximum) {
          errors[fieldName] = `${title} must be at most ${maximum}`;
        }
      } else if (type === 'enum') {
        if (enumValues !== undefined && !enumValues.includes(value)) {
          errors[fieldName] = `${title} must be one of ${enumValues.join(', ')}`;
        }
      }
    });
    return errors;
  };
  