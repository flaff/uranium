import {getStation} from '../api/pollution';

export const UPDATE_STATION = 'pollution/UPDATE_STATION';
export const UPDATE_STATION_FAIL = 'pollution/UPDATE_STATION_FAIL';

const initialState = {
    fetching: false,
    station: {
        id: 401,
        name: 'Kraków',
        indexLevel: null,
        aqi: null,
        compounds: null,
        date: null
    },
    avaliableStations: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATION:
            const {id, name, compounds, aqi, date} = action.station;
            return {
                ...state,
                station: {id, name, compounds, date, aqi}
            };

        default:
            return state;
    }
}

export const requestStationUpdate = (stationId = 401) => {
    return dispatch => {
        getStation()
            .then(({data}) => {
                dispatch({type: UPDATE_STATION, station: data});
            })
            .catch(() => {
                dispatch({type: UPDATE_STATION_FAIL});
            });
    }
};