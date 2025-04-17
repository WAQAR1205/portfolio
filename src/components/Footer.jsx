import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/muhammad-waqar-ulhaque-1506b1250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon1" /></a>
              <a href="https://www.facebook.com/profile.php?id=100033659524380" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon2" /></a>
              <a href="https://github.com/WAQAR1205"  target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon3"/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved by Muhammad Waqar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}