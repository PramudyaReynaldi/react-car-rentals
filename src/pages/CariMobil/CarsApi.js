import axios from "axios";

export async function fetchCarsApi () {
    const cars = await axios ('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')

    return cars
}

export async function filterCarsApi (filter) {
    const cars = await fetch ('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json/?' + filter)
    const res = cars.json()

    return res
}