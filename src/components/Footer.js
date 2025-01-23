import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icon.svg";
import navIcon3 from "../assets/img/phone_icon.png";

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
              <a href="https://www.linkedin.com/in/yufei-yao06" target="_blank" rel="">
                <img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/Yyf06"><img src={navIcon2} alt="" /></a>
              <a href="tel:+61412758365">
                <img src={navIcon3} alt="Phone Icon" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
