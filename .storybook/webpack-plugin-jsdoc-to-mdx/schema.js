const schema = {
    type: 'object',
    properties: {
      "files": {
      type: 'array',
      "files": {
        type: 'object',
        properties: {
          metaTitle: {
            type: 'string',
          },
          inputFilePath: {
            type: 'string',
          },
          outpuFilePath: {
            type: 'string',
          },
        },
        "required": [
          "inputFilePath","outpuFilePath"
        ]
      },
      },
    },
    additionalProperties: false,
  };

  module.exports = schema;
