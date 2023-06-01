import React from "react";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <Title>Muhammad Damar Kusumo</Title>
      <Navbar />
      <div
        className="row justify-content-center align-items-center"
        style={{ backgroundColor: "#1f2124", height: "100vh" }}
      >
        <div className="col">
          <Profile />
        </div>
        <div className="text-center col content">
          <div
            className="px-5 right"
            style={{ backgroundColor: "#1f2124", paddingBottom: "145px", marginTop: "50px" }}
          >
            <h3 className="text-white">About Me</h3>
            <p className="text-white">
              I'm an undergraduate student at the University of Indonesia,
              pursuing a bachelor's degree in System Information in the Faculty
              of Computer Science. I have a strong passion for web development,
              particularly in backend development. With proficiency in
              languages like Python, Java, and JavaScript, along with
              frameworks like Django, Spring Boot, and NextJS, I excel at
              building efficient and secure server-side code. I also have
              experience with databases such as MySQL, PostgreeSQL, and
              Firestore. I'm actively seeking opportunities to apply my skills
              and contribute to impactful web projects.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
