import Section from "./components/Section.jsx"
import "./styles/form.css"

function Forms() {

  return (
    <div className="form-container">
      <Section title="About You" fields={["Name", "Email", "Phone", "Address"]}/>
      <Section title="Education" fields={["School", "Degree", "Start", "End"]}/>
      <Section title="Experience" fields={["Company", "Position", "Start", "End"]}/>
    </div>)
}
export default Forms
