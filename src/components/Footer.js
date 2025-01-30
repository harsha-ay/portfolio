import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.jpg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <button aria-label="Social Icon 1" className="social-icon-btn" >
              <a href="https://www.linkedin.com/in/harsha-vardhan-a7a282263/"><img  src={navIcon1} alt="Icon" /></a>
              </button>

              <button aria-label="Social Icon 2" className="social-icon-btn" >
              <a href="https://github.com/harsha-ay"><img  src={navIcon2} alt="Icon" /></a>
              </button>
              
              <button aria-label="Social Icon 3" className="social-icon-btn">
              <a href="https://www.instagram.com/harsha_v616/"><img  src={navIcon3} alt="Icon" /></a>
              </button>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
