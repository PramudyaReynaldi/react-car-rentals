import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ImgComplete from '../../assets/icon_complete.png'
import ImgPrice from '../../assets/icon_price.png'
import ImgTime from '../../assets/icon_24hrs.png'
import ImgPro from '../../assets/icon_professional.png'
import './whyus.css';

export default function WhyUs() {
    return (
        <>
            <section id="WhyUs">
                <Container>
                    <h4 className="fw-bold">Why Us?</h4>
                    <p className="whyus-text pt-2">Mengapa harus pilih Binar Car Rental?</p>
                    <Row className="pt-4">
                        <Col xs={12} lg={3}>
                            <Card className="why-us-card">
                                <Image src={ImgComplete} fluid style={{
                                    width: '32px',
                                    height: '32px',
                                    margin: '15px 10px 0 20px'
                                }} />
                                <Card.Body className="ms-2">
                                    <Card.Title style={{
                                        fontSize: '16px',
                                        fontWeight: '700'
                                    }}
                                    >
                                        Mobil Lengkap</Card.Title>
                                    <Card.Text style={{
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        fontWeight: '300'
                                    }}
                                    >
                                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={3}>
                            <Card className="why-us-card">
                                <Image src={ImgPrice} fluid style={{
                                    width: '32px',
                                    height: '32px',
                                    margin: '15px 10px 0 20px'
                                }} />
                                <Card.Body className="ms-2">
                                    <Card.Title style={{
                                        fontSize: '16px',
                                        fontWeight: '700'
                                    }}
                                    >
                                        Harga Murah</Card.Title>
                                    <Card.Text style={{
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        fontWeight: '300'
                                    }}
                                    >
                                        Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={3}>
                            <Card className="why-us-card">
                                <Image src={ImgTime} fluid style={{
                                    width: '32px',
                                    height: '32px',
                                    margin: '15px 10px 0 20px'
                                }} />
                                <Card.Body className="ms-2">
                                    <Card.Title style={{
                                        fontSize: '16px',
                                        fontWeight: '700'
                                    }}
                                    >
                                        Layanan 24 Jam</Card.Title>
                                    <Card.Text style={{
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        fontWeight: '300'
                                    }}
                                    >
                                        Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={3}>
                            <Card className="why-us-card" >
                                <Image src={ImgPro} fluida style={{
                                    width: '32px',
                                    height: '32px',
                                    margin: '15px 10px 0 20px'
                                }} />
                                <Card.Body className="ms-2">
                                    <Card.Title style={{
                                        fontSize: '16px',
                                        fontWeight: '700'
                                    }}
                                    >
                                        Sopir Profesional</Card.Title>
                                    <Card.Text style={{
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        fontWeight: '300'
                                    }}
                                    >
                                        Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}