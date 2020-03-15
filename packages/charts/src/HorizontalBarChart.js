import React from 'react';
import { HorizontalWrapper, FullWidthCell, Row } from './Chart';

const HorizontalBarChart = ({ className, color, width, values = [] }) => (
  <HorizontalWrapper className={className} width={width}>
    {values.map(({ label, value }, index) => (
      <tr key={index}>
        <td>{label}</td>
        <FullWidthCell>
          <Row value={value} color={color} />
          <span>{value}</span>
        </FullWidthCell>
      </tr>
    ))}
  </HorizontalWrapper>
);

export default HorizontalBarChart;
