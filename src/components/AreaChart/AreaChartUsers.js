import React, { PureComponent } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Styczeń', uv: 894, 
  },
  {
    name: 'Luty', uv: 409, 
  },
  {
    name: 'Marzec', uv: 743, 
  },
  {
    name: 'Kwiecień', uv: 257, 
  },
];

const chartStyle = {
  boxShadow: "1px 1px 5px 1px #999999",
  backgroundColor: "#fff",
  borderRadius: "5px"
}

export default class AreaChartUsers extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width={'99%'} height={400}>
        <AreaChart style={chartStyle}
        width={850}
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
      </ResponsiveContainer>   
    );
  }
}

