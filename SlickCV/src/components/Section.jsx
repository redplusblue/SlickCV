import PropTypes from 'prop-types';
import Collapse from './Collapse';


function createPreviewElement(title, fields) {
// todo
}

// Types of sections: Experience, Education
// Fields: Company, Position, Start, End / School, Degree, Start, End 
// Experience has extra fields: Description (textarea)
function Section({ title, fields, needsDescription=false, onDelete}) {
    // Input classname => "about-you-name" for About You.Name
    function onChange(e) {
      let inputClass = e.target.className.split(" ")[0]
      let previewClass = 'preview-' + inputClass
      let preview = document.getElementsByClassName(previewClass)[0]
      preview.innerHTML = e.target.value
    }

    // Only About does not have a delete button, so onDelete is used as a flag
    if (onDelete === undefined) {
      // Needs Description is a flag to distinguish between Experience and Education 
      if (needsDescription === true) {
        // Experience
      } else {
        // Education
      }
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
        <div className='input-container'>
          <label className='text'>Description: </label>
          <textarea className='input'></textarea>
        </div>
      ) : null}
      {onDelete ? <button className='btn' onClick={onDelete}>Delete Section</button> : null}
    </Collapse>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  needsDescription: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
};
export default Section;
