import React from "react";

export default function Navbar({active="about"}) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3 fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand ps-md-5" href="/">Welcome</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            {active == "about" ? <a className="nav-link active" aria-current="page" href="/">About</a> :
                            <a className="nav-link" aria-current="page" href="/">About</a>}
                        </li>
                        <li className="nav-item">
                            {active == "edu" ? <a className="nav-link active" href="/edu">Education</a> : <a className="nav-link" href="/edu">Education</a>}
                        </li>
                        <li className="nav-item">
                            {active == "project" ? <a className="nav-link active" aria-current="page" href="/project">Project</a> :
                            <a className="nav-link" aria-current="page" href="/project">Project</a>}
                        </li>
                    </ul>
                    <div className="px-md-5">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Muhammad Damar Kusumo
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a
                                        href="https://www.linkedin.com/in/muhammad-damar-kusumo"
                                        target="_blank"
                                        className="dropdown-item"
                                    ><i class="fab fa-linkedin-in"></i
                                    > LinkedIn</a></li>
                                    <li><a
                                        href="https://github.com/DamarKusumo/"
                                        target="_blank"
                                        className="dropdown-item"
                                    ><i class="fab fa-github"></i
                                    > GitHub</a></li>
                                    <li><a
                                        href="https://www.instagram.com/damar_kusumo/"
                                        target="_blank"
                                        className="dropdown-item"
                                    ><i class="fab fa-instagram"></i
                                    > Instagram</a></li>
                                    <li><a
                                        href="https://twitter.com/Damar_Kusumo08"
                                        target="_blank"
                                        className="dropdown-item"
                                    ><i class="fab fa-twitter"></i
                                    > Twitter</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
}
