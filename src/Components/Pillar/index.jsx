import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icons from '../../Images/Icons';
// import './main.scss';

export default function Pillar() {
    return (
        <div className="section" id="pillar">
            <Container>
                <div className="content-section">
                    <div className="pillars">
                        <Row className="row">
                            <Col md={4}>
                                <div data-aos-delay="100" data-aos="fade-up" className="pillar-item text-center">
                                    <div className="pillar-item-image">
                                        <span className="icon fs-1">{Icons.sheild}</span>
                                    </div>
                                    <div className="pillar-item-content">
                                        <h3>Segurança</h3>
                                        <p>Seguimos todos os padrões de segurança, evitando ou amenizando possíveis acidentes.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div data-aos-delay="200" data-aos="fade-up" className="pillar-item text-center">
                                    <div className="pillar-item-image">
                                        <span className="icon fs-1">{Icons.checkBadge}</span>
                                    </div>
                                    <div className="pillar-item-content">
                                        <h3>Qualidade</h3>
                                        <p>Produtos de primeira linha e com certificações de qualidade, com duração garantida.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div data-aos-delay="300" data-aos="fade-up" className="pillar-item text-center">
                                    <div className="pillar-item-image">
                                        <span className="icon fs-1">{Icons.sparkles}</span>
                                    </div>
                                    <div className="pillar-item-content">
                                        <h3>Estética</h3>
                                        <p>Além de qualidade e segurança, deixamos o serviço mais apresentável e organizado o possível.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}