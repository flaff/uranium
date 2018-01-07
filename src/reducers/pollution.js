import moment from 'moment';

export const REQUEST_STATION_UPDATE = 'pollution/REQUEST_STATION_UPDATE';
export const UPDATE_STATION = 'pollution/UPDATE_STATION';
export const CHANGE_STATION = 'pollution/CHANGE_STATION';

const initialState = {
    fetching: false,
    station: {
        id: 13,
        name: 'Kraków',
        score: 1.5,
        elements: [
            {name: 'CO2', current: 100, max: 200},
            {name: 'O3', current: 80, max: 110},
        ],
        date: moment()
    },
    avaliableStations: [
        {id: 13, name: 'Kraków'},
        {id: 14, name: 'Nowa Huta'}
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATION:
            const {id, name, score, elements, date} = action;
            return {
                ...state,
                station: {id, name, score, elements, date}
            };

        case REQUEST_STATION_UPDATE:
            return setTimeout(() => {

            }, 3000);

        default:
            return state;
    }
}