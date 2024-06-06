import { FormFieldFactory } from "./FormFieldFactory/index";

/**
 * A function that returns the value of a form field based on the given form data and schema properties.
 *
 * if the value is in the schema, but not in the form data
 * then default to schema entries, either `value` or `defaultValue` attributes of empty string.
 *
 * @function `getValue``
 * @param {object} options - An object that contains the form data, schema properties, and field name.
 * @param {object} options.formData - An object that contains the current values of the form fields.
 * @param {object} options.schemaProperties - An object that defines the properties and validation rules for the form fields.
 * @param {string} options.fieldName - The name of the form field to get the value for.
 * @returns {any} Can return either the value of the form field, the default value in the schema as a fallback, or an empty string if either are not defined.
 */
function getValue({ formData, schemaProperties, fieldName }) {
	return formData[fieldName] || schemaProperties[fieldName]?.default || "";
}

/**
 * A component that renders a list of form fields based on the given schema properties.
 *
 * Note that we are setting initial form field `value` to "" as fallback to silence this warning message
 * > "Warning: `value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components."
 * from docs:
 * > The value you pass to controlled components should not be undefined or null. If you need the initial value to be empty (such as with the firstName field below), initialize your state variable to an empty string ('').
 * [Controlling an input with a state variable](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
 *
 * also note that `enum` is a reserved word so we have to rename
 * @function `FormFieldsList``
 * @param {object} props - The props object for the form fields list component.
 * @param {object} props.schemaProperties - An object that defines the properties and validation rules for the form fields.
 * @param {object} props.formData - An object that contains the current values of the form fields.
 * @param {object} props.errors - An object that contains any validation errors for the form fields.
 * @param {function} props.handleChange - A callback function that is called when the form fields are changed.
 * @returns {ReactElement} A React element that renders the list of form fields.
 *
 * @example <captions>`FormFieldsList` </captions>
 *   <FormFieldsList
 *    schemaProperties={schema.properties}
 *    formData={formData}
 *   errors={errors}
 *  />
 */
export function FormFieldsList({
	schemaProperties,
	formData,
	errors,
	handleChange,
}) {
	return (
		<>
			{Object.keys(schemaProperties).map((fieldName) => {
				const {
					type,
					title,
					enum: enumValues,
					format = null,
				} = schemaProperties[fieldName];
				const value = getValue({ formData, schemaProperties, fieldName });
				return (
					<FormFieldFactory
						type={type}
						key={fieldName}
						name={fieldName}
						label={title}
						value={value}
						format={format} // only for string
						enum={enumValues} // only applies to enum/select
						onChange={handleChange}
						error={errors[fieldName]}
					/>
				);
			})}
		</>
	);
}
