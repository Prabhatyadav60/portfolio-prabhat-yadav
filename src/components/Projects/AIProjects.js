import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import shopAround from "../../Assets/Projects/shopAround.png";
import tastybites from "../../Assets/Projects/tastybites.png";

function AIProjects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Development Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopAround}
              isBlog={false}
              title="ShopAround"
              description="Marketplace built with React.js, Tailwind CSS."
              ghLink="https://github.com/piy3/ShopAround"
              demoLink="https://shop-around.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tastybites}
              isBlog={false}
              title="TastyBites"
              description="Responsive food menu interface with strong UI/UX."
              ghLink="https://github.com/piy3/TastyBites.github.io"
              demoLink="https://piy3.github.io/TastyBites.github.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AIProjects;
