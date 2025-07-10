import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

// ==== Import your project images here ====
import ragBot from "../../Assets/Projects/RAG.png";
import smartAirbnb from "../../Assets/Projects/vision.png";
import fraudDetect from "../../Assets/Projects/fraud.png";
import imgText from "../../Assets/Projects/img-txt.png";
import travelPlanner from "../../Assets/Projects/travel.png";
import pdfJson from "../../Assets/Projects/pdf-json.png";
import linkedinEDA from "../../Assets/Projects/linkden.png";
import NoCode from "../../Assets/NoCodeNexus.png";
import Virtual_Hire from "../../Assets/Projects/Virtual.jpg"
function AllProjects() {
  return (
    <Container fluid className="project-section">
      <Container>
        {/* === Section 1: AI / ML / Deep Learning === */}
        <h1 className="project-heading">
          <strong className="purple">AI / ML Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center" }}>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NoCode}
              isBlog={false}
              title="NoCodeNexus"
              description="Build & Deploy Websites with Just Prompts! NoCodeNexus is an AI-driven, no-code website builder that lets you craft, preview, and publish fully functional websites by simply typing your design and content prompts."
              ghLink="https://github.com/Prabhatyadav60/No-Code-Nexus"
              demoLink="https://no-code-nexus-eight.vercel.app/"
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ragBot}
              isBlog={false}
              title="RAG-LangChain Chatbot"
              description="Retrieval-Augmented Generation chatbot using LangChain, FAISS, and hosted LLMs (OpenAI/GROQ). Upload PDFs and get contextual answers in a Streamlit app."
              ghLink="https://github.com/Prabhatyadav60/RAG-langchain-chatbot"
              demoLink="#"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartAirbnb}
              isBlog={false}
              title="Smart Airbnb Vision"
              description="YOLOv8-based object detection system for real-time Airbnb-like object recognition. Built with a custom dataset and Streamlit frontend."
              ghLink="https://github.com/Prabhatyadav60/smart-airbnb-vision"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraudDetect}
              isBlog={false}
              title="Fraud Detection ML Model"
              description="Machine Learning model trained on 6M+ financial transactions to detect fraud using classification and insights extraction."
              ghLink="https://github.com/Prabhatyadav60/Transaction-fraud-prediction"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgText}
              isBlog={false}
              title="IMG-TEXT OCR with LLM"
              description="Image-to-text pipeline using OCR combined with LLMs to interpret captchas and noisy documents with semantic understanding."
          
              demoLink="https://colab.research.google.com/drive/1Lw3HLp1subHWmb_Jzn_TD2_MinD2a2Yr?usp=sharing"
            />
          </Col>
        </Row>

        {/* === Section 2: Generative AI Tools === */}
        <h1 className="project-heading mt-5">
          <strong className="purple">Generative AI Tools</strong>
        </h1>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelPlanner}
              isBlog={false}
              title="AI Travel Planner"
              description="Generates day-wise personalized itineraries using Gemini API and user preferences. Includes hotel info, maps, and activities."
              ghLink="https://github.com/Prabhatyadav60/AI-Travel-Planner"
              demoLink="https://prabhatyadav60.github.io/Travel-app.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdfJson}
              isBlog={false}
              title="PDF to JSON using LLM"
              description="LLM-based tool to convert semi-structured PDF content into clean, structured JSON data."
              demoLink="https://colab.research.google.com/drive/1OuExBp9uzvTUoQJtBLveEPkZEl68CEqH?usp=sharing"
            />
          </Col>
                  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Virtual_Hire}
              isBlog={false}
              title="Virtual Hire"
              description="Automated interviews with real-time proctoring — including face tracking, tab-switch alerts, and plagiarism checks — ensuring fair and secure candidate evaluation.
               ------- Comming soon.....
              "
              ghLink="#"
              demoLink="#"
            />
          </Col>

        </Row>

        {/* === Section 3: Data Analysis / EDA === */}
        <h1 className="project-heading mt-5">
          <strong className="purple">Data Analysis / EDA Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkedinEDA}
              isBlog={false}
              title="LinkedIn Job Posting Analysis"
              description="Exploratory Data Analysis on job postings in India from LinkedIn. Shows trends in roles, skills, and company demands using visualizations."
              ghLink="https://github.com/Prabhatyadav60/Linkden_job_posting_india"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AllProjects;
