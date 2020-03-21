import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector, Cell, Tooltip, Legend } from 'recharts'

const data = [
  { name: 'poniżej 18 roku życia', value: 3890 },
  { name: '18-29 lat', value: 6325 },
  { name: '30-39 lat', value: 4190},
  { name: '40-50 lat', value: 1312 },
  { name: 'powyżej 50 roku życia', value: 418 },
];
const COLORS = ['#28bb76', '#8884d8', '#8884d', '#999999', '#006699'];


export default class PieChartAge extends PureComponent {
  
  render() {
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    );
  }
}
