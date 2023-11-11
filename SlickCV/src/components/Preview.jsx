import { useEffect } from "react";
import PropTypes from 'prop-types';
import '../styles/preview.css'

// Returns preview - component 

// Initial elements, and state variables
export function Preview({sections}) {
  
  useEffect(() => {
    // This code will run every time sharedState changes
    // Add any additional logic you need here
  }, [sections]);

  const about = sections[0][0];
  console.log(sections[0])
  return (
    <>
    {/* About Section*/ }
    <div className="preview-about">
          <div className="preview-about-you-name">{about.fields['Name']}</div>
          <div className="preview-about-you-address">{about.fields['Location']}</div>
          <div className="preview-about-more">
            <div className="about-more-wrapper">
              <img
                width="18"
                height="18"
                src="https://img.icons8.com/ios-glyphs/30/new-post.png"
                alt="new-post"
              />
              <div className="preview-about-you-email">{about.fields['Email']}</div>
            </div>
            <div className="about-more-wrapper">
              <img
                width="18"
                height="18"
                src="https://img.icons8.com/material-rounded/24/phone--v1.png"
                alt="phone--v1"
              />
              <div className="preview-about-you-phone">{about.fields['Phone']}</div>
            </div>
            <div className="about-more-wrapper">
              <img
                width="18"
                height="18"
                src="https://img.icons8.com/ios-filled/50/link--v1.png"
                alt="domain"
              />
              <div className="preview-about-you-website">{about.fields['Website']}</div>
            </div>
            <div className="about-more-wrapper">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/30/linkedin.png"
                alt="linkedin"
              />
              <div className="preview-about-you-linkedin">{about.fields['LinkedIn']}</div>
            </div>
          </div>
        </div>
    {/* Education Section*/ }
    {sections[1].length >= 0 && <div className="preview-detail-heading">Education</div>}
    <hr />
    {sections[1].map((element) => (
      <>
            <div className="preview-detail-content">
              <div className="preview-detail-content-row">
                <div className="preview-detail-content-item">
                  <span className="inst-name">{element.fields['School']}</span>
                  <span className="inst-location">{element.fields['Location'] ? `, ${element.fields['Location']}` : null}</span>
                </div>
                <div className="preview-detail-content-item">
                  <span className="inst-duration">{element.fields['Start']} - {element.fields['End']}</span>
                </div>
              </div>
              <div className="preview-detail-content-row">
                <div className="preview-detail-content-item">
                  <span className="inst-degree">{element.fields['Degree']}</span>
                </div>
                <div className="preview-detail-content-item">
                  <span className="inst-grade">{element.fields['GPA'] ? `GPA: ${element.fields['GPA']}` : null}</span>
                </div>
              </div>
            </div></>))}
    </>
  )
}
Preview.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};