import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/index.less';

class Widget extends Component {
    static propTypes = {
        title: PropTypes.string,
        temperature: PropTypes.number,
        wind: PropTypes.string,
        direction: PropTypes.string,
        speed: PropTypes.number
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { title, city, temperature, wind, direction, speed } = this.props;
        return (
            <div>
                <h4>{ title }</h4>
                <div className="clearfix">
                    <div className="svg"></div>
                    <div className="details">
                        <h4>{city}</h4>
                        <div className="temperature">{temperature}°</div>
                        { wind === 'On' && 
                            <div>
                                <span className="wind">Wind</span>
                                <span><strong>{direction} {speed} km/h</strong></span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Widget
