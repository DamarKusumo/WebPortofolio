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
                            <a href="https://www.cloudskillsboost.google/public_profiles/639bc2f0-94ab-4ae8-b7e5-64c519f122b9"
                            className="text-white" target="_blank">Google Cloud Skill Boost</a>
                        </li>
                        <li>
                            <a href="https://coursera.org/share/be96440dd43e53b5f7b0378ef26e5f18"
                            className="text-white" target="_blank">System Administration and IT Infrastructure Services (Coursera)</a>
                        </li>
                        <li>
                            <a href="https://coursera.org/share/f68cdb5eba921d85e162ccbdd0127f99"
                            className="text-white" target="_blank">The Bits and Bytes of Computer Networking (Coursera)</a>
                        </li>
                        <li>
                            <a href="https://www.dicoding.com/certificates/07Z6VVJYRXQR"
                            className="text-white" target="_blank">Menjadi Google Cloud Engineer (Dicoding)</a>
                        </li>
                        <li>
                            <a href="https://www.dicoding.com/certificates/EYX49WWR5PDL"
                            className="text-white" target="_blank">Belajar Dasar Pemrograman JavaScript (Dicoding)</a>
                        </li>
                        <li>
                            <a href="https://www.dicoding.com/certificates/07Z6G2Q9YXQR"
                            className="text-white" target="_blank">Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud (Dicoding)</a>
                        </li>
                        <li>
                            <a href="https://www.dicoding.com/certificates/0LZ0G0D0QX65"
                            className="text-white" target="_blank">Belajar Dasar Pemrograman Web (Dicoding)</a>
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    )
}
