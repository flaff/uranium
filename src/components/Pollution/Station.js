import React, {Component} from 'react';
import styles from './Station.css';

const Station = props => {
    return (
        <div className={styles.tile}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className={styles.header}>Jakość powietrza</div>
                    </div>
                    <div className="col">
                        <div className={styles.name}>{props.name}</div>
                    </div>
                </div>
                <div className={styles.score}>{props.score}</div>
            </div>
        </div>
    )
};

export default Station;
