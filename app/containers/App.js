import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '../constant';

import * as actionCreators from '../actions/index';

import Editor from '../components/Editor';
import Widget from '../components/widget';

class App extends Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        city: PropTypes.string,
        temperature: PropTypes.number,
        title: PropTypes.string,
        toggleShowWind: PropTypes.func,
        toggleWeatherUnit: PropTypes.func,
        changeTitle: PropTypes.func
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { 
            isFetching, city, temperature, title, wind, direction, speed, 
            toggleShowWind, toggleWeatherUnit, changeTitle
        } = this.props;

        return (
            <div className="app-container">
                {isFetching && <h1>Loading...</h1>}
                {!isFetching && 
                    <div className="clearfix wrapper">
                        <div className="editor">
                            <Editor wind={ wind }
                                    temperature={ temperature }
                                    changeTitle={ changeTitle } 
                                    toggleWeatherUnit={ toggleWeatherUnit } 
                                    toggleShowWind={ toggleShowWind }/>
                        </div>
                        <div className="widget">
                            <Widget title={ title }
                                    city={ city }
                                    temperature={ temperature } 
                                    wind={ wind }
                                    direction={ direction }
                                    speed={ speed } />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = ({
    title, temperature, direction,
    speed, city, isFetching, wind
}) => ({
    title, temperature, direction,
    speed, city, isFetching, wind
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(App)
