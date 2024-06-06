import React from "react";
import { FormFieldFactory } from "./index.jsx";

export default {
	title: "Components/FormFieldFactory",
	component: FormFieldFactory,
};

const Template = (args) => <FormFieldFactory {...args} />;

export const Example = Template.bind({});

const fieldName = "email";
const title ="Email";

Example.args = {
	type: "string",
	key:fieldName,
	name: fieldName,
	label: title,
	value: "Someone's name",// would be from formData
	onChange: (data)=>(console.log("something changed", data)),
	error: null
};

export const NoText = Template.bind({});

NoText.args = {
	type: "string",
	key:fieldName,
	name: fieldName,
	label: title,
	value: "",// would be from formData
	onChange: (data)=>(console.log("something changed", data)),
	error: null
};

export const WithError = Template.bind({});

WithError.args = {
	type: "string",
	key:fieldName,
	name: fieldName,
	label: title,
	value: "Someone's name",// would be from formData
	onChange: (data)=>(console.log("something changed", data)),
	error: "Some Error Message"
};

// TODO: Examples for other input elements 


export const Select = Template.bind({});

const selectTitleName = "Gender";
const selectFieldName = selectTitleName.toLocaleLowerCase();
Select.args = {
	type: "string",
	key:selectFieldName,
	name: selectFieldName,
	label: selectTitleName,
	enum:  ["male", "female", "other"],
	value: "",// would be from formData
	onChange: (data)=>(console.log("something changed", data)),
	error: null
};
