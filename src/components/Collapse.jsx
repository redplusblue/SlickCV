import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import '../styles/collapse.css';

const Collapse = ({ children, title, btn=true, isActive=true }) => {
  const [isCollapsed, setIsCollapsed] = useState(isActive);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isCollapsed) {
      contentRef.current.style.maxHeight = "1000px"
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isCollapsed]);

  return (
    <div className={"form-section"}>
      <div className={"form-section-header-wrapper" + (btn ? "" : " alt-btn")} onClick={() => (setIsCollapsed(!isCollapsed))}>
      <h1>{title}</h1>
      {btn ? <button id="expand-btn" onClick={() => (setIsCollapsed(!isCollapsed))} className={isCollapsed ? "expand" : "collapse"}>
        <svg id="chevron" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M1 20 16 6l15 14-4 4-11-10L5 24z"></path></svg>
      </button> : null}
      </div>
      <div className={"collapse-children-container " + (isCollapsed ? "hidden" : "visible")} ref={contentRef}>
        {children}
      </div>
    </div>
  );
};
Collapse.propTypes = { 
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    btn: PropTypes.bool,
    isActive: PropTypes.bool
};

export default Collapse;