import React from 'react';
import styles from './Station.css';
import moment from 'moment';

function indexToClassName(index) {
    if (index > 9) {
        return styles.bad;
    }
    if (index > 5) {
        return styles.moderate;
    }
    if (index > 2) {
        return styles.good;
    }
    return styles.veryGood;
}

function indexToName(index) {
    if (index > 9) {
        return 'Bad';
    }
    if (index > 5) {
        return 'Moderate';
    }
    if (index > 2) {
        return 'Good';
    }
    return 'Very good';
}

function getTimeFromNow(date) {
    const diff = moment.utc(moment() - date),
        hours = +diff.format('HH'),
        minutes = +diff.format('mm');

    return hours ? (hours + 'h') : (minutes + 'm');
}

const Station = props => {
    return (
        <div className={styles.station}>
            <div className={styles.header}>Air quality</div>
            <div className={indexToClassName(props.station.indexLevel)}>
                <div className={styles.score}>{props.station.indexLevel}</div>
                <div>{indexToName(props.station.indexLevel)}</div>
            </div>
            <div className={styles.name}>{props.station.name}, {getTimeFromNow(props.station.date)}&nbsp;ago</div>

            <div>{props.station.indexLevelName}</div>
        </div>
    )
};

export default Station;
