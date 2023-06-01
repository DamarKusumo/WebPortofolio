import React from "react";

export default function ProjectTemplate({
  title,
  description,
  img1,
  img2,
  link1,
  link2,
  link1Des,
  link2Des,
  learn,
}) {
  return (
    <div className="row justify-content-center align-items-center" style={{ backgroundColor: "#1f2124", height: "100vh" }}>
      <div className="col">
        <div className="mx-auto text-white profile content">
          <div className="px-4" style={{ backgroundColor: "#1f2124" }}>
            <h3 className="text-center">{title}</h3>
            <br></br>
            <h5 className="text-white">Description:</h5>
            <p className="text-white">{description}</p>
            <h5 className="text-white">What I learn?</h5>
            <p className="text-white">{learn}</p>
          </div>
        </div>
      </div>
      <div className="col content text-white right" style={{ backgroundColor: "#1f2124", paddingBottom: "150px", marginTop: "70px" }}>
        {img1 && img2 && (
          <div className="text-center">
            <img
              src={img1}
              className="mx-auto py-3 image"
              alt="Muhammad Damar Kusumo"
              style={{ width: "360px", height: "auto" }}
            ></img>
            <br></br>
            <img
              src={img2}
              className="mx-auto py-3 image"
              alt="Muhammad Damar Kusumo"
              style={{ width: "360px", height: "auto" }}
            ></img>
          </div>
        )}
        {img1 && !img2 && (
          <div className="text-center">
            <img
              src={img1}
              className="mx-auto py-3 image"
              alt="Muhammad Damar Kusumo"
              style={{ maxWidth: "360px", height: "auto" }}
            ></img>
          </div>
        )}
        {img2 && !img1 && (
          <div className="text-center">
            <img
              src={img2}
              className="mx-auto py-3 image"
              alt="Muhammad Damar Kusumo"
              style={{ maxWidth: "360px", height: "auto" }}
            ></img>
          </div>
        )}
        {link1 && link2 && (
          <div className="text-center">
            <a className="btn btn-link" href={link1} target="__blank">
              {link1Des}
            </a>
            <a className="btn btn-link" href={link2} target="__blank">
              {link2Des}
            </a>
          </div>
        )}
        {link1 && !link2 && (
          <div className="text-center">
            <a className="btn btn-link" href={link1} target="__blank">
              {link1Des}
            </a>
          </div>
        )}
        {link2 && !link1 && (
          <div className="text-center">
            <a className="btn btn-link" href={link2} target="__blank">
              {link2Des}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
