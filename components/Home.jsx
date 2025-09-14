'use client'
import WaterWaveWrapper from '@/components/visualEffects/WaterWaveWrapper'
import { useEffect } from "react"

export default function Home() {

  useEffect(() => {
    async function getData() {
      const data = await fetch("api/twitter",{
        method: "GET"
      })
      
      // console.log(data);
    }
    getData();
  } ,[])

  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      { ()=><div className='h-screen'></div>}
    </WaterWaveWrapper>
  
  )
}
