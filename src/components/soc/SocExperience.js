import React from "react";
import shared from "../../data/shared/personal";
import experience from "../../data/soc/experience";
import ResumeContactInfo from "../common/ResumeContactInfo";
import SectionTitle from "../common/SectionTitle";

const SocExperience = () => {
  return (
    <section id="experience" className="resume section">
      <SectionTitle
        eyebrow="Career"
        title="Experience"
        subtitle="Hands-on IT and security experience across support, development, and cloud environments."
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <div className="resume-side">
              <div className="profile-img mb-4">
                <img
                  src={shared.personal.profileImage}
                  alt="Profile"
                  className="img-fluid rounded"
                />
              </div>

              <h3>Professional Summary</h3>
              <p>
                Cybersecurity and IT professional with hands-on experience in IT
                support, cloud security, and web application security. Microsoft
                Certified in Security, Compliance and Identity Fundamentals
                (SC-900), with additional training in Azure cloud security and
                ethical hacking essentials. Familiar with SOC processes
                including security monitoring, vulnerability management,
                incident response, and log investigation.
              </p>

              <ResumeContactInfo />

              <div className="mt-5 text-center text-lg-start resume-downloads">
                <a
                  href={shared.personal.resumes.soc.url}
                  className="btn btn-primary d-inline-flex align-items-center gap-2"
                  download
                >
                  <i className="bi bi-download"></i>
                  Download {shared.personal.resumes.soc.label}
                </a>
                <a
                  href={shared.personal.resumes.developer.url}
                  className="btn btn-outline d-inline-flex align-items-center gap-2"
                  download
                >
                  <i className="bi bi-download"></i>
                  {shared.personal.resumes.developer.label}
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 ps-4 ps-lg-5">
            <div className="resume-section" data-aos="fade-up">
              <h3>
                <i className="bi bi-briefcase me-2"></i>Professional Experience
              </h3>
              {experience.map((job) => (
                <div key={job.position + job.duration} className="resume-item">
                  <h4>{job.position}</h4>
                  <h5>{job.duration}</h5>
                  <p className="company">
                    <i className="bi bi-building"></i> {job.company} —{" "}
                    {job.location}
                  </p>
                  <ul
                    style={{
                      fontSize: "0.85rem",
                      opacity: 0.8,
                      marginTop: "8px",
                    }}
                  >
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div
              className="resume-section"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                <i className="bi bi-mortarboard me-2"></i>Education
              </h3>
              {shared.eduDetails.map((edu) => (
                <div key={edu.Position} className="resume-item">
                  <h4>{edu.Position}</h4>
                  <h5>{edu.Duration}</h5>
                  <p className="company">
                    <i className="bi bi-building"></i> {edu.Company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocExperience;
