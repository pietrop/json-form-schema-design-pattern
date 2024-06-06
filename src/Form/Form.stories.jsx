

import React from 'react';
import Form from './index';
import { getSchemaExamples, getFormDataExamples } from "../demo/schema-examples";

const schema = getSchemaExamples("basic");


const initialFormData = {};

export default {
  title: 'Components/Form',
  component: Form
};

const Template = (args) => <Form {...args} />;

export const WithSchema = Template.bind({});
WithSchema.args = {
    schema, 
    initialFormData: initialFormData,
    onChangeCallback: (data)=>(console.log("changed", JSON.stringify(data))),
    onSubmitCallback: (data)=>(console.log("onSubmitCallback", JSON.stringify(data)))
};

export const NoSubmitButton = Template.bind({});
NoSubmitButton.args = {
    schema, 
    initialFormData: initialFormData,
    onChangeCallback: (data)=>(console.log("changed", JSON.stringify(data))),
    onSubmitCallback: (data)=>(console.log("onSubmitCallback", JSON.stringify(data))),
    showSubmitButton: false
};

export const withInitialFormData = Template.bind({});
withInitialFormData.args = {
    schema, 
    initialFormData: getFormDataExamples("basic"),
    onChangeCallback: (data)=>(console.log("changed", JSON.stringify(data))),
    onSubmitCallback: (data)=>(console.log("onSubmitCallback", JSON.stringify(data))),
    showSubmitButton: false
};

