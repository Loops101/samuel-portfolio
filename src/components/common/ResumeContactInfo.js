import React from "react";
import shared from "../../data/shared/personal";

const ResumeContactInfo = () => (
  <>
    <h3 className="mt-4">Contact Information</h3>
    <ul className="contact-info list-unstyled">
      <li>
        <i className="bi bi-geo-alt"></i> {shared.contactDetails.location}
      </li>
      <li>
        <i className="bi bi-envelope"></i> {shared.contactDetails.email}
      </li>
      <li>
        <i className="bi bi-phone"></i> {shared.contactDetails.phone}
      </li>
      <li>
        <i className="bi bi-linkedin"></i>{" "}
        <a
          href={shared.socialMediaUrl.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {shared.contactDetails.linkedin}
        </a>
      </li>
    </ul>
  </>
);

export default ResumeContactInfo;
