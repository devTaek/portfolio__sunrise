import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;


const Chart = ({selectedPlayer}) => {
  
  return (
    <ChartContainer>
      <RadarChart 
        cx={190} 
        cy={180} 
        outerRadius={150} 
        width={384} 
        height={501} 
        data={selectedPlayer.stats}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject"  tick={{ fill: 'red', fontSize: 14 }} />
        <PolarRadiusAxis display="none"/> {/* 옆에 막대기 없는거 */}
        <Radar name="Mike" dataKey="A" stroke="red" fill="black" fillOpacity={0.6} />
      </RadarChart>
    </ChartContainer>
  );
};

export default Chart;