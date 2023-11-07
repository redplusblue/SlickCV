import PropTypes from 'prop-types';
import Collapse from './Collapse';

// Types of sections: Experience, Education
// Fields: Company, Position, Start, End / School, Degree, Start, End 
// Experience has extra fields: Description (textarea)

function Section({ title, fields, needsDescription=false }) {
    // Input classname => "about-you-name" for About You.Name
    function onChange(e) {
      let inputClass = e.target.className.split(" ")[0]
      let previewClass = 'preview-' + inputClass
      let preview = document.getElementsByClassName(previewClass)[0]
      preview.innerHTML = e.target.value
    }
  return (
    <Collapse title={title}>
      {fields.map((child) => (
        <div key={child} className='input-container'>
          <label key={child} className='text'>{child}: </label>
          <input type='text' className={title.toLowerCase().replace(/\s+/, "-") + "-" + child.toLowerCase() + " input"} onChange={onChange}/>
        </div>
      ))}
      {needsDescription ? (
        <div>
          <label>Description: </label>
          <textarea></textarea>
        </div>
      ) : null}
    </Collapse>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  needsDescription: PropTypes.bool,
};
export default Section;
