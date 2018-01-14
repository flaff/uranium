import React from 'react';
import styles from './Weather.css';
import classNames from 'classnames';

const Weather = (props) => (
    <div className={classNames(styles.weather, props.className)}>
        <div className={styles.header}>Weather</div>
        <div className={styles.content}>
            <div className={styles.temperature}>-4</div>
            <div className={styles.secondary}>
                <div>&#176;</div>
                <div>C</div>
            </div>
        </div>
    </div>
);

export default Weather;