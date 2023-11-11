// This file stores the custom hook that we will use to manage the state of our form.
import { useState } from "react";
import { v4 } from 'uuid';
import Forms from "../Forms";
import { Preview } from "./Preview";


let about = {title: "About You", fields: {"Name":"", "Location":"", "Phone":"", "Email":"", "Website":"", "LinkedIn":""}, needsDescription: false, key: v4()}
let education = {title: "College", fields: {"School":"", "Location":"", "Start":"", "End":"", "Degree":"", "GPA":""}, needsDescription: false, key: v4()}
let experience = {title: "SWE", fields: {"Company":"", "Position":"", "Start":"", "End":"", "Location":""} , needsDescription: true, key: v4()}

export function MainComponent() {
    const [sections, setSections] = useState([[about], [education], [experience]]);
    
    return (<>
        <div className="form-container">
            <Forms sections={sections} setSections={setSections}/>
        </div>
        <div className="preview-container">
            <Preview sections={sections}/>
        </div>
    </>)
} 