import React from "react";
import PropTypes from "prop-types";

const inputTypes = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
];

/**
 * See link for list of supported `format`/html input `type`
 * @see [The Input (Form Input) element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
 */
const InputField = ({key, name, label, value, onChange, error, format="text" }) => (
   <div key={key}>
      {format && format !== "hidden" && <label htmlFor={name}>{label}</label>}
      <input type={format} id={name} name={name} value={value} onChange={onChange} />
      {error && <div>{error}</div>}
    </div>
)

const StringField = ({ key, name, label, value, onChange, error }) => (
    <div key={key}>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} value={value} onChange={onChange} />
      {error && <div>{error}</div>}
    </div>
  );
  
  const NumberField = ({ key, name, label, value, onChange, error }) => (
    <div key={key}>
      <label htmlFor={name}>{label}</label>
      <input type="number" id={name} name={name} value={value} onChange={onChange} />
      {error && <div>{error}</div>}
    </div>
  );
  
  const BooleanField = ({ key, name, label, value, onChange, error }) => (
    <div key={key}>
      <label htmlFor={name}>
        <input type="checkbox" id={name} name={name} checked={value} onChange={onChange} />
        {label}
      </label>
      {error && <div>{error}</div>}
    </div>
  );

  /**
   *
   * - Potentially `enumValues` could also be a list of object with value and label.
   * - `enum` is a reserved word so we rename `enumValues`
   * - We use this  `enum: ['Never', 'Daily', 'Weekly', 'Monthly'],` 
   * because other form libraries use this schema for `select`.
   * To keep a consistent API for the schema in case we need to switch at a later stage.
   */
  const EnumField = ({ key, name, label, value, onChange, error, enum:enumValues }) => (
    <div key={key}>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        {enumValues.map((enumValue) => (
          <option key={enumValue} value={enumValue}>
            {enumValue}
          </option>
        ))}
      </select>
      {error && <div>{error}</div>}
    </div>
  );
  
const fieldComponents = {
    string: StringField,
    number: NumberField,
    boolean: BooleanField,
    enum: EnumField,
  };


/**
 * A factory function that creates a form field component based on the given props.
 * 
 * Singular because even thou it can chose from "the full list" 
 * it returns one, so more descriptive of the actual instance. 
 * @todo this could be a factory function with a switch (?)
 * @todo there might need ot be some error handling like a try catch around the 
 * `fieldComponents[type]` in case `type` is invalid? 
 * OR check keys, and if `type` not in the list return a placeholder component with text - couldn't find etc..?
 * @todo should make enum list of types (string, number, boolean, enum)
 * @todo if there's is an `enum` then is a select so type should be `enum` and not `string`? or should keep type of the enum values 
 * and check for enum to see if it's select?
 * @see [Factory Method](https://refactoring.guru/design-patterns/factory-method)
 * 
 * @function `FormFieldFactory` 
 * @param {object} props - The props object for the form field component.
 * @param {string} props.type - The type of the form field, eg "string", "number", etc. see `inputTypes` for full list.
 * @param {string} [props.format=null] - Optional format for string form fields.
 * @param {array} [props.enum=null] - Optional array of enum values for string form fields. (To get a Select HTML Element)
 * @returns {ReactElement} A React element that renders the form field component.
 */
export function FormFieldFactory(props){
  const { type, format=null, enum:enumValues=null} = props;
  let Component;
  // string can have various formats that we can use as more specific type attribute for input HTML element.
  if (type.toLowerCase() === "string" && Boolean(format) && inputTypes.includes(format.toLowerCase())) {
    Component = InputField
  } else if (type.toLowerCase() === "string" && Boolean(enumValues)) {
    Component =  EnumField
  } else {
    Component = fieldComponents[type];
  }
  return (
    <Component {...props} />
  )
}

// TODO: Add rest of props used by components of the factory
FormFieldFactory.propTypes = {
  /**
   * The type of the form field, eg "string", "number", etc. see `inputTypes` for full list. 
   */
  type: PropTypes.string.isRequired,
  /**
   *  Optional format for string form fields.
   */
  format: PropTypes.string,
   /**
   * Optional array of enum values for string form fields. (To get a Select HTML Element)
   */
  enum: PropTypes.arrayOf(PropTypes.string),
};
