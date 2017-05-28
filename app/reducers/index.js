import R from 'ramda';
import * as ActionTypes from '../constant';

const initialState = {
    title: 'TITLE OF WIDGET',
    temperature: 26,
    city: 'Sydney',
    direction: 'N',
    speed: 10,
    isFetching: false,
    wind: 'On'
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_TITLE:
            //If user does not input anyting, show default one
            if (R.isEmpty(action.title)) {
                return {
                    ...state,
                    title: initialState.title
                };
            }

            return {
                ...state, 
                title: action.title
            };

        case ActionTypes.TOGGLE_WEATHER_UNIT:
            return {
                ...state,
                temperature: action.temperature
            };

        case ActionTypes.TOGGLE_SHOW_WIND:
            return {
                ...state,
                wind: action.wind
            };

        case ActionTypes.SEND_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case ActionTypes.REQUEST_SUCCESS:
            return {
                ...state,
                city: action.city,
                temperature: action.temperature,
                direction: action.direction,
                speed: action.speed,
                isFetching: false
            };

        case ActionTypes.REQUEST_FAIL:
            return initialState;

        default:
            return state
    }
}

export default rootReducer
