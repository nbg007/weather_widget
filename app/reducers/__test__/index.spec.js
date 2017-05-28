jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';

import rootReducer from '../index';
import * as types from '../../constant/index';

describe('reducer', () => {
    const initialState = {
        title: 'TITLE OF WIDGET',
        temperature: 26,
        city: 'Sydney',
        direction: 'N',
        speed: 10,
        isFetching: false,
        wind: 'On'
    };

    let newState;

    it('should return the initial state', ()=> {
        expect(rootReducer(undefined, {})).toEqual(initialState);
    });

    it('should change title', () => {
        newState = {
            title: 'new title'
        }

        expect(rootReducer({}, {
            type: types.CHANGE_TITLE,
            title: 'new title'
        })).toEqual(newState);
    });

    it('should toggle weather unit', () => {
        newState = {
            temperature: 20
        }

        expect(rootReducer({}, {
            type: types.TOGGLE_WEATHER_UNIT,
            temperature: 20
        })).toEqual(newState);
    });

    it('should toggle show wind', () => {
        newState = {
            wind: 'On'
        }

        expect(rootReducer({}, {
            type: types.TOGGLE_SHOW_WIND,
            wind: 'On'
        })).toEqual(newState);
    });

    it('should send request', () => {
        newState = {
            isFetching: true
        }

        expect(rootReducer({}, {
            type: types.SEND_REQUEST
        })).toEqual(newState);
    });

    it('should receive data', () => {
        newState = {
            city: 'Sydney',
            temperature: 20,
            direction: 'NE',
            speed: 20,
            isFetching: false
        }

        expect(rootReducer({}, {
            type: types.REQUEST_SUCCESS,
            city: 'Sydney',
            temperature: 20,
            direction: 'NE',
            speed: 20
        })).toEqual(newState);
    });

    it('should request failed', () => {
        expect(rootReducer({}, {
            type: types.REQUEST_FAIL
        })).toEqual(initialState);
    });
});