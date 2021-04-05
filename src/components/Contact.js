import React from "react";
import resume from "../assets/resume.pdf";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    const info = { name: name, email: email, message: message };
    if (!name || !email | !message) {
      alert("Please fill out all fields");
      return;
    }
    console.log(encode({ "form-name": "contact", ...info }));
    e.preventDefault();
  };

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
        onSubmit={handleSubmit}
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <Link to="/">
          <button type="submit" className="btn btn-dark mt-2">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
