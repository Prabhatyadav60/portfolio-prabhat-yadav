import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

// Import project images (placeholders or actual image paths)
import shopAround from "../../Assets/Projects/shopAround.png";
import nasaPic from "../../Assets/Projects/nasa.png";       // You should add these images
import newsApp from "../../Assets/Projects/newsapp.png";    // You should add these images
import todo from "../../Assets/Projects/todo.png";          // You should add these images

function DevProjects() {
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
              title="Shop Around"
              description="A responsive, location-based marketplace built with React.js, allowing users to list, browse, and purchase items in their area. Frontend completed."
              ghLink="https://github.com/Prabhatyadav60/ShopAround"
              demoLink="https://shop-around-nu.vercel.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsApp}
              isBlog={false}
              title="News App"
              description="A React-based app that uses web scraping to display state-wise news from Times of India."
              ghLink="https://github.com/Prabhatyadav60/News-App"
              demoLink="https://news-app-pi-eight-33.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do List"
              description="A clean and responsive to-do list application to manage tasks efficiently with CRUD operations."
              ghLink="https://github.com/Prabhatyadav60/To-do-list.github.io"
              demoLink="https://to-do-list-github-io-coral.vercel.app/"
            />
          </Col>

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasaPic}
              isBlog={false}
              title="NASA Picture of the Day"
              description="Small project using NASA API to fetch and display NASA's astronomy picture of the day along with metadata."
              ghLink="https://github.com/Prabhatyadav60/Nasa_POTD.github.io"
              demoLink="https://prabhatyadav60.github.io/Nasa_POTD.github.io/"
            />
          </Col>


       
        </Row>
      </Container>
    </Container>
  );
}

export default DevProjects;
