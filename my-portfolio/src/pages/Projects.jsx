import React from "react";
import styled from "styled-components";
import Mainproject from "../component/Mainproject";
import Navbar from "../component/navbar/navbar";
import project1 from "../images/sadhan.PNG.jpg";
import project2 from "../images/face.jpg";
import project3 from "../images/wildlife.jpg";
import project4 from "../images/plagarism.jpg";
import project5 from "../images/project2.PNG";

export default function Projects() {
  return (
    <>
      <Navbar />
      <Mainproject
        projectimg={project1}
        tech={["React", "Django", "Postgresql"]}
        title={"Ecormerce Website Sadhana Hair Oil"}
        about={
          "This is an ecommerce website built using react and django for my client Sadhana Hair products.The database i have used here is postgresql and intregation with razorpay for real time payment and to place order. Tree like customer joining structure."
        }
        github={"https://github.com/ayusshh19/Hair-ecommerce"}
        deploy={"https://reliable-elf-2508b8.netlify.app/"}
      />

      <Mainproject
        projectimg={project2}
        tech={["React", "Django", "python", "ML", "sqlite"]}
        title={"Face Recognition Attendance System"}
        about={
          "My personal project from real time capture and marking attendance of all student present in class. It is build by training model with dataset from kaggle for face detection and dlib library for accuracy."
        }
        github={
          "https://github.com/ayusshh19/Face-recognition-attendance-system"
        }
        deploy={"https://harmonious-treacle-ca73f2.netlify.app/"}
      />

      <Mainproject
        projectimg={project3}
        tech={["React", "Flask", "ML"]}
        title={"WILDLIFE DETECTION AND EVALUATION USING DEEP LEARNING"}
        about={
          "My research based project build using detectron2 with wildicam2022 dataset to train and built model. This project won PRISM 2023"
        }
        github={
          "https://github.com/ayusshh19/Animal-detection-and-classification-using-deeplearning"
        }
        deploy={"https://tx-03.netlify.app/"}
      />

      <Mainproject
        projectimg={project4}
        tech={["React", "Django", "ML", "sqlite", "python"]}
        title={"Plagarism Detection For all type of documents"}
        about={
          "A plagarism detector used to recognize and plagarise all kind of documents with accurate score .It has play with pdf section to perform some modication"
        }
        github={"https://github.com/ayusshh19/plagarismbackend"}
        deploy={"https://plagarism.netlify.app/"}
      />
      <Mainproject
        projectimg={project5}
        tech={["Django", "Mysql"]}
        title={"Ecormerce Website Swapnil Enterprises"}
        about={
          "This is an ecommerce website built using django for my client swapnil enterprice.The database i have used here is mysql and database with 2000+ products. Tree like customer joining structure."
        }
        github={"https://github.com/ayusshh19/pipeweb"}
        deploy={"https://reliable-elf-2508b8.netlify.app/"}
      />
    </>
  );
}

const Projectscomponent = styled.div`
  display: flex;
`;
