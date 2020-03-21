import React, { PureComponent } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
  {
    name: 'Styczeń', uv: 100, 
  },
  {
    name: 'Luty', uv: 151, 
  },
  {
    name: 'Marzec', uv: 198, 
  },
  {
    name: 'Kwiecień', uv: 257, 
  },
  {
    name: 'Maj', uv: 440, 
  },
  {
    name: 'Czerwiec', uv: 690, 
  },
  {
    name: 'Lipiec', uv: 400, 
  },
  {
    name: 'Sierpień', uv: 203, 
  },
  {
    name: 'Wrzesień', uv: 489, 
  },
  {
    name: 'Październik', uv: 381, 
  },
  {
    name: 'Listopad', uv: 209, 
  },
  {
    name: 'Grudzień', uv: 189, 
  },
];

export default class AreaChartUsers extends PureComponent {

  render() {
    return (
      <AreaChart
        width={900}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type='natural' dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }
}
