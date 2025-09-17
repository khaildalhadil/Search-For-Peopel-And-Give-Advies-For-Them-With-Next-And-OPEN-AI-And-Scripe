'use client'
import WaterWaveWrapper from '@/components/visualEffects/WaterWaveWrapper'
import { useEffect } from "react"
import Card from '@/components/ui/Card.jsx'
import FancyButton from "@/components/ui/FancyButton.jsx";
import MagneticWrapper from '@/components/visualEffects/MagneticWrapper.jsx';
import MagneticWrapperTest from '@/components/visualEffects/MagneticWrapperTest.jsx';

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
      { ()=><div className='h-screen p-20'><Card  > 
        <MagneticWrapper className='w-[300px] mx-auto'>
          <FancyButton text="لا ولا طشه" icon={"->"} />
        </MagneticWrapper>
        <MagneticWrapperTest className='w-[300px] mx-auto'>
          <FancyButton text="اكيد نعم" icon={"->"} className={"fancy_btn_text"} />
        </MagneticWrapperTest>
        </Card>
      </div>}
    </WaterWaveWrapper>
  
  )
}
