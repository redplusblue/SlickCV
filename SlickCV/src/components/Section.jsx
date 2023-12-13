import PropTypes from 'prop-types';
import Collapse from './Collapse';

// Types of sections: Experience, Education
// Fields: Company, Position, Start, End / School, Degree, Start, End 
// Experience has extra fields: Description (textarea)
function Section({ title, fields, onDelete, onChange, sectionKey, type}) {
  return (
    <Collapse title={title}>
      {Object.keys(fields).map((child) => {
        if (child === "Description") {
          return (
            <div key={child} className='input-container'>
              <label className='text'>Description: </label>
              <textarea className='input' onChange={(e) => {onChange(type, e, "Description", sectionKey)}} value={fields[child]}></textarea>
            </div>
          )}
        return (
        <div key={child} className='input-container'>
          <label key={child} className='text'>{child}: </label>
          <input key={child} type='text' className="input" onChange={(e) => {onChange(type, e, child, sectionKey)}} value={fields[child]}/>
        </div>
      )})}
      {onDelete ? <button className='btn' onClick={onDelete}>Delete Section</button> : null}
    </Collapse>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onDelete: PropTypes.func,
  key: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.number.isRequired,
  sectionKey: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};
export default Section;
