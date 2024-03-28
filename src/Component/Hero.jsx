import React from "react";
import "./hero.css";
import HeroImg from "../assets/Bg.jpg.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiUsers } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { SiAmazongames } from "react-icons/si";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { GrSecure } from "react-icons/gr";

const Hero = () => {
  return (
    <main>
      <img src={HeroImg} alt="hero_image" />
      <div className="hero_text">
        <h1>Play Games Every Day To Win ₹ 99,999</h1>
      </div>
      <div className="advantage_box">
        <h2>Six Advantages</h2>
        <Container>
          <Row className="adv_row_box">
            <Col className="adv_box">
              <FiUsers className="icon" />
              <h3 className="title">Millions Of Users</h3>
              <p>Play anytime anywhere</p>
            </Col>
            <Col className="adv_box">
              <MdOutlineVerified className="icon" />
              <h3 className="title">Official Guarentee</h3>
              <p>Legal and Secured</p>
            </Col>
            <Col className="adv_box">
              <SiAmazongames className="icon" />
              <h3 className="title">Various Games</h3>
              <p>TeenPatti,Rummy..</p>
            </Col>
          </Row>
          <Row className="adv_row_box">
            <Col className="adv_box">
              <BiMoneyWithdraw className="icon" />
              <h3 className="title">Fast Withdrawal</h3>
              <p>Creadited In 1min</p>
            </Col>
            <Col className="adv_box">
              <GrServices className="icon" />
              <h3 className="title">Customer Service</h3>
              <p>24h Online Service</p>
            </Col>
            <Col className="adv_box">
              <GrSecure className="icon" />
              <h3 className="title">Cash Secured</h3>
              <p>Play anytime anywhere</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="notice">
        <span>
          To play cash game,Please ensure that you are at least 18 years
          old.Violating our terms of service may result in your account being
          restricted
        </span>
      </div>
    </main>
  );
};

export default Hero;
