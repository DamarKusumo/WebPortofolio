import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectTemplate from "@/components/Project";

export default function Grosale() {
    return (
        <>
            <Title>Project Grosale</Title>
            <Navbar active='project' />
            <ProjectTemplate
                title="Grosale (UI/UX)"
                description="Grosale is a UI/UX research and design project focused on developing a marketplace application for discounted purchases. Our team of five used Figma to create a visually appealing and user-friendly interface. Through user interviews and benchmarking, we gained insights into user preferences and industry standards, ensuring a tailored and intuitive user experience. User Acceptance Testing validated our prototype, resulting in a refined marketplace platform."
                img1="/grosale.png"
                img2=""
                link1="http://ristek.link/Grosale-PPT"
                link2="http://ristek.link/Grosale-Mockup" 
                link1Des="Presentation File"
                link2Des="Mockup App"
                learn="UI/UX Research with User Interview and Benchmarking, UI/UX Design using Figma, and UAT for test deliverable."
            />
            <Footer />
        </>
    )
}
