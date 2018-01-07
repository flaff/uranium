import React, {Component} from 'react';
import Station from './Station';

const StationsList = props => (
    <div className="row">
        <div>
            <Station {...props.station} />
        </div>
    </div>
);

export default StationsList;
