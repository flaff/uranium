import {getStation} from '../api/pollution';

export const REQUEST_STATION_UPDATE = 'pollution/REQUEST_STATION_UPDATE';
export const UPDATE_STATION = 'pollution/UPDATE_STATION';
export const UPDATE_STATION_FAIL = 'pollution/UPDATE_STATION_FAIL';
export const CHANGE_STATION = 'pollution/CHANGE_STATION';

const initialState = {
    fetching: false,
    station: {
        id: 401,
        name: 'Kraków',
        indexLevel: null,
        compounds: null,
        date: null
    },
    avaliableStations: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATION:
            const {id, name, indexLevel, compounds} = action.station,
                date = compounds.length ? compounds[0].date : null,
                dateString = compounds.length ? compounds[0].dateString : null;
            return {
                ...state,
                station: {id, name, indexLevel, compounds, date, dateString}
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