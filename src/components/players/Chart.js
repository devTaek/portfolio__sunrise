import React from 'react';
import {
  Radar,ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';


const Chart = ({selectedPlayer}) => {
  
  return (
    <ResponsiveContainer width="70%" height={400}>
      <RadarChart 
        cx="50%"
        cy="50%"
        outerRadius="78%"
        width={500}
        height={701}
        data={selectedPlayer.stats}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject"  tick={{ fill: 'white', fontSize: 18}} />
        <PolarRadiusAxis display="none"/> {/* 옆에 막대기 없는거 */}
        <Radar name={selectedPlayer.name} dataKey="A" stroke="red" fill="black" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Chart;