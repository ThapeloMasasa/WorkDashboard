import React from 'react'
import {SparklineComponent, Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts';


const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
  return (
    <SparklineComponent id={id} 
                        height={height} 
                        width={width} 
                        dataSource={data} 
                        xName='xval' 
                        fill={color}
                        valueType='Numeric'
                        lineWidth={2}
                        border={{color: currentColor, width: 2}}
                        yName='yval' 
                        tooltipSettings={{
                          visible: true, format: '${xval} : ${yval}',
                          trackLineSettings:{
                            visible: true
                          }}}
                        type={type}>
                        <Inject services={[SparklineTooltip]} />
</SparklineComponent>
  )
}

export default SparkLine