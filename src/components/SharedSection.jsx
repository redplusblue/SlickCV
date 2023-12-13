// This file stores the custom hook that we will use to manage the state of our form.
import { useState } from "react";
import Forms from "./Forms";
import { Preview } from "./Preview";
import { reddeadeasteregg } from "../constants/defaultValues";
import { saveSections, getSections } from "../scripts/storage";

// Initial values
let about = reddeadeasteregg.about
let education = reddeadeasteregg.education
let experience = reddeadeasteregg.experience1
let experience2 = reddeadeasteregg.experience2 

export function MainComponent() {
    let initSections;
    // Check if there are saved sections
    if (getSections()) {
        initSections = getSections()
    } else {
        initSections = [[about], [education], [experience, experience2]]
    }
    const [sections, setSections] = useState([...initSections]);
    // Save sections before running setSections
    function setSavedSections (newSections) {
        saveSections(newSections)
        setSections(newSections)
    }

    return (<>
        <div className="form-container">
            <Forms sections={sections} setSections={setSavedSections}/>
        </div>
        <div className="preview-container">
            <Preview sections={sections}/>
        </div>
    </>)
} 