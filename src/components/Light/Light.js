import React  from 'react';
import styles from './Light.css';
import moment from 'moment';

import {Row, Col} from '../common/Grid/index';
import Icon from '../common/Icon/Icon';

const TIME_FORMAT = 'HH[h]mm[m]';


const Light = (props) => {
    return (
        <div className={`${styles.light} ${props.value ? styles.on : ''} ${props.fetching ? 'fetching' : ''}`}
             onClick={() => props.onLightClick({id: props.id, value: !props.value})}>
            <Row>
                <Col sm={3} className={styles.id}>{props.id}</Col>
                <Col sm={6}>
                    <Icon name={'light'} className={styles.bulb} />
                </Col>
                <Col sm={3} className="ta-r">
                    <div className={styles.options}>
                        <Icon name={'angle-right'} />
                    </div>
                </Col>
            </Row>

            <Row className={'ta-c'}>
                {props.temperature &&
                    (<Col sm={12}><Icon name={'sun'} className={styles.statusIcon} />&nbsp;{props.temperature}</Col>)}

                {(props.timeToNextCycle) &&
                (<Col sm={12}><Icon name={'stopwatch'} className={styles.statusIcon} />&nbsp;<span>{moment.utc(props.timeToNextCycle).format(TIME_FORMAT)}</span></Col>)}
            </Row>
        </div>
    )
};

export default Light;