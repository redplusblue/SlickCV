import PropTypes from 'prop-types';
import Collapse from './Collapse';

function Section({ title, fields }) {
    // Input classname => " about-you-name" for About You.Name
  return (
    <Collapse title={title}>
      {fields.map((child) => (
        <div key={child}>
          <label key={child}>{child}: </label>
          <input type="text" className={title.toLowerCase().replace(/\s+/, "-") + "-" + child.toLowerCase()}/>
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
