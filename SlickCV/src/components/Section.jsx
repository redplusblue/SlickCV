import PropTypes from 'prop-types';
import Collapse from './Collapse';

// Types of sections: Experience, Education
// Fields: Company, Position, Start, End / School, Degree, Start, End 
// Experience has extra fields: Description (textarea)
function Section({ title, fields, onDelete, onChange, needsDescription, sectionKey, type}) {
  return (
    <Collapse title={title}>
      {Object.keys(fields).map((child) => (
        <div key={child} className='input-container'>
          <label key={child} className='text'>{child}: </label>
          <input key={child} type='text' className="input" onChange={(e) => {onChange(type, e, child, sectionKey)}}/>
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
  onDelete: PropTypes.func,
  key: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  needsDescription: PropTypes.bool.isRequired,
  type: PropTypes.number.isRequired,
  sectionKey: PropTypes.string.isRequired,
};
export default Section;
