import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

export default function Project() {
    return (
        <>
            <Title>Education</Title>
            <Navbar active='edu' />
            <div class="row justify-content-center align-items-center" style={{ backgroundColor: "#1f2124", height: "100vh" }}>
                <div className='col'>
                    <Profile />
                </div>
                <div className="col content px-5 text-white right" style={{ backgroundColor: "#1f2124", paddingBottom: "150px", marginTop: "70px" }}>

                    <h3>Education</h3>
                    <h5 className="h5 mb-0">
                        Undergraduate in Faculty of Computer Science,
                        University of Indonesia
                    </h5>
                    <div class="year">June 2020 - Now</div>
                    <ul>
                        <li>Major in Information System</li>
                        <li>Current GPA: 3.66/4.00 (94 credits)</li>
                        <li>
                            Notable Course: Basic of Programming 1 & 2, Data Structures and Algorithms, Platform-based
                            Programming, Data Base Management, Interaction Systems, Enterprise Architecture and Application
                            Programming, Information System Analysis and Design, Communication and Data Networks
                        </li>
                    </ul>
                    <h5 className="h5 mb-0">Bangkit Academy 2023, Cloud Computing</h5>
                    <div class="year">February 2023 - Now</div>
                    <ul>
                        <li>
                            Notable Course: Learn Basic JavaScript Programming, Learn to Build Back-End Applications for
                            Beginners with Google Cloud, System Administration and IT Infrastructure Services, Google Cloud
                            Computing Foundation, Cloud Engineer Learning Path
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    )
}
