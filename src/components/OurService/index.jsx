import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ImgService from '../../assets/img_service.png'
import ImgChecked from '../../assets/Group_53.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './service.css';

export default function OurService() {
    return (
        <>
            <section id="OurService">
                <Container>
                    <Row>
                        <Col lg={6} xs={11}>
                            <Image src={ImgService} fluid className="img-service" />
                        </Col>
                        <Col lg={6} xs={12}>
                            <h3 className="fw-bold judul-service pt-4">Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                            <p className="pt-3 service-text">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                            <ul className="list-service">
                                <li>
                                    <p><Image src={ImgChecked} fluid /> &nbsp; Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                                </li>
                                <li>
                                    <p><Image src={ImgChecked} fluid /> &nbsp; Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                                </li>
                                <li>
                                    <p><Image src={ImgChecked} fluid /> &nbsp; Sewa Mobil Jangka Panjang Bulanan</p>
                                </li>
                                <li>
                                    <p><Image src={ImgChecked} fluid /> &nbsp; Gratis Antar - Jemput Mobil di Bandara</p>
                                </li>
                                <li>
                                    <p><Image src={ImgChecked} fluid /> &nbsp; Layanan Airport Transfer / Drop In Out</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}