import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../Images/logo.svg";
import './main.scss';

export default function Home() {
    return (
        <div id="home">
            <Container>
                <div data-aos="fade-right" className="image">
                    <img src={logo} alt="logo LF connect" />
                </div>
                <div className="text text-center">
                    <h1 data-aos-delay="100" data-aos="fade-up">LF Connect</h1>
                    <p data-aos-delay="200" data-aos="fade-up">Nossos serviços conectados a sua nescessidade.</p>
                </div>
            </Container>
        </div>
    )
}