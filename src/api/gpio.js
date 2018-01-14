import axios from 'axios';

const
    GPIO_GET_VALUES_URL = 'api/gpio',
    GPIO_SET_VALUE_URL = 'api/gpio';

export function getGPIOs() {
    return axios.get(GPIO_GET_VALUES_URL);
}

export function setGPIO(gpio, value) {
    return axios.post(GPIO_SET_VALUE_URL, {id: gpio, value: value});
}
