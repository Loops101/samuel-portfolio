import React, { useState } from "react";
import shared from "../../data/shared/personal";
import SectionTitle from "./SectionTitle";

/**
 * ContactSection — shared contact form + info panel.
 * @param {string} eyebrow - mode-specific eyebrow label
 * @param {string} intro - mode-specific intro copy
 * @param {string} subjectDefault - pre-filled subject hint shown as placeholder context
 */
const ContactSection = ({ eyebrow, intro, subjectDefault }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "0d854be8-b94a-4fb8-bc49-7c9fe9449ea3",
          ...formData,
        }),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section">
      <SectionTitle eyebrow={eyebrow} title="Contact" subtitle={intro} />

      <div className="container">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <div className="info-box">
              <h3>Contact Info</h3>
              <p>
                I'm always open to new opportunities, partnerships, or freelance
                work. Let's connect!
              </p>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content">
                  <h4>Location</h4>
                  <p>{shared.contactDetails.location}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <p>{shared.contactDetails.phone}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <p>{shared.contactDetails.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <p>
                Send me a message and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder={subjectDefault || "Subject"}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    {status === "loading" && (
                      <div className="loading">Sending...</div>
                    )}
                    {status === "error" && (
                      <div className="error-message">
                        Something went wrong. Please try again or email me
                        directly.
                      </div>
                    )}
                    {status === "success" && (
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
