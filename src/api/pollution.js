import axios from 'axios';

const STATION_URL = '/api/pollution';

export const getStation = () => {
    return axios(STATION_URL);
};
