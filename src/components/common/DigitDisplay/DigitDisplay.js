import React from 'react';
import styles from './DigitDisplay.css';
import classNames from 'classnames';

const DigitDisplay = props => (
    <div className={classNames(styles.digitDisplay, props.className)}>
        {props.value < 100 && <span className={styles.inactive}>0</span>}
        {props.value < 10 && <span className={styles.inactive}>0</span>}
        {props.value}
    </div>
);

export default DigitDisplay;
