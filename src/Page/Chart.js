import React from 'react';
import {
  Radar,ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const Chart = ({selectedPlayer}) => {
  
  return (
    <ResponsiveContainer width={700} height={400}>
      <RadarChart 
        cx="50%" 
        cy="50%" 
        outerRadius="80%" 
        width={384} 
        height={501} 
        data={selectedPlayer.stats}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject"  tick={{ fill: 'red', fontSize: 14 }} />
        <PolarRadiusAxis display="none"/> {/* 옆에 막대기 없는거 */}
        <Radar name="Mike" dataKey="A" stroke="red" fill="black" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Chart;