import React from 'react';
import styles from './bootstrap-grid.css';
import classNames from 'classnames';

const Container = (props) => (
    <div className={classNames(
        props.fluid ? styles['container-fluid'] : styles.container,
        {[styles['no-gutters']]: props.noGutters},
        props.className
    )}>{props.children}</div>
);

export default Container;