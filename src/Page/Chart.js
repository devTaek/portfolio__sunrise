import React from 'react';
import {
  Radar,ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const Chart = ({selectedPlayer}) => {
  
  return (
    <ResponsiveContainer width={700} height={500}>
      <RadarChart 
        cx="40%" 
        cy="50%" 
        outerRadius="100%" 
        width={500} 
        height={701} 
        data={selectedPlayer.stats}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject"  tick={{ fill: 'red', fontSize: 14 }} />
        <PolarRadiusAxis display="none"/> {/* 옆에 막대기 없는거 */}
        <Radar name={selectedPlayer.name} dataKey="A" stroke="red" fill="black" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Chart;