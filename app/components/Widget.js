import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../style/index.less';

const Widget = ({ title, city, temperature, wind, direction, speed }) => (
    <Fragment>
        <h4>{ title }</h4>
        <div className="clearfix">
            <div className="svg"></div>
            <div className="details">
                <h4>{city}</h4>
                <div className="temperature">{temperature}°</div>
                { wind === 'On' && 
                    <Fragment>
                        <span className="wind">Wind</span>
                        <span><strong>{direction} {speed} km/h</strong></span>
                    </Fragment>
                 }
            </div>
        </div>
    </Fragment>
);

Widget.propTypes = {
    title: PropTypes.string,
    temperature: PropTypes.number,
    wind: PropTypes.string,
    direction: PropTypes.string,
    speed: PropTypes.number
}

export default Widget
