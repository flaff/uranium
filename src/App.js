import React, {Component} from 'react';
import styles from './App.css';

import {Route, Link} from 'react-router-dom';
import Home from './views/Home';
import Settings from './views/Settings';
import About from './views/About';
import {Col, Container, Row} from './components/Grid';
import classNames from 'classnames';

const
    NIGHT_TIME_HOUR = 23,
    DAY_TIME_HOUR = 6,
    MINUTE_MS = 60000;

function isNight() {
    const hour = (new Date()).getHours();
    return (hour > NIGHT_TIME_HOUR) || (hour < DAY_TIME_HOUR);
}

class App extends Component {
    constructor() {
        super();
        this.state = {nightMode: isNight()};
    }

    checkTime() {
        const nightMode = isNight();
        (nightMode !== this.state.nightMode) && this.setState({...this.state, nightMode});
    }

    componentDidMount() {
        setInterval(this.checkTime.bind(this), MINUTE_MS);
    }

    render() {
        return (
            <div className={classNames(styles.App, {[styles.nightMode]: this.state.nightMode})}>

                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/settings" component={Settings}/>
                    <Route exact path="/about" component={About}/>
                </div>


                <Container>
                    <Row className="ta-c">
                        <Col sm={4}>
                            <Link className={styles.link} to="/">Home</Link>
                        </Col>
                        <Col sm={4}>
                            <Link className={styles.link} to="/settings">Settings</Link>
                        </Col>
                        <Col sm={4}>
                            <Link className={styles.link} to="/about">About</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
