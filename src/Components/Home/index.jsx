import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../Images/logo.svg";
import './main.scss';

export default function Home() {
    return (
        <div id="home">
            <Container>
                <div className="image">
                    <img src={logo} alt="logo LF connect" />
                </div>
                <div className="text text-center">
                    <h1>LF Connect</h1>
                    <p>Nossos serviços conectados a sua nescessidade.</p>
                </div>
            </Container>
        </div>
    )
}