import Section from "./components/Section.jsx"
import Collapse from "./components/Collapse.jsx"
import "./styles/form.css"
import { useState, useEffect } from "react"
import { v4 } from 'uuid';

let about = {title: "About You", fields: ["Name", "Email", "Phone", "Address"], needsDescription: false}
let education = {title: "College", fields: ["School", "Degree", "Start", "End"], needsDescription: false}
let experience = {title: "SWE", fields: ["Company", "Position", "Start", "End"] , needsDescription: true}

export function Forms() {
  const [sections, setSections] = useState([[about], [education], [experience]])
  const [newSection, setNewSection] = useState({title: "", fields: [],key: v4()})

  useEffect(() => {
    // This effect will run whenever newSection state changes
    // You can add additional logic here if needed

    // Update the component whenever newSection changes
    setNewSection((prevNewSection) => {
      if (prevNewSection.title === 'Education') {
        return { title: '', fields: education.fields, key: v4() };
      } else if (prevNewSection.title === 'Experience') {
        return { title: '', fields: experience.fields, key: v4() };
      }
      return prevNewSection;
    });
  }, [newSection]); 

  function onSubmit() {
    let curSections = [...sections]
    if (!newSection.needsDescription) {
      curSections[1].push(newSection)
    } else if (newSection.needsDescription) {
      curSections[2].push(newSection)
    }
    // Add a new Section to the page
    setSections(curSections)
    // Reset the newSection state after adding it to sections
    setNewSection({ title: "", fields: [],key: v4() });
  }

  function onClick() {
    // Value from the select element
    // let type = 
    // Add a new input field to the form
    setNewSection({ ...newSection, fields: [...newSection.fields, ""] });
  }

  function changeNewSectionField(e, index) {
    // Create a copy of the new section object to avoid mutating state directly
    const updatedFields = [...newSection.fields];
    updatedFields[index] = e.target.value;
    // Update the state with the modified fields array
    setNewSection({ ...newSection, fields: updatedFields });
  }

  function changeSectionType(e) {
    if (e.target.value === "Education") { 
      setNewSection({title: newSection.title, fields: ["School", "Degree", "Start", "End"],key: v4(), needsDescription: false})
    } else if (e.target.value === "Experience") {
      setNewSection({title: newSection.title, fields: ["Company", "Position", "Start", "End"],key: v4(), needsDescription: true})
    }
  }

  function changeSectionTitle(e) {
    setNewSection({ ...newSection, title: e.target.value });
  }

  return (
    <>
      {/* About Section */}
      {sections[0].map((section) => (
        <Section key={section.title} title={section.title} fields={section.fields} needsDescription={section.needsDescription}/>
      ))}
      {/* Education Section */}
      {<Collapse title="Education">
        {sections[1].map((section) => (
          <Section key={section.key} title={section.title} fields={section.fields} needsDescription={section.needsDescription}/>
        ))}  
      </Collapse>}
      {/* Experience Section */}
      {<Collapse title="Experience">
        {sections[2].map((section) => (
          <Section key={section.key} title={section.title} fields={section.fields} needsDescription={section.needsDescription}/>
        ))}
      </Collapse>}
      <Collapse title="Add Section"> 
        <div>
          <div className="input-container">
          <label className="text">Section Title: </label>
          <input type="text" placeholder="Section Title" value={newSection.title} onChange={changeSectionTitle}  className="input"/>
          </div>
          <label className="text">Section Type: </label>
          <select onChange={changeSectionType}>
            <option value="" disabled hidden selected>Select Section Type</option>
            <option value="Education">Education</option>
            <option value="Experience">Experience</option>
          </select>
          <div className="new-section-fields">
            {newSection.fields.map((field, index) => (
              <div key={index} className="input-container">
            <label className="text">Field Title: </label>
            <input
              type="text"
              placeholder="Field Title"
              value={field}
              onChange={(e) => changeNewSectionField(e, index)}
              className="input"
            />
              </div>
            ))}
            {newSection.needsDescription ? (
              "A description field will be added to this section") : null}
            </div>
          <input type="button" className="add-btn" value="Add Field" onClick={onClick} />
          <input type="button" className="add-btn" value="Add Section" onClick={onSubmit} />
        </div>
      </Collapse>
    </>)
}

