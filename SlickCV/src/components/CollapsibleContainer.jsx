import React, { useState } from "react";
import PropTypes from 'prop-types';

const CollapsibleContainer = ({ children }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCollapseToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isExpanded: index === expandedIndex,
          onToggle: () => handleCollapseToggle(index),
        })
      )}
    </>
  );
};

CollapsibleContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CollapsibleContainer;

/* CollapsibleContainer based on Collapse from src/components/Collapse.jsx */
/* import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import '../styles/collapse.css';

const Collapse = ({ children, title, btn=true }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isCollapsed) {
      contentRef.current.style.maxHeight = "1000px"
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isCollapsed]);

  return (
    <div className={"form-section " + (isCollapsed ? "inactive" : "active")}>
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
}
Collapse.propTypes = { 
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    btn: PropTypes.bool
};

export default Collapse; */