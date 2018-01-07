import React, {Component} from 'react';
import styles from './App.css';

import {Route, Link} from 'react-router-dom';
import Home from './views/Home';
import Settings from './views/Settings';
import About from './views/About';
import {Col, Container, Row} from './components/Grid/index';
import Icon from './components/Icon/Icon';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <div className="ta-c">
                        <Icon name={'science'} className={styles.logo} />
                    </div>

                    <Row className="ta-c">
                        <Col sm={4}>
                            <Link to="/">Home</Link>
                        </Col>
                        <Col sm={4}>
                            <Link to="/settings">Settings</Link>
                        </Col>
                        <Col sm={4}>
                            <Link to="/about">About</Link>
                        </Col>
                    </Row>
                </Container>

                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/settings" component={Settings}/>
                    <Route exact path="/about" component={About}/>
                </div>

            </div>
        );
    }
}

export default App;
