import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icons from "../../Images/Icons";
import './main.scss';

export default function Contact() {
    const [submiting, setSubmiting] = useState(false);

    return (
        <div id="contact" className="section">
            <Container>
                <div data-aos="fade-up" className="header-section">
                    <h1>Vamos trabalhar juntos?</h1>
                </div>
                <div className="content-section">
                    <Row>
                        <Col md={6}>
                            <div className="contact-info">
                                <ul className="social-links d-flex d-md-block">
                                    <li data-aos-delay="100" data-aos="fade-up">
                                        <a className="button" href="https://wa.me/5522997128929">{Icons.whatsapp} <span className="d-none d-md-inline">WhatsApp</span></a>
                                    </li>
                                    <li data-aos-delay="150" data-aos="fade-up">
                                        <a className="button" href="tel:+5522997128929" target="_blank" rel="noopener noreferrer">{Icons.phone} <span className="d-none d-md-inline">Telefone</span></a>
                                    </li>
                                    <li data-aos-delay="200" data-aos="fade-up">
                                        <a className="button" href="mailto:lfconnect@hotmail.com.br" target="_blank" rel="noopener noreferrer">{Icons.email} <span className="d-none d-md-inline">E-mail</span></a>
                                    </li>
                                    <li data-aos-delay="250" data-aos="fade-up">
                                        <a className="button" href="https://www.facebook.com/lenilson.edneia" target="_blank" rel="noopener noreferrer">{Icons.facebook} <span className="d-none d-md-inline">Facebook</span></a>
                                    </li>
                                    <li data-aos-delay="300" data-aos="fade-up">
                                        <a className="button" href="https://www.instagram.com/lenilsonsfernando/" target="_blank" rel="noopener noreferrer">{Icons.instagram} <span className="d-none d-md-inline">Instagram</span></a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <form onSubmit={() => setSubmiting(true)} action="https://formsubmit.co/lfconnect@hotmail.com.br" method="POST" className="contact-form">
                                <div data-aos-delay="100" data-aos="fade-up" className="form-group">
                                    <label htmlFor="name">Nome</label>
                                    <input required name="Nome" type="text" className="form-control" id="name" placeholder="Digite seu nome" />
                                </div>
                                <div data-aos-delay="150" data-aos="fade-up" className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input required name="E-mail" type="email" className="form-control" id="email" placeholder="Digite seu e-mail" />
                                </div>
                                <div data-aos-delay="200" data-aos="fade-up" className="form-group">
                                    <label htmlFor="phone">Telefone</label>
                                    <input required name="Telefone" type="tel" maxLength="11" className="form-control" id="phone" placeholder="Digite seu telefone" />
                                </div>
                                <div data-aos-delay="250" data-aos="fade-up" className="form-group">
                                    <label htmlFor="message">Mensagem</label>
                                    <textarea required name="Mensagem" className="form-control" id="message" rows="3" placeholder="Digite sua mensagem" />
                                </div>
                                <div data-aos-delay="300" data-aos="fade-up" className="form-group">
                                    <button type="submit" className="button d-block mx-auto"><span className="icon">
                                        {submiting ? Icons.loading : Icons.arrowCircleRight}
                                    </span> Enviar</button>
                                </div>
                                <input type="hidden" name="_next" value="https://eletricistaemriodasostras.com.br/?emailsubmited"/>
                                <input type="hidden" name="_captcha" value="false"/>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}