import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import devImg from "../../Assets/web-development.jpg";
import aiImg from "../../Assets/ML.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Click below to explore project categories.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Link to="/project/development" style={{ textDecoration: "none" }}>
              <ProjectCard
                imgPath={devImg}
                title="Development Projects"
                description="Full‑stack and frontend projects using React, Tailwind, Node.js, etc."
                demoLink="#"
              />
            </Link>
          </Col>

          <Col md={4} className="project-card">
            <Link to="/project/ai-ml" style={{ textDecoration: "none" }}>
              <ProjectCard
                imgPath={aiImg}
                title="AI/ML Projects"
                description="ML/DL projects including computer vision, NLP, and model deployment."
                demoLink="#"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
