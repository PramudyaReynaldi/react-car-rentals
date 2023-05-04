import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Footer, Header, Home } from "../../components";
import { Card, Row, Col, Container } from "react-bootstrap";
import {
    fetchCars,
    selectCars,
    selectCarsLoading
} from './CarsSlice'
import 'bootstrap/dist/css/bootstrap.min.css'
import './carimobil.css'


export default function CariMobil() {
    const firstLoad = useRef(true);
    const cars = useSelector(selectCars)
    const carsLoading = useSelector(selectCarsLoading)

    const dispatch = useDispatch()

    useEffect(() => {
        if (firstLoad.current) dispatch(fetchCars())

        return () => {
            firstLoad.current = false
        }
    }, [])

    return (
        <>
            {carsLoading === 'loading' && <div>Loading...</div>}
            <Header />
            <div className="banner">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-11 col-md-12 filter-search">
                            <div class="shadow p-3 rounded ">
                                <div
                                    class="row row-cols-lg-auto g-0 justify-content-around"
                                >
                                    <div class="col-12 col-lg-2">
                                        <label for="exampleDataList" class="form-label"
                                        >Tipe Driver</label
                                        >
                                        <select
                                            id="tipedriver"
                                            class="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option value="0" selected>
                                                Pilih Tipe Driver
                                            </option>
                                            <option value="Dengan Supir">Dengan Sopir</option>
                                            <option value="Lepas Kunci">
                                                Tanpa Sopir (Lepas Kunci)
                                            </option>
                                        </select>
                                    </div>

                                    <div class="col-12 col-lg">
                                        <label for="exampleDataList" class="form-label"
                                        >Tanggal</label
                                        >
                                        <input
                                            id="tersedia"
                                            placeholder="Select date"
                                            type="date"
                                            class="form-control"
                                        />
                                    </div>

                                    <div class="col-12 col-lg">
                                        <label for="exampleDataList" class="form-label"
                                        >Waktu</label
                                        >
                                        <input
                                            id="waktu"
                                            placeholder="Select date"
                                            type="time"
                                            class="form-control"
                                        />
                                    </div>

                                    <div class="col-12 col-lg">
                                        <label for="exampleDataList" class="form-label">
                                            Jumlah Penumpang (Optional)
                                        </label>
                                        <input
                                            id="jumlah-penumpang"
                                            type="text"
                                            class="form-control"
                                            placeholder="Jumlah Penumpang"
                                        />
                                    </div>

                                    <button
                                        id="filter"
                                        class="btn btn-success btn-cari-mobil"
                                    >
                                        Cari Mobil
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Container className="mt-5">
                        <Row lg={3}>
                            {cars ? cars.map((e, i) => (
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={
                                            "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" +
                                            e.image.substring(1)
                                        }
                                        height={200}
                                    />
                                    <Card.Body>
                                        <Card.Title>{e.manufacture}</Card.Title>
                                        <Card.Text>
                                            <div>Sewa Per Hari : {e.rentPerDay}</div>
                                            <div>Nomor Plate : {e.plate}</div>
                                            <div>Kapasitas : {e.capacity}</div>
                                            <div>Deskripsi : {e.description}</div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                                : <Col xs={12}>No data</Col>}
                        </Row>
                    </Container>
                </div>
            </div >
            <Footer />
        </>
    )
}
