import React from 'react';

import ChartBar from "../ChartBar/ChartBar";
import './Chart.css';

function Chart(props) {
    const maxValue = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));

    return (
        <div className={"chart"}>
            {props.dataPoints.map(dataPoint =>
                <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={maxValue}/>)}
        </div>
    );
}

export default Chart;