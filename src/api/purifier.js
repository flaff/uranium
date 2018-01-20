import axios from 'axios';

const PURIFIER_URL = '/api/purifier';
const PURIFIER_POWER_URL = '/api/purifier/power';
const PURIFIER_MODE_URL = '/api/purifier/mode';

export const getPurifier = () => axios.get(PURIFIER_URL);
export const setPurifierPower = power => axios.post(PURIFIER_POWER_URL, {power});
export const setPurifierMode = mode => axios.post(PURIFIER_MODE_URL, {mode});
