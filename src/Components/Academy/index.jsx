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
                location: 'Unopar',
                time: "Janeiro 2022 - Cursando",
                hours: '103 horas',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eveniet adipisci perferendis sunt amet soluta, tenetur consectetur, officia eligendi porro voluptate ratione! Iusto, a dolorum? Sint voluptate doloribus in exercitationem.'
            },
            {
                id: 2,
                title: 'Eletricista Predial',
                type: 'Curso Técnico',
                location: 'Instituto Ser',
                time: "Fevereiro 2021 - Setembro 2021",
                hours: '54 horas',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eveniet adipisci perferendis sunt amet soluta, tenetur consectetur, officia eligendi porro voluptate ratione! Iusto, a dolorum? Sint voluptate doloribus in exercitationem.'
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
                                        <span>{item.time}</span><br/>
                                        <span>{item.hours}</span><br/>
                                        <span>{item.description}</span>
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