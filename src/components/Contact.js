import React from 'react'
import resume from '../assets/resume.pdf'

export default function Contact(){
    return(
        <div className="container contactCont rounded shadow p-3 mt-3 w-auto">
            <div className="display-4 mb-4 mt-3">Contact Me</div>
                <div className="display-5 mb-4">
                Email: lhalvorson@gmail.com <br />
                Phone: +1 (403)877-4423
                </div>
            <a className="btn btn-dark mb-2" href={resume}>
            My Resume
            </a>
            <form>
            <div className="form-group">
                <label for="name1">Name</label>
                <input type="password" className="form-control" id="name1" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted"
                >We'll never share your email with anyone else.</small
                >
            </div>
            <div className="form-group">
                <label for="message1">Message</label>
                <textarea className="form-control" id="message1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-dark mt-2">Submit</button>
            </form>
      </div>
      )
}