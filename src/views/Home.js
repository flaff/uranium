import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import LightList from '../components/Light/LightList';
import Pollution from '../components/Pollution/Station';
import Purifier from '../components/Purifier/Purifier';

import {push} from 'react-router-redux';
import {requestLightUpdate, requestLightsUpdate} from '../reducers/lights';
import {Container, Col, Row} from '../components/common/Grid/index';
import {requestStationUpdate} from '../reducers/pollution';
import {requestPurifierUpdate, requestPurifierPowerChange} from '../reducers/purifier';


import styles from './Home.css';

let pooling;

class Home extends Component {
    componentDidMount() {
        this.props.requestLightsUpdate();
        this.props.requestStationUpdate();
        this.props.requestPurifierUpdate();
        pooling = setInterval(() => this.props.requestPurifierUpdate(), 5000);
        pooling = setInterval(() => this.props.requestLightsUpdate(), 1000);
        pooling = setInterval(() => this.props.requestStationUpdate(), 1000000);
    }

    componentWillUnmount() {
        clearInterval(pooling);
    }

    render() {
        const props = this.props;
        return (
            <div className={styles.home}>
                <Container>
                    <Row>
                        <Col sm={6}>
                            {/*<Weather/>*/}
                        </Col>
                        <Col sm={6}>
                            <Pollution station={props.station} />
                        </Col>
                        <Col sm={12}>
                            <Purifier purifier={props.purifier} powerChange={props.requestPurifierPowerChange} />
                        </Col>
                    </Row>
                </Container>

                <LightList sources={props.lights} onLightClick={props.requestLightUpdate}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    station: state.pollution.station,
    lights: state.lights.sources,
    purifier: state.purifier.purifier
});

const mapDispatchToProps = dispatch => bindActionCreators({
    requestLightUpdate,
    requestLightsUpdate,
    requestStationUpdate,
    requestPurifierUpdate,
    requestPurifierPowerChange,
    goToLightSettings: (id) => push(`/settings/light/${id}`)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);