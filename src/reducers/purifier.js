import {getPurifier, setPurifierPower} from '../api/purifier';

export const UPDATE_PURIFIER = 'purifier/UPDATE_PURIFIER';
export const UPDATE_PURIFIER_FAIL = 'purifier/UPDATE_PURIFIER_FAIL';
export const CHANGE_PURIFIER_POWER_FAIL = 'purifier/CHANGE_PURIFIER_POWER_FAIL';

const initialState = {
    purifier: null
};

export default (state = initialState, {type, purifier}) => {
    switch (type) {
        case UPDATE_PURIFIER:
            return {...state, purifier: purifier};

        default:
            return state;
    }
}

export const requestPurifierUpdate = () => {
    return dispatch => {
        getPurifier()
            .then(({data: purifier}) => {
                dispatch({type: UPDATE_PURIFIER, purifier});
            })
            .catch(error => {
                dispatch({type: UPDATE_PURIFIER_FAIL, error});
            });
    }
};

export const requestPurifierPowerChange = power => {
    return dispatch => {
        setPurifierPower(power)
            .then(({data: purifier}) => {
                dispatch({type: UPDATE_PURIFIER, purifier});
            })
            .catch(error => {
                dispatch({type: CHANGE_PURIFIER_POWER_FAIL, error});
            });
    }
};