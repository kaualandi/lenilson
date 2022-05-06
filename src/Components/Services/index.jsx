import React, {useEffect, useState} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Container} from "react-bootstrap";
import axios from "axios";
import Icons from '../../Images/Icons';
import './main.scss'

export default function Services() {
    const [instagramCarrouselPictures, setInstagramCarrouselPictures] = useState([]);
    const token = 'IGQVJXQ2tnejVxTzBDVlFUWDY4bFAxb09pRnpYaXgzcFZASUGgxQWpnMlhHQzFJZAkxEMzhQVmVuOURpZAWtIeUtSMTNEcUJ6dFhKNFlwSm5UaVAtVVUxZADlsOTl6UUVYazNMZAGNCS0VHVjV6cURENmNUNQZDZD';
    const instagramUrl = `https://graph.instagram.com/me/media?access_token=${token}&fields=id,media_type,media_url,caption,permalink,thumbnail_url,timestamp,username`;
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        axios.get(instagramUrl)
            .then(res => {
                setInstagramCarrouselPictures(res.data.data);
                setIsLoading(false);
            })
            .catch(err => {
                setIsError(true);
                setIsLoading(false);
            })
    }, [instagramUrl]);

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
    
            }
        },
    };

    if(isLoading) return (
        <div className="section" id="services">
            <Container>
                <div className="header-section">
                    <h1>Serviços Prestados</h1>
                </div>
                <div className="content-section">
                    <p style={{fontSize: '1.2rem'}} className="text-center">
                        <span style={{fontSize: '2rem'}}>⌛</span> Pegando fotos do instagram e as arrumando.<br/>Aguarde...
                    </p>
                </div>
            </Container>
        </div>
    );
    if(isError) return (
        <div className="section" id="services">
            <Container>
                <div className="header-section">
                    <h1>Serviços Prestados</h1>
                </div>
                <div className="content-section">
                    <p style={{fontSize: '1.2rem'}} className="text-center">
                        <span style={{fontSize: '2rem'}}>😢</span> PUTS! Não consegui pegar as fotos.<br/>Você pode tentar recarregar a página.
                    </p>
                </div>
            </Container>
        </div>
    );

    return (
        <div className="section" id="services">
            <Container>
                <div className="header-section">
                    <h1>Serviços Prestados</h1>
                </div>
                <div className="content-section">
                    <OwlCarousel className="owl-theme" {...options}>
                        {instagramCarrouselPictures.map(picture => {
                            const mediaUrl = picture.media_url;
                            const caption = picture.caption;
                            const permalink = picture.permalink;
                            const mediaType = picture.media_type;

                            let element;

                            if (mediaType === 'IMAGE' || mediaType === 'CAROUSEL_ALBUM') {
                                element = (
                                    <div className="item" key={picture.id}>
                                        <img src={mediaUrl} alt={caption}/>
                                        <a className="button alt icon" href={permalink} target="_blank" rel="noreferrer">{Icons.instagram} Ver no Instagram</a>
                                    </div>
                                )
                            } else if (mediaType === 'VIDEO') {
                                element = (
                                    <div className="item" key={picture.id}>
                                        <video src={mediaUrl} controls/>
                                        <a className="button alt icon" href={permalink} target="_blank" rel="noreferrer">{Icons.instagram} Ver no Instagram</a>
                                    </div>
                                )
                            }

                            return element;
                        })}
                    </OwlCarousel>
                </div>
            </Container>
        </div>
    );
}