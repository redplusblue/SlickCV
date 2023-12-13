import Section from "./components/Section.jsx"
import PropTypes from 'prop-types';
import { education, experience } from "./constants/defaultValues.js";
import { useState } from "react";
import "./styles/form.css"
import { v4 } from "uuid";
import Logo from "../public/logo.png"

function getNewSections() {
  // DEEP COPY using JSON.parse(JSON.stringify()) -> Because nested objects
  let newEducation = JSON.parse(JSON.stringify(education))
  let newExperience = JSON.parse(JSON.stringify(experience))
  return [{...newEducation, key: v4()}, {...newExperience, key: v4()}]
}

export default function Forms({sections, setSections}) {
  // Section Activity state
  const [activity, setActivity] = useState([false, false, false, false])
  // New Section State [Education, Experience]
  const newSection = getNewSections()
  function addSection(type) {
    if (type !== 1 && type !== 2) {
      console.log("Invalid type of object passed in addSection listener")
    }
    // Education (1) has new Type 0, Experience (2) has new Type 1, hence the (type - 1)
    let curSections = [...sections]
    curSections[type].push(newSection[type - 1])
    setSections(curSections)
    console.log(sections)
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
    // type -> 0: About, 1: Education, 2: Experience
    if (type !== 0 && type !== 1 && type !== 2) {
      console.log("Invalid type of object passed in onChange listener")
      // Throw error
      return null;
    }
    setSections((prevSections) => {
      const updatedSections = [...prevSections];
      const curSection = updatedSections[type].find((section) => section.key === sectionKey);
      const curSectionIndex = updatedSections[type].indexOf(curSection);
      // curSection.fields[fieldName] = e.target.value;
      updatedSections[type][curSectionIndex].fields[fieldName] = e.target.value;
      return [...updatedSections];
    });
  }

  function updateActivity(cur) {
    // Mark current button as clicked 
    for (let i = 0; i < 4; i++) {
      if (i !== cur) {
        document.getElementsByClassName("btn-container")[0].children[i].classList.remove("clicked")
      } else {
        document.getElementsByClassName("btn-container")[0].children[cur].classList.toggle("clicked")
      }
    }
    let currentActivity = [false, false, false, false]
    currentActivity[cur] = !activity[cur] 
    setActivity(currentActivity)
  }

  return (
    <>
    <div className="logo"><img src={Logo}></img></div>
    <div className="btn-container">
      <input className="btn" type="button" value="Help" onClick={() => {updateActivity(0)}}/>
      <input className="btn" type="button" value="About" onClick={() => {updateActivity(1)}}/>
      <input className="btn" type="button" value="Education"  onClick={() => {updateActivity(2)}}/>
      <input className="btn" type="button" value="Experience" onClick={() =>{updateActivity(3)}}/>   
      <input className="btn" type="button" value="SAVE" onClick={() =>{print()}}/>   
    </div>
    {/* Help Section */}
    {<div className={"section-wrapper " + (activity[0] ? "active" : "inactive") + " help"}>
      <h1>Help</h1>
      <ul>
      <li>Click on the buttons to add sections to your resume. You can add as many sections (Education and Experience) as you want.</li>
      <li>For About You: Click on the dropdown menu and fill out your information.</li>
      <li>For Education and Experience: Click on the Add Section button to add a new section. Click on the Delete Section button to delete a section.</li>
      <li>For Experience section, To separate lines within the section, use ;;. <br></br>Example: 
        Bullet Point 1;; Bullet Point 2;; Bullet Point 3
      </li>
      <li>Click on the save button to download or print your resume. It opens the print preview screen from which you can select the printer/destination to Save as PDF.</li>
      </ul>
    </div>}
    {/* About Section */}
    {<div className={"section-wrapper " + (activity[1] ? "active" : "inactive")}>
      {sections[0].map((section) => (
        <Section
          key={section.title}
          title={section.title}
          fields={section.fields}
          onChange={onChange}
          type={0}
          sectionKey={section.key}
        />
      ))}
      </div>}
      {/* Education Section */}
      {
        <div className={"section-wrapper " + (activity[2] ? "active" : "inactive")}>
          <h1>Education</h1>
          {sections[1].map((section) => (
            <Section
              key={section.key}
              title={section.fields["Title"]}
              fields={section.fields}
              onChange={onChange}
              onDelete={() => {
                onSectionDelete("Education", sections[1].indexOf(section));
              }}
              type={1}
              sectionKey={section.key}
            />
          ))}
          {/* Add More Education */}
          <input
            type="button"
            className="btn"
            value="Add Section"
            onClick={() => addSection(1)}
          />
        </div>
      }
      {/* Experience Section */}
      {
        <div className={"section-wrapper " + (activity[3] ? "active" : "inactive")}>
          <h1>Experience</h1>
          {sections[2].map((section) => (
            <Section
              key={section.key}
              title={section.fields["Title"]}
              fields={section.fields}
              onChange={onChange}
              onDelete={() => {
                onSectionDelete("Experience", sections[2].indexOf(section));
              }}
              type={2}
              sectionKey={section.key}
            />
          ))}
          {/* Add More Experience */}
          <input
            type="button"
            className="btn"
            value="Add Section"
            onClick={() => addSection(2)}
          />
        </div>
      }
      {/*Credits*/}
      {<p className="credits">SlickCV is a free resume builder that helps you create a professional resume in minutes. <br></br>
      Made with ❤️ by <a href="https://github.com/redplusblue">redplusblue</a></p>}
    </>)
}
Forms.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  setSections: PropTypes.func.isRequired,
};
