import React from "react";
import { FormFieldsList } from "./index";
import { getSchemaExamples } from "../../demo/schema-examples";

export default {
	title: "Components/FormFieldsList",
	component: FormFieldsList,
};

const Template = (args) => <FormFieldsList {...args} />;

export const FormFieldsListExample = Template.bind({});

const schema = getSchemaExamples("basic");


FormFieldsListExample.args = {
	schemaProperties: schema.properties,
	formData: {},
	errors: {},
	handleChange: (data) => {
		console.log("on change", data);
	},
};
