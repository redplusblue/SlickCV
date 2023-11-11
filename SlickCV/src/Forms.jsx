import Section from "./components/Section.jsx"
import Collapse from "./components/Collapse.jsx"
import PropTypes from 'prop-types';
import "./styles/form.css"
import { v4 } from 'uuid';

export default function Forms({sections, setSections}) {
  // New Section State [Education, Experience]
  const newSection = [{fields: {"School":"", "Location":"", "Start":"", "End":"", "Degree":"", "GPA":""}, needsDescription: false, key: v4()}, {fields: {"Company":"", "Position":"", "Start":"", "End":"", "Location": "", "Description":""} , needsDescription: true, key: v4()}]

  function addSection(type) {
    if (type !== 1 && type !== 2) {
      console.log("Invalid type of object passed in addSection listener")
    }
    // Education (1) has new Type 0, Experience (2) has new Type 1, hence the type - 1
    let curSections = [...sections]
    curSections[type].push(newSection[type - 1])

    setSections(curSections)
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
          <Section key={section.key} title={section.fields['School']} fields={section.fields} onChange={onChange} onDelete={() => {onSectionDelete("Education", sections[1].indexOf(section))}} 
          type={1} sectionKey={section.key} />
        ))}
      {/* Add More Education */}
      <input type="button" className="btn" value="Add Section" onClick={()=>addSection(1)} />
      </Collapse>}
      {/* Experience Section */}
      {<Collapse title="Experience">
        {sections[2].map((section) => (
          <Section key={section.key} title={section.title} fields={section.fields} needsDescription={section.needsDescription} onDelete={() => {onSectionDelete("Experience", sections[2].indexOf(section))}}/>
        ))}
      {/* Add More Experience */}
      <input type="button" className="btn" value="Add Section" onClick={()=>addSection(2)} />
      </Collapse>}
    </>)
}
Forms.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  setSections: PropTypes.func.isRequired,
};
