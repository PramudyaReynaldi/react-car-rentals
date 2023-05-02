import React from "react";
import { Header, Footer, Home } from "../../components";
import './cars.css'

export default function Cars() {
    return (
        <>
            <Header />
            <Home />
            <section id="cari">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-11 col-md-12 info-panel">
                            <div class="shadow p-3 rounded  ">
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
                </div>
            </section>
            <Footer />
        </>
    )
}