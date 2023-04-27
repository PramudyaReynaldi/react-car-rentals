import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import imgCar from '../../assets/img_car.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css'

export default function Home() {
    return (
        <>
            <section className="banner">
                <Container>
                    <Row>
                        <Col xs={12} lg={6} >
                            <p className="banner-text">
                                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                            </p>
                            <p className="intro-text">
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                            <Button className="btn-car">Mulai Sewa Mobil</Button>{' '}
                        </Col>
                        <Col xs={12} lg={6}>
                            <Image src={imgCar} fluid className="img-car" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
