import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-dark text-center text-white"
      style={{ width: "100%", position: "fixed", bottom: 0, zIndex: 999, }}
    >
      <div className="p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/muhammad-damar-kusumo"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/DamarKusumo"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/damar_kusumo/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/Damar_Kusumo08"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Muhammad Damar Kusumo
      </div>
    </footer>
  );
}