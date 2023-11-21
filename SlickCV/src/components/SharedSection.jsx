// This file stores the custom hook that we will use to manage the state of our form.
import { useState } from "react";
import { v4 } from 'uuid';
import Forms from "../Forms";
import { Preview } from "./Preview";

// About is an outlier with title attribute because it cannot be modified
let about = {title: "About You", fields: {"Name":"", "Location":"", "Email":"", "Phone":"", "Website":"", "LinkedIn":""}, needsDescription: false, key: v4()}
let education = {fields: {"Title":"Acronym", "School":"Some School", "Location":"Manhattan, NY", "Start":"1994", "End":"2004", "Degree":"Bachelor of Comedy", "GPA":"3.14"}, key: v4()}
let experience = {fields: {"Title": "SWE","Company":"BlockBuster", "Position":"CEO", "Start":"1977", "End":"Present", "Location":"Hawaii", "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum, sapien in aliquet congue, magna purus finibus tellus, sit amet venenatis diam massa eget ligula. ;;Etiam hendrerit, nunc eu volutpat pulvinar, lectus ex laoreet nisi, in sagittis massa lacus eleifend leo. ;;Aliquam elementum cursus dolor, feugiat viverra nibh vestibulum ut. Etiam posuere odio a semper ullamcorper. Nam viverra bibendum vestibulum. Sed convallis libero leo, sed elementum mi venenatis ut."}, key: v4()}

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