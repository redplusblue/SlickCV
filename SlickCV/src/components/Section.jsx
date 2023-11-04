import PropTypes from 'prop-types';
import Collapse from './Collapse';

function Section({ title, fields }) {
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
        <div key={child}>
          <label key={child}>{child}: </label>
          <input type="text" className={title.toLowerCase().replace(/\s+/, "-") + "-" + child.toLowerCase()} onChange={onChange}/>
        </div>
      ))}
    </Collapse>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
export default Section;
