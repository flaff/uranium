import React from 'react';
import styles from './Settings.css';
import {Container, Row, Col} from '../components/common/Grid/index';

export default function () {
    return (
        <Container>
            <div className={styles.settings}>
                <Row className="ta-c">
                    <Col sm={12}>
                        <i className={`material-icons ${styles.icon}`}>settings</i>
                        <div>Settings component</div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}