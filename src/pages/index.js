import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <Title>Muhammad Damar Kusumo</Title>
      <Navbar />
      <div class="row justify-content-center align-items-center" style={{ backgroundColor: "#1f2124", height: "100vh" }}>
        <div className='col'>
          <Profile />
        </div>
        <div className="text-center col content">
          <div className='px-5 mx-5' style={{ backgroundColor: "#1f2124" }}>
            <h3 className="text-white">About Me</h3>
            <p className="text-white">
              I am passionate about web development, keen to learn about website development, framework for website
              development, and managing real project. Currently, I am an undergraduate student in Faculty of Computer
              Science, University of Indonesia, majoring in Information Systems.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
