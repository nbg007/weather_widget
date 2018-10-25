import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../style/index.less';

class Editor extends Component {
    static propTypes = {
        unit: PropTypes.string,
        wind: PropTypes.string,
        changeTitle: PropTypes.func,
        toggleWeatherUnit: PropTypes.func,
        toggleShowWind: PropTypes.func
    }

    state = {
        unit: 'Celsius'
    }

    handleInput(e) {
        const { changeTitle } = this.props;
        changeTitle && changeTitle(e.target.value);
    }

    handleChangeUnit(e) {
        const { temperature, toggleWeatherUnit } = this.props;
        const { unit } = this.state;

        //if unit is not changed, return
        if (unit === e.target.value) return;

        let newTemperature = 0;
        switch (e.target.value) {
            case 'Celsius':
                newTemperature = (temperature - 32)/1.8;
                break;

            case 'Fahrenheit':
                newTemperature = temperature * 1.8 + 32;
                break;
        }

        this.setState({unit: e.target.value});
        toggleWeatherUnit && toggleWeatherUnit(newTemperature);
    }

    handleShowWind(e) {
        const { toggleShowWind } = this.props;
        toggleShowWind && toggleShowWind(e.target.value);
    }

    render() {
        const { wind } = this.props;
        const { unit } = this.state;

        return (
            <Fragment>
                <h4>Title</h4>
                <input type="text" className="form-control" onChange={ ::this.handleInput } />

                <h4 className="unit">Unit</h4>
                <input type="radio" id="C" name="unit" checked={ unit === 'Celsius' } 
                        value="Celsius" onChange={ ::this.handleChangeUnit }/>
                <label htmlFor="C">C°</label>
                <input type="radio" id="F" name="unit" checked={ unit === 'Fahrenheit' } 
                        value="Fahrenheit" onChange={ ::this.handleChangeUnit }/>
                <label htmlFor="F">F°</label>

                <h4 className="wind">Wind</h4>
                <input type="radio" id="on" name="wind" checked={ wind === 'On' } 
                        value="On" onChange={ ::this.handleShowWind }/>
                <label htmlFor="on">On</label>
                <input type="radio" id="off" name="wind" checked={ wind === 'Off' } 
                        value="Off" onChange={ ::this.handleShowWind }/>
                <label htmlFor="off">Off</label>
            </Fragment>
        )
    }
}

export default Editor
