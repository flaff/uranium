import {getGPIOs, setGPIO} from "../api/gpio";

export const UPDATE_LIGHT = 'lights/UPDATE_LIGHT';
export const REQUEST_LIGHT_CHANGE = 'lights/REQUEST_LIGHT_CHANGE';
// export const REQUEST_LIGHT_UPDATE = 'lights/REQUEST_LIGHT_UPDATE';
export const UPDATE_LIGHT_FAIL = 'lights/UPDATE_LIGHT_FAIL';

export const REQUEST_LIGHTS_UPDATE = 'lights/REQUEST_LIGHTS_UPDATE';
export const UPDATE_LIGHTS = 'lights/UPDATE_LIGHTS';
export const UPDATE_LIGHTS_LEGACY = 'lights/UPDATE_LIGHTS_LEGACY';
export const UPDATE_LIGHTS_FAIL = 'lights/UPDATE_LIGHTS_FAIL';

const initialState = {
    fetching: false,
    sources: [
        {id: 17, value: false, fetching: false},
        {id: 27, value: false, fetching: false},
        {id: 22, value: false, fetching: false, temperature: 23.6}
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LIGHT:
            return {
                ...state,
                sources: state.sources.map(light => (light.id === action.id) ? {...light, value: action.value, fetching: false} : light)
            };

        case UPDATE_LIGHT_FAIL:
            return {
                ...state,
                sources: state.sources.map(light => (light.id === action.id) ? {...light, fetching: false} : light)
            };

        case REQUEST_LIGHT_CHANGE:
            return {
                ...state,
                sources: state.sources.map(light => (light.id === action.id) ? {...light, fetching: true} : light)
            };

        case REQUEST_LIGHTS_UPDATE:
            return {
                ...state,
                fetching: true
            };

        case UPDATE_LIGHTS_FAIL:
            return {
                ...state,
                fetching: false
            };

        case UPDATE_LIGHTS:
            return {
                ...state,
                sources: action.sources,
                fetching: false
            };

        case UPDATE_LIGHTS_LEGACY:
            const sources = state.sources.map(light => ({...light, value: !!action.sources[light.id].value}));
            return {
                ...state,
                sources,
                fetching: false
            };


        default:
            return state;
    }
}

export const requestLightUpdate = (payload) => {
    return dispatch => {
        dispatch({type: REQUEST_LIGHT_CHANGE, ...payload});

        setGPIO(payload.id, payload.value)
            .then(() => {
                dispatch({type: UPDATE_LIGHT, ...payload});
            })
            .catch(() => {
                dispatch({type: UPDATE_LIGHT_FAIL, ...payload});
            });
    }
};

export const requestLightsUpdate = () => {
    return dispatch => {
        dispatch({type: REQUEST_LIGHTS_UPDATE});

        getGPIOs()
            .then(({data}) => {
                dispatch({type: UPDATE_LIGHTS, sources: data});
            })
            .catch(() => {
                dispatch({type: UPDATE_LIGHTS_FAIL});
            });
    }
};
