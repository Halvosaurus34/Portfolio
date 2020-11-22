import React from 'react'
import headshot from '../assets/headshot.jpg'

export default function Home(){
    return(
        <div>
            <div className="container mt-4 rounded shadow" id="mainCont">
                <div className="display-4">Hi, I'm Levi Halvorson.</div>
                <img
                src={headshot}
                alt="headshot"
                className="w-25 rounded-circle border border-black float-left m-2"
                />
                <div className="lead p-2">
                I am a full stack development student, leveraging 7+ years of
                transferable skills, adaptability, and teamwork. Past professional
                experiences that overlapped with development work sparked a new passion
                for the profession. Recently enrolled in a certificate program in full
                stack development through an intensive 12-week bootcamp from the
                University of Toronto. Described as friendly, well-mannered, and
                detail-oriented. Whose background fostered skills in management,
                troubleshooting, customer service, digital, and business analysis.
                Excellent communicator with loyal and cooperative interactions with all
                levels of management, clients, and vendors.
                </div>
        </div>
    
        <div className="text-center">
            <div className="row justify-content">
            <div className="bd-highlight col-6 col-sm-6 col-md-6 col-lg-2">
                <p>MERN</p>
            </div>
            <div className="bd-highlight col-6 col-sm-6 col-md-6 col-lg-2">
                <p>HTML5</p>
            </div>
            <div className="bd-highlight col-6 col-sm-6 col-md-6 col-lg-2">
                <p>CSS3</p>
            </div>
            <div className="bd-highlight col-6 col-sm-6 col-md-6 col-lg-2">
                <p>JavaScript</p>
            </div>
            </div>
        </div>
      </div>
      )
}