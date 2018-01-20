import React from 'react';
import styles from './Icon.css';
import classNames from 'classnames';

const Icon = (props) => (
    <span className={classNames(styles.pe7s, {[styles[props.name]]: props.name}, props.className)}>{props.children}</span>
);

export default Icon;