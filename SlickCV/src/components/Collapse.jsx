import { useState } from "react";
import PropTypes from 'prop-types';


const Collapse = ({ children, title }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="form-section">
      <div className="form-section-header-wrapper">
      <h1>{title}</h1>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
      </div>
      {isCollapsed ? null : children}
    </div>
  );
};
Collapse.propTypes = { 
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
};

export default Collapse;