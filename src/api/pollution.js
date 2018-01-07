import axios from 'axios';

const
    STATIONS_URL = '/pollution/stations',
    STATION_URL = '/pollution/stations/{{station}}';

export function getStation(station) {
    return axios(STATION_URL.replace('{{station}}', station));
}

export function getStations() {
    return axios(STATIONS_URL);
}