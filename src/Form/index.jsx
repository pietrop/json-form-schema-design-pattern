import PropTypes from "prop-types";
import { useForm } from "./useForm";
import { FormFieldsList } from "./FormFieldsList";

/**
 * A form component that renders a dynamic form based on a JSON schema and handles form submission and validation.
 * @param {object} props - The props object for the component.
 * @param {object} props.schema - A JSON schema that defines the structure and validation rules for the form data.
 * @param {object} [props.initialFormData={}] - Optional initial data to use when initializing the form. Eg if you are editing existing data.
 * @param {function} [props.onSubmitCallback] - Optional callback function to get the data when the form is saved (form btn is pressed).
 * @param {function} [props.onChangeCallback] - Optional callback function to get the data when the form is changed.
 * @param {boolean} [props.showSubmitButton=true] - Option to hide the submit button.
 * @returns {ReactElement} A React element that renders the form.
 */
const Form = ({
	initialFormData = {},
	schema,
	onSubmitCallback,
	onChangeCallback,
	showSubmitButton = true,
}) => {
	const { formData, errors, handleChange, handleSubmit } = useForm({
		initialFormData,
		schema,
		onSubmitCallback,
		onChangeCallback,
	});

	return (
		<form onSubmit={handleSubmit}>
			<FormFieldsList
				schemaProperties={schema.properties}
				formData={formData}
				errors={errors}
				// The handleChange function is passed down to the FormFieldsList component as a prop. This is a good way to keep the logic of the form fields separate from the form component, and makes it easier to reuse the FormFieldsList component in other contexts.
				handleChange={handleChange}
			/>
			{showSubmitButton && <button type="submit">Save</button>}
		</form>
	);
};

// https://legacy.reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Form.propTypes = {
	/**
	 * A schema for the form data
	 */
	schema: PropTypes.object.isRequired,
	/**
	 * Optional initial data to use when initializing the form.
	 * Eg if you are editing existing data
	 */
	initialFormData: PropTypes.object,
	/**
	 * Callback function to get the data when the form is saved (form btn is pressed)
	 * @todo: should this be required?
	 */
	onSubmitCallback: PropTypes.func,
	/**
	 * Optional Callback function to get the data when the form is changed
	 */
	onChangeCallback: PropTypes.func,
	/**
	 * Option to hide the submit button.
	*/
	showSubmitButton: PropTypes.bool,
};

Form.defaultProps = {
	initialFormData: {},
	showSubmitButton: true,
};

export default Form;
