// This file stores the custom hook that we will use to manage the state of our form.
import { useState } from "react";
import { v4 } from 'uuid';
import Forms from "../Forms";
import { Preview } from "./Preview";

// About is an outlier with title attribute because it cannot be modified
let about = {title: "About You", fields: {"Name":"", "Location":"", "Phone":"", "Email":"", "Website":"", "LinkedIn":""}, needsDescription: false, key: v4()}
let education = {fields: {"Title":"Acronym", "School":"Some School", "Location":"Manhattan, NY", "Start":"1994", "End":"2004", "Degree":"Bachelor of Comedy", "GPA":"3.14"}, needsDescription: false, key: v4()}
let experience = {fields: {"Title": "SWE","Company":"BlockBuster", "Position":"CEO", "Start":"1977", "End":"Present", "Location":"Hawaii"} , needsDescription: true, key: v4()}

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