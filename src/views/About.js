import React, {Component} from 'react';
import styles from './About.css';
import {Container, Row, Col} from '../components/common/Grid/index';

export default class About extends Component {
    render() {
        return (
            <Container>
                <div className={styles.about}>
                    <Row className="ta-c">
                        <Col sm={12}>
                            <div>About</div>

                            <div>
                                Stroke Icons 7 Font Set by Pixeden.
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}