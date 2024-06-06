import { useState } from "react";
import ReactJson from "react-json-view";
import Form from "../Form/index";
import {
	getSchemaExamples,
	// getFormDataExamples
} from "./schema-examples";
import "./App.css";

function DemoApp() {
	const [schema, setSchema] = useState(getSchemaExamples("basic"));
	const [changedData, setChangedData] = useState({});
	const [savedData, setSavedData] = useState({});
	const onSchemaEdit = (e)=>{
		console.log("onSchemaEdit",e)
		const newSchema = e["updated_src"];
		console.log("newSchema",newSchema)
		setSchema(newSchema)
	}
	return (
		<div>
			<div style={{ display: "flex" }}>
				<div style={{ flex: "25%" }}>
					<h2>Schema</h2>
					{schema && <ReactJson 
					theme={ window?.matchMedia('(prefers-color-scheme: dark)').matches? "monokai" :"rjv-default"}
					src={schema}
					displayArrayKey={false}
					onEdit={onSchemaEdit} 
					name={false}
					quotesOnKeys={false}
					// onAdd={onSchemaEdit}
					// defaultValue="object"
					/>}
				</div>
				<div style={{ flex: "25%" }}>
					<h2>Form</h2>
					<Form
						schema={schema}
						// initialFormData={getFormDataExamples("basic")}
						onChangeCallback={(data) => setChangedData(data)}
						onSubmitCallback={(data) => setSavedData(data)}
					/>
				</div>

				<div style={{ flex: "25%" }}>
					<h2>Form data (changed)</h2>
					 <ReactJson src={changedData} />
				</div>
				<div style={{ flex: "25%" }}>
					<h2>Form data (saved)</h2>
					<ReactJson src={savedData} />
				</div>
			</div>
		</div>
	);
}

export default DemoApp;
