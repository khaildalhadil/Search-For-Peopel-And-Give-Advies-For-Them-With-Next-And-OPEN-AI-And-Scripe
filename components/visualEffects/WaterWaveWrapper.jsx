'use client'
import WaterWave from 'react-water-wave';

export default function WaterWaveWrapper({
  children,
  dropRadius,
  perturbance,
  resolution,
  imageUrl
}) {
  return (
    <WaterWave 
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >

      {children}
    </WaterWave>
  )
}
