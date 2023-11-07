import { useState } from "react";
import PropTypes from 'prop-types';


const Collapse = ({ children, title }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="form-section">
      <div className="form-section-header-wrapper">
      <h1>{title}</h1>
      <button id="expand-btn" onClick={() => (setIsCollapsed(!isCollapsed))} className={isCollapsed ? "expand" : "collapse"}>
        {/* {isCollapsed ? "Expand" : "Collapse"} */}
        <svg id="chevron" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M1 20 16 6l15 14-4 4-11-10L5 24z"></path></svg>
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