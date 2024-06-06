export function getSchemaExamples(){
     const schema = {
        title: 'My Form',
        type: 'object',
        properties: {
          name: {
            type: 'string',
            minLength: 2,
            maxLength: 50,
            title: 'Name'
          },
          email: {
            type: 'string',
            format: 'email',
            title: 'Email'
          },
          age: {
            type: 'number',
            minimum: 0,
            maximum: 100,
            title: 'Age'
          },
          gender: {
            type: 'string',
            enum: ['male', 'female', 'other'],
            title: 'Gender'
          },
          agree: {
            type: 'boolean',
            title: 'I agree to the terms and conditions'
          },
          booleanWithDefault: {
            type: 'boolean',
            default: true,
            title: 'Boolean with a default'
          },
          serVerSideValue: {
            type: 'string',
            format: 'hidden',
            default: "some value for the server",
            title: 'some value for the server - title'// title attribute here is optional can be used as comment as it will not appear in the UI
          },
          colorValue: {
            type: 'string',
            format: 'color',
            title: 'Color',
            default: '#FF0000'
          },
           dueDate: {
            type: 'string',
            format: 'date',
             title: 'Date',
          },
          urlExample: {
            type: 'string',
            format: 'url',
             title: 'Some Url Example',
          },
        },
        required: ['name', 'email', 'agree']
      };
 
      return schema;
}

export function getFormDataExamples(){
   const formData = {"email":"some@name.com","name":"Some Name","age":"100","gender":"male","agree":true};
   return formData
}
