import React  from 'react';
import styles from './Light.css';
import moment from 'moment';

import {Row, Col} from '../Grid/index';
import Icon from '../Icon/Icon';

const onlyTime = moment => moment.year(1970).month(0).date(0).milliseconds(0);
const TIME_FORMAT = 'HH[h]mm[m]';

const getTime = (from, to) => {
    const
        now = moment(),

        timeFrom = onlyTime(from),
        timeTo = onlyTime(to),
        timeNow = onlyTime(now);

    if (timeNow => timeFrom && timeNow <= timeTo) {
        return moment(timeTo - timeNow).format(TIME_FORMAT);
    }
    if (timeNow < timeFrom) {
        return moment(timeFrom - timeNow).format(TIME_FORMAT);
    }
    if (timeNow > timeTo) {
        return moment(timeFrom + (timeNow.endOf('day') - timeNow)).format(TIME_FORMAT);
    }
};

const Light = (props) => {
    return (
        <div className={`${styles.light} ${props.value ? styles.on : ''} ${props.fetching ? 'fetching' : ''}`}
             onClick={() => props.onLightClick({id: props.id, value: !props.value})}>
            <Row>
                <Col sm={3} />
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
                <Col sm={6} className={styles.statusIcon}><Icon name={'ticket'} />&nbsp;{props.id}</Col>

                {props.temperature &&
                    (<Col sm={6} className={styles.statusIcon}><Icon name={'sun'} />&nbsp;{props.temperature}</Col>)}

                {(props.timeToNextCycle) &&
                (<Col sm={12} className={styles.statusIcon}><Icon name={'clock'} />&nbsp;<span>{moment.utc(props.timeToNextCycle).format('HH:mm')}</span></Col>)}
            </Row>
        </div>
    )
};

export default Light;