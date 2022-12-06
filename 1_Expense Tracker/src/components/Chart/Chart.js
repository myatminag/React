import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    
    const dataValue = props.chartDatas.map( dataPoints => dataPoints.value ); 
    
    const totalMax = Math.max(...dataValue);

    return (
        <div className='chart'>
            {
                props.chartDatas.map( (dataPoints) => (
                    <ChartBar 
                        key = { dataPoints.label }
                        value ={ dataPoints.value }
                        maxValue = { totalMax }
                        label = { dataPoints.label } 
                    />
                ))
            }
        </div>
    )
}

export default Chart;