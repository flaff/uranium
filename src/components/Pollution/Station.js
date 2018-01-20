import React from 'react';
import styles from './Station.css';
import moment from 'moment';
import Icon from '../common/Icon/Icon';
import DigitDisplay from '../common/DigitDisplay/DigitDisplay';
import {aqiToClassName, aqiToName} from '../common/AQI/AQI';

function getTimeFromNow(date) {
    if (date === null) {
        return '0m';
    }
    const diff = moment.utc(moment() - date),
        hours = +diff.format('HH'),
        minutes = +diff.format('mm');

    return hours ? (hours + 'h') : (minutes + 'm');
}

const Station = props => {
    return (
        <div className={styles.station} onClick={props.onClick}>
            <div className={styles.header}>Air quality outside</div>
            <div className={aqiToClassName(props.station.aqi)}>
                {props.station.aqi && <DigitDisplay value={props.station.aqi} className={styles.aqi} />}
                <div>
                    {props.station.aqi === null && (<Icon name="attention" className={styles.noDataIcon} />)}
                    {aqiToName(props.station.aqi)}</div>
            </div>
            {/*<div className={styles.name}>{props.station.name}, {getTimeFromNow(props.station.date)}&nbsp;ago</div>*/}

            <div>{props.station.indexLevelName}</div>
        </div>
    )
};

export default Station;
