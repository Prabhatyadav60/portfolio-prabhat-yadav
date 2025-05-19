import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import logo from "../../../src/Assets/logo.svg";
import logo1 from "../../../src/Assets/colab_logo.svg";
import logo2 from "../../../src/Assets/opencv_logo.svg";
import logo3 from "../../../src/Assets/pytorch_logo.svg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
} from "react-icons/di";
import {
  SiC,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiGooglesheets,
  SiOpenai,
  SiTensorflow,
  SiOpencv,
  SiGooglecolab,
  SiHuggingface,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div className="name"><h3>C++</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <div className="name"><h3>C</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="name"><h3>Javascript</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="name"><h3>ReactJs</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="name"><h3>HTML 5</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <div className="name"><h3>Tailwind CSS</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="name"><h3>MySQL</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="name"><h3>MongoDB</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="name"><h3>Git</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="name"><h3>GitHub</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="name"><h3>Python</h3></div>
      </Col>

      {/* AI Tools Section */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={logo} alt="Hugging Face" style={{ width: '5.5rem' }} />

        <div className="name"><h3>Hugging Face</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <img src={logo1} alt="Google Colab" style={{ width: '5.5rem' }} />
        <div className="name"><h3>Google Colab</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={logo2} alt="OpenCV" style={{ width: '5.5rem' }} />
        <div className="name"><h3>OpenCV</h3></div>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <img src={logo3} alt="Pytorch" style={{ width: '7.5rem' }} />
        <div className="name"><h3>Pytorch</h3></div>
      </Col>
    </Row>
  );
}

export default Techstack;
