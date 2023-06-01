import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectTemplate from "@/components/Project";

export default function Empiris() {
    return (
        <>
            <Title>Project EMPIRIS</Title>
            <Navbar active='project' />
            <ProjectTemplate
                title="EMPIRIS (EMPLOYEE INTEGRATION SYSTEM)"
                description="Collaborating in a team of 5 to develop a website for PT. Mahkota Kharisma Sejahtera. Our main objective was to automate and digitalize their business processes, revolutionizing their operations. Spanning over a period of 4 months, our project included meticulous requirement gathering, development, and thorough testing. We leveraged the power of JS frameworks such as React, Next, and Prisma, seamlessly integrating them with a robust MySQL server."
                img1="/propen1.png"
                img2="/propen2.png"
                link1="https://docs.google.com/document/d/1q927yfBboDvQ4z6SoUrit31rNka42mgs/edit?usp=share_link&ouid=100584184921244929746&rtpof=true&sd=true"
                link2="https://drive.google.com/drive/folders/19d6OTiyQVMqnwuAdNDL4NWser6gRIc9q?usp=share_link" 
                link1Des="Demo Access"
                link2Des="Demo Video"
                learn="Full Stack Development with React & NextJS, Project Management Skill, and Prisma framework to connect app with MySQL dB."
            />
            <Footer />
        </>
    )
}
