jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';

import * as actions from '../index';
import * as types from '../../constant/index';

describe('actions', () => {
    it('should changeTitle', () => {
        const title = 'TITLE OF WIDGET';
        const expectedAction = {
            type: types.CHANGE_TITLE,
            title
        }

        expect(actions.changeTitle(title)).toEqual(expectedAction);
    });

    it('should toggle weather unit', () => {
        const temperature = 20;
        const expectedAction = {
            type: types.TOGGLE_WEATHER_UNIT,
            temperature
        }

        expect(actions.toggleWeatherUnit(temperature)).toEqual(expectedAction);
    });

    it('should toggle show wind', () => {
        const wind = 'On';
        const expectedAction = {
            type: types.TOGGLE_SHOW_WIND,
            wind
        }

        expect(actions.toggleShowWind(wind)).toEqual(expectedAction);
    });

    it('should send request', () => {
        const expectedAction = {
            type: types.SEND_REQUEST
        }

        expect(actions.requestData()).toEqual(expectedAction);
    });

    it('should receive data', () => {
        const city = 'Sydney';
        const temperature = 20;
        const direction = 'NE';
        const speed = 16;

        const expectedAction = {
            type: types.REQUEST_SUCCESS,
            city,
            temperature,
            direction,
            speed
        }

        expect(actions.receiveData(city, temperature, direction, speed)).toEqual(expectedAction);
    });

    it('should request failed', () => {
        const expectedAction = {
            type: types.REQUEST_FAIL
        }

        expect(actions.requestFail()).toEqual(expectedAction);
    });
});