import React from "react";

export default function Navbar({ active = "about" }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3 fixed-top">
      <div className="container-fluid">
        <a
            className="navbar-brand"
            href="https://drive.google.com/drive/folders/1UBb-Hke-QvMl0t6Unlq-hyWG7EWCMcNV?usp=sharing"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >Muhammad Damar Kusumo</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/project"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Project
              </a>
              <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item text-white-50" href="/project/empiris">
                    EMIPIRIS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white-50" href="/project/rumahSehat">
                    Rumah Sehat
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white-50" href="/project/resignmentIntention">
                    Resignment Intention
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white-50" href="/project/grosale">
                    Grosale (UI/UX)
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              {active === "edu" ? (
                <a className="nav-link active" href="/edu">
                  Education
                </a>
              ) : (
                <a className="nav-link" href="/edu">
                  Education
                </a>
              )}
            </li>
            <li className="nav-item">
              {active === "about" ? (
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
              ) : (
                <a className="nav-link" aria-current="page" href="/">
                  About
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
