import React from 'react';
import styles from './bootstrap-grid.css';
import classNames from 'classnames';

const Row = (props) => (
    <div className={classNames(styles.row, props.className)}>{props.children}</div>
);

export default Row;