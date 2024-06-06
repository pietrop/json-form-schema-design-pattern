import { validate } from "./index";

import { getSchemaExamples, getFormDataExamples } from "../../../schema-examples";

const schema = getSchemaExamples("basic");

const formData = getFormDataExamples("basic");

describe('Validate function', ()=> {

    test("If it's valid there should be NO errors", () => {
        const errors = validate({formData, schema});
        expect(errors).toEqual({})
    });

    // TODO: this test doesn't work 
    test.skip("If it's NOT valid there should BE errors", () => {
        const formData = getFormDataExamples("basic");
        const errors = validate({formData, schema});
        expect(errors).toEqual({})
    });

});

