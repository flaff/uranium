import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LightList from '../components/Light/LightList';
import {push} from 'react-router-redux';
import {requestLightUpdate, requestLightsUpdate} from '../reducers/lights';

import styles from './Home.css';

let pooling;

class Home extends Component {
    componentDidMount() {
        this.props.requestLightsUpdate();
        pooling = setInterval(() => this.props.requestLightsUpdate(), 1000);
    }

    componentWillUnmount() {
        clearInterval(pooling);
    }

    render() {
        const props = this.props;
        return (
            <div className={styles.home}>
                <LightList sources={props.lights} onLightClick={props.requestLightUpdate}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    station: state.pollution.station,
    lights: state.lights.sources
});

const mapDispatchToProps = dispatch => bindActionCreators({
    requestLightUpdate,
    requestLightsUpdate,
    goToLightSettings: (id) => push(`/settings/light/${id}`)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);