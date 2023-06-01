import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectTemplate from "@/components/Project";

export default function RumahSehat() {
    return (
        <>
            <Title>Project Rumah Sehat</Title>
            <Navbar active='project' />
            <ProjectTemplate
                title="Rumah Sehat"
                description="The project is a website developed using Spring Boot, with Docker integration. It incorporates CRUD functionality, allowing users to create, read, update, and delete data through the website. Docker is used to enhance the deployment and management process of the application, ensuring efficient and consistent performance across different environments. The project highlights the seamless combination of Spring Boot and Docker to create a reliable and scalable website with robust CRUD capabilities."
                img1="/apap1.png"
                img2="/apap2.png"
                link1=""
                link2="" 
                link1Des="Demo Access"
                link2Des="Demo Video"
                learn="Full Stack Development with Java Framework (SpringBoot & Thymeleaf), Dockerize app, and XAMPP as local MySQL server."
            />
            <Footer />
        </>
    )
}
