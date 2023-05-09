import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

export default function Project() {
    return (
        <>
            <Title>Project</Title>
            <Navbar active='project' />
            <div class="row justify-content-center align-items-center" style={{ backgroundColor: "#1f2124", height: "100vh" }}>
                <div className='col'>
                    <Profile />
                </div>
                <div className="text-center col content">
                    <div className='px-5 mx-5' style={{ backgroundColor: "#1f2124" }}>
                        <h3 className="text-white">Soon</h3>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
