import React, {useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Icons from '../../Images/Icons';
import './main.scss';

export default function Academy() {
    const [academy, setAcademy] = useState([]);

    useEffect(() => {
        setAcademy([
            {
                id: 1,
                title: 'Engenharia Elétrica',
                type: 'Graduação',
                location: 'UNEC - Caratinga MG',
                hours: '1/10 períodos - Cursando',
            },
            {
                id: 2,
                title: 'Eletrotécnica',
                type: 'Curso Técnico',
                location: 'Instituto P & C',
                hours: '1280 horas',
            },
            {
                id: 3,
                title: 'Eletricista Predial',
                type: 'Curso',
                location: 'Instituto Ser',
                hours: '96 horas',
            }
        ]);
    }, []);


    return (
        <div className="section" id="academy">
            <Container>
                <div data-aos="fade-up" className="header-section">
                    <h1>Acadêmico</h1>
                </div>
                <div className="content-section">
                    <div className="academy-items">
                        {academy.map(item => (
                            <div data-aos-delay={100 + (item.id * 100)} data-aos="fade-up" className="academy-item" key={item.id}>
                                <div className="academy-item-image">
                                    <span className="icon">{Icons.academic}</span>
                                </div>
                                <div className="academy-item-content">
                                    <h2>{item.title}</h2>
                                    <p>
                                        <span className="fw-bold">{item.type} - {item.location}</span><br/>
                                        <span>{item.hours}</span><br/>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}