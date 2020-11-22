import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'

export default function NavBar(){
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                <button class="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className='navbar-nav ml-3'>
                        <li className="nav-item active">
                            <Link className="navbar-brand" to="/">Levi Halvorson</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav col justify-content-end ml-3'>
                        <li className="nav-item active">
                            <a
                            className="nav-link text-dark"
                            href="https://www.linkedin.com/in/levi-halvorson/"
                            target="blank"
                            ><i className="fab fa-linkedin-in"></i
                            ></a>
                        </li>
                        <li className="nav-item active">
                            <a
                            className="nav-link text-dark"
                            href="https://github.com/Halvosaurus34"
                            target="blank"
                            ><i className="fab fa-github"></i
                            ></a>
                        </li>
                        <li className="nav-item active">
                            <a
                            className="nav-link text-dark"
                            href="mailto://lhalvorson34@gmail.com"
                            target="blank"
                            ><i className="far fa-envelope"></i
                            ></a>
                        </li>
                        <li className="nav-item active">
                            <a
                            className="nav-link text-dark"
                            href="tel:+14038774423"
                            target="blank"
                            ><i className="fas fa-phone"></i
                            ></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/Portfolio">
                    <Portfolio />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </Router>

    )
}