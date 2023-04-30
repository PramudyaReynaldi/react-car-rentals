import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ImgPhoto1 from '../../assets/img_photo.png'
import ImgPhoto2 from '../../assets/img_photo_2.png'
import ImgRate from '../../assets/Rate.png'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './testimonial.css'

export default function Testimonial() {
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1198: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    }

    return (
        <>
            <section id="Testimonial">
                <Container>
                    <h4 className='text-center fw-bold'>Testimonial</h4>
                    <p className='text-center' style={{
                        fontSize: '14px',
                        paddingTop: '10px'
                    }}
                    >
                        Berbagai review positif dari para pelanggan kami</p>

                    <div className="carousel pt-5">
                        <OwlCarousel className="owl-carousel owl-theme" {...options} >
                            <div className="item">
                                <img src={ImgPhoto1} style={{ display: 'flex', margin: '40px 10px 40px 30px' }} />
                                <p style={{ fontSize: '14px' }}>  <img src={ImgRate} style={{ width: '80px', height: '16px', marginTop: '20px' }} />“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                    <br /> <br />
                                    <span style={{ fontWeight: '700' }}>John Dee 32, Bromo</span>
                                </p>
                            </div>
                            <div className="item">
                                <img src={ImgPhoto2} style={{ display: 'flex', margin: '40px 10px 40px 30px' }} />
                                <p style={{ fontSize: '14px' }}>  <img src={ImgRate} style={{ width: '80px', height: '16px', marginTop: '20px' }} />“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                    <br /> <br />
                                    <span style={{ fontWeight: '700' }}>John Dee 32, Bromo</span>
                                </p>
                            </div>
                            <div className="item"><img src={ImgPhoto2} style={{ display: 'flex', margin: '40px 10px 40px 30px' }} />
                                <p style={{ fontSize: '14px' }}>  <img src={ImgRate} style={{ width: '80px', height: '16px', marginTop: '20px' }} />“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                    <br /> <br />
                                    <span style={{ fontWeight: '700' }}>John Dee 32, Bromo</span>
                                </p></div>
                        </OwlCarousel>
                    </div>
                </Container>
            </section>
        </>
    )
}



