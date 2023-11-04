import Section from "./components/Section.jsx"
import Collapse from "./components/Collapse.jsx"
import "./styles/form.css"
import { useState } from "react"
import { v4 } from 'uuid';

let about = {title: "About You", fields: ["Name", "Email", "Phone", "Address"]}
let education = {title: "Education", fields: ["School", "Degree", "Start", "End"]}
let experience = {title: "Experience", fields: ["Company", "Position", "Start", "End"]}

export function Forms() {
  const [sections, setSections] = useState([about, education, experience])
  const [newSection, setNewSection] = useState({title: "", fields: [], key: v4()})

  function onSubmit() {
    // Add a new Section to the page
    setSections([...sections, newSection]);
    // Reset the newSection state after adding it to sections
    setNewSection({ title: "", fields: [], key: v4() });
  }

  function onClick() {
    // Add a new input field to the form
    setNewSection({ ...newSection, fields: [...newSection.fields, ""] });
  }

  function changeNewSectionTitle(e) {
    // Change the title of the new section
    setNewSection({ ...newSection, title: e.target.value });
  }

  function changeNewSectionField(e, index) {
    // Create a copy of the new section object to avoid mutating state directly
    const updatedFields = [...newSection.fields];
    updatedFields[index] = e.target.value;
    // Update the state with the modified fields array
    setNewSection({ ...newSection, fields: updatedFields });
  }

  return (
    <>
      {sections.map((section) => (
        <Section key={section.title} title={section.title} fields={section.fields} />
      ))}
      <Collapse title="Add Section"> 
        <div>
          <label>Section Title: </label>
          <input type="text" placeholder="Section Title" onChange={changeNewSectionTitle}/>
          <div className="new-section-fields">
        {newSection.fields.map((field, index) => (
          <div key={index}>
            <label>Field Title: </label>
            <input
              type="text"
              placeholder="Field Title"
              value={field}
              onChange={(e) => changeNewSectionField(e, index)}
            />
          </div>
        ))}
      </div>
          <input type="button" value="Add Field" onClick={onClick} />
          <input type="button" value="Add Section" onClick={onSubmit} />
        </div>
      </Collapse>
    </>)
}

