import * as ActionTypes from '../constant';

export const changeTitle = (title) => ({
    type: ActionTypes.CHANGE_TITLE,
    title
});

export const toggleWeatherUnit = (temperature) => ({
    type: ActionTypes.TOGGLE_WEATHER_UNIT,
    temperature
});

export const toggleShowWind = (wind) => ({
    type: ActionTypes.TOGGLE_SHOW_WIND,
    wind
});

export const requestData = () => ({
    type: ActionTypes.SEND_REQUEST
});

export const receiveData = (city, temperature, direction, speed) => ({
    type: ActionTypes.REQUEST_SUCCESS,
    city,
    temperature,
    direction,
    speed
});

export const requestFail = () => ({
    type: ActionTypes.REQUEST_FAIL
})

const getWindDirection = (degree) => {
    if (degree > 337.5) return 'N';
    if (degree > 292.5) return 'NW';
    if (degree > 247.5) return 'W';
    if (degree > 202.5) return 'SW';
    if (degree > 157.5) return 'S';
    if (degree > 122.5) return 'SE';
    if (degree > 67.5) return 'E';
    if (degree > 22.5) return 'NE';
    return 'N';
}

export const fetchData = () => (dispatch) => {
    try {
        dispatch(requestData())
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const appid = 'dbf86c23a191add4cfbf7d8b44397f19';
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${appid}`);
            if (!response.ok) throw new Error('Response failed');
            const json = await response.json();
            const direction = getWindDirection(json.wind.deg);
            //wind speed unit changes from m/s to km/h, it needs multiply 3.6
            dispatch(receiveData(json.name, json.main.temp, direction, json.wind.speed*3.6));
        });
    } catch (e) {
        dispatch(requestFail());
    }
}
