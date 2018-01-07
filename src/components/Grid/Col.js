import React from 'react';
import styles from './bootstrap-grid.css';
import classNames from 'classnames';

const Col = (props) => (
    <div className={classNames({
        [styles[`cl-${props.sm}`]]: !!props.sm,
        [styles[`md-${props.md}`]]: !!props.md,
        [styles[`lg-${props.lg}`]]: !!props.lg
    }, props.className)}>
        {props.children}
    </div>
);

export default Col;