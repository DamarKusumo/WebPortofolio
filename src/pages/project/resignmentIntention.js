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
                title="Resignment Intention (Machine Learning Project)"
                description="
                This project analyzes a Kaggle dataset with 1471 rows and 30 columns, containing employee data and their intention to resign. It focuses on data preparation, interpretation, and creating machine learning models. Regression models will predict employee turnover, determining their tenure before resignation. A classification model will predict resignation likelihood based on available predictors, and a clustering model will identify distinct employee groups."
                img1="/res1.jpg"
                img2="/res2.jpg"
                link1="https://ristek.link/Presentasi_RES"
                link2="https://ristek.link/Folder_RES" 
                link1Des="Presentation File"
                link2Des="Project Folder"
                learn="Machine learning with python (sklearn, pandas, ect.) and data interpretation"
            />
            <Footer />
        </>
    )
}
