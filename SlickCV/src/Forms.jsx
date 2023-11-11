import Section from "./components/Section.jsx"
import Collapse from "./components/Collapse.jsx"
import PropTypes from 'prop-types';
import "./styles/form.css"
import { useState } from "react"
import { v4 } from 'uuid';

export default function Forms({sections, setSections}) {
  const [newSection, setNewSection] = useState({title: "", fields: [],key: v4()})

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

  function onSectionDelete(type, index) {
    if (type === "Education") {
      let curSections = [...sections]
      curSections[1].splice(index, 1)
      setSections(curSections)
    } else if (type === "Experience") {
      let curSections = [...sections]
      curSections[2].splice(index, 1)
      setSections(curSections)
    }
  }

  // Changes the element in the preview section when the input field is changed
  function onChange(type, e, fieldName, sectionKey) {
    console.log(type, e, fieldName, sectionKey)
    // type -> 0: About, 1: Education, 2: Experience
    if (type !== 0 && type !== 1 && type !== 2) {
      console.log("Invalid type of object passed in onChange listener")
      // Throw error
      return null;
    }
    
      setSections((prevSections) => {
      const updatedSections = [...prevSections];
      const curSection = updatedSections[type].find((section) => section.key === sectionKey);
      // const curSectionIndex = updatedSections[1].indexOf(curSection);
      curSection.fields[fieldName] = e.target.value;
      return [...updatedSections];
    });
    
  }


  return (
    <>
      {/* About Section */}
      {sections[0].map((section) => (
        <Section key={section.title} title={section.title} fields={section.fields} onChange={onChange} type={0} sectionKey={section.key} />
      ))}
      {/* Education Section */}
      {<Collapse title="Education">
        {sections[1].map((section) => (
          <Section key={section.key} title={section.title} fields={section.fields} onChange={onChange} onDelete={() => {onSectionDelete("Education", sections[1].indexOf(section))}} 
          type={1} sectionKey={section.key} />
        ))}  
      </Collapse>}
      {/* Experience Section */}
      {<Collapse title="Experience">
        {sections[2].map((section) => (
          <Section key={section.key} title={section.title} fields={section.fields} needsDescription={section.needsDescription} onDelete={() => {onSectionDelete("Experience", sections[2].indexOf(section))}}/>
        ))}
      </Collapse>}
      <Collapse title="Add Section"> 
        <div className="add-section">
          <div className="input-container">
          <label className="text">Section Title: </label>
          <input type="text" placeholder="Section Title" value={newSection.title} onChange={changeSectionTitle}  className="input"/>
          </div>
          <div className="input-container select-container">
          <label className="text">Section Type: </label>
          <select className onChange={changeSectionType}>
            <option value="" disabled hidden selected>Select Section Type</option>
            <option value="Education">Education</option>
            <option value="Experience">Experience</option>
          </select>
          </div>
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
              <span>A description field will be added to this section</span>) : null}
            </div>
          <input type="button" className="btn" value="Add Field" onClick={onClick} />
          <input type="button" className="btn" value="Add Section" onClick={onSubmit} />
        </div>
      </Collapse>
    </>)
}
Forms.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  setSections: PropTypes.func.isRequired,
};
