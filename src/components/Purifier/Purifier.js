import React from 'react';
import classNames from 'classnames';

import styles from './Purifier.css';

import {Row, Col} from '../common/Grid/index';
import {Icon, DigitDisplay} from '../common';
import {aqiToClassName, aqiToName} from '../common/AQI/AQI';

const Purifier = (props) => {
    return props.purifier && (
        <Row>
            <Col sm={2} alignSelf='center'>
                <div className={styles.value} onClick={() => props.powerChange(!props.purifier.power)}>
                    <Icon name={props.purifier.mode === 'silent' ? 'moon' : 'power'}
                          className={classNames(styles.powerButton, {[styles.off]: !props.purifier.power})} />
                </div>
            </Col>
            <Col sm={5} className='ta-l' alignSelf='center'>
                <div>
                    <Icon name='eyedropper' className={styles.secondaryIcon} />
                    <span className={styles.value}>{props.purifier.temperature}&#x2103;</span>
                </div>
                <div>
                    <Icon name='drop' className={styles.secondaryIcon} />
                    <span className={styles.value}>{props.purifier.humidity}%</span>
                </div>
            </Col>
            <Col sm={5} className='ta-r'>
                <div className={styles.header}>Air quality inside</div>
                <div className={aqiToClassName(props.purifier.aqi)}>
                    <DigitDisplay className={styles.aqi} value={props.purifier.aqi}/>
                    {aqiToName(props.purifier.aqi)}
                </div>
            </Col>

        </Row>
    )
};

export default Purifier;