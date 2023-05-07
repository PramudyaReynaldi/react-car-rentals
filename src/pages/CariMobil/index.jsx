import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Footer, Header } from "../../components";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import {
    fetchCars,
    selectCars,
    selectCarsLoading,
    filterCars
} from './CarsSlice'
import LogoUsers from '../../assets/fi_users.png'
import LogoSettings from '../../assets/fi_settings.png'
import LogoCalendar from '../../assets/fi_calendar.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './carimobil.css'


export default function CariMobil() {
    const firstLoad = useRef(true);
    const cars = useSelector(selectCars)
    const carsLoading = useSelector(selectCarsLoading)
    const [filter, setFilter] = useState({
        availableAt: '',
        capacity: 0,
        typeDriver: ''
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (firstLoad.current) dispatch(fetchCars())

        return () => {
            firstLoad.current = false
        }
    }, [])

    const handleChange = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        })
    }

    const handleFilter = (e) => {
        e.preventDefault()

        dispatch(filterCars(filter))
    }

    useEffect(() => {
        console.log(cars)
    }, [cars])

    return (
        <>
            {carsLoading === 'loading' && <div>Loading...</div>}
            <Header />
            <div className="banner">
                <div class="container">
                    <div class="row justify-content-center">
                        <form onSubmit={(e) => handleFilter(e)} className="shadow p-3 rounded">
                            <div class="row row-cols-lg-auto g-0 justify-content-around">
                                <div class="col-12 col-lg-2">
                                    <label for="exampleDataList" class="form-label"
                                    >Tipe Driver</label
                                    >
                                    <select
                                        id="tipedriver"
                                        class="form-select"
                                        aria-label="Default select example"
                                        name="typedriver"
                                        onChange={(e) => handleChange(e)}
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
                                        name="availableAt"
                                        onChange={(e) => handleChange(e)}
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
                                        name="capacity"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>

                                <button
                                    id="filter"
                                    class="btn btn-success btn-cari-mobil"
                                    type="submit"
                                >
                                    Cari Mobil
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
            <Container className="mt-5">
                <Row lg={3} xs={12} className='m-3' style={{ gap: '20px' }}>
                    {cars ? cars.map((e, i) => (
                        <Card style={{ width: '333px' }}>
                            <Card.Img
                                variant="top"
                                src={
                                    "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" +
                                    e.image.substring(1)
                                }
                                height={'270px'}
                                width={'100%'}
                            />
                            <Card.Body>
                                <Card.Title className="fw-bold">{e.manufacture}</Card.Title>
                                <Card.Text>
                                    <div className="fw-bold">Rp {e.rentPerDay} / hari</div>
                                    <div style={{ fontSize: '14px' }}>{e.description}</div> <br />
                                    <div style={{ fontSize: '14px' }}><img src={LogoUsers} /> &nbsp;{e.capacity} orang</div> <br />
                                    <div style={{ fontSize: '14px' }}><img src={LogoSettings} /> &nbsp;{e.transmission}</div> <br />
                                    <div style={{ fontSize: '14px' }}><img src={LogoCalendar} /> &nbsp;Tahun {e.year}</div> <br />
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                        : <Col xs={12} lg={4}>No data</Col>}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
