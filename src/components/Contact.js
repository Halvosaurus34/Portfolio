import React from "react";
import resume from "../assets/resume.pdf";

export default function Contact() {
  return (
    <div className="container contactCont rounded shadow p-3 mt-3 w-auto">
      <div className="display-4 mb-4 mt-3">Contact Me</div>
      <div className="display-5 mb-4">
        Email: lhalvorson@gmail.com <br />
        Phone: +1 (403)877-4423
      </div>
      <a className="btn btn-dark mb-2" href={resume}>
        My Resume
      </a>
      <form
        name="contactMe"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        netlify
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
