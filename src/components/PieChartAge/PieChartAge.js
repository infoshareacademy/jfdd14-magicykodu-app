import React, { PureComponent } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

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
      <ResponsiveContainer width={'99%'} height={400}>
        <PieChart width={800} onMouseEnter={this.onPieEnter} > 
          <Pie
            data={data}
            cx="50%" 
            cy="45%" 
            innerRadius="50%"
            outerRadius="65%"
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value">
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Tooltip />
          <Legend 
            verticalAlign="bottom" 
            align="center"
            iconType="circle"/>
        </PieChart>
      </ResponsiveContainer>  
    );
  }
}

