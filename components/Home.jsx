'use client'
import WaterWaveWrapper from '@/components/visualEffects/WaterWaveWrapper'
import Card from '@/components/ui/Card.jsx'
import FancyButton from "@/components/ui/FancyButton.jsx";
import MagneticWrapper from '@/components/visualEffects/MagneticWrapper.jsx';
import MagneticWrapperTest from '@/components/visualEffects/MagneticWrapperTest.jsx';
import GooglePeople from '@/components/GooglePeople.jsx'
import useMyStore from '@/app/sotre'
import { useState } from 'react';

import AllUser from '@/components/AllUser'
import { useStore } from 'zustand';

import LinkedinData from '@/components/LinkedinData.jsx';
import GrainEffect from './visualEffects/GrainEffect';
import Cursor from './cursor/Cursor';
import Profile from './ui/Profile';
import { redirect } from 'next/navigation';


export default function Home() {

  const name = useMyStore(state => state.name);
  const [allUser, setAllUser] = useState();

  async function getData() {
    
    try {

      const response = await fetch(`/api/google`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({name})
    })

    
      const data = await response.json();
      console.log(data);
      setAllUser(data.items)



    } catch(err) {
      console.log(err);
    }
  }

  const LinkedinDataUser = useMyStore(state => state.LinkedinDataUser);
  if (LinkedinDataUser.length) return <LinkedinData />

  const {setGoogleUser} = useMyStore();

  if (allUser) {

    setGoogleUser(allUser);
    redirect("/selectyourlinkedin")
  }

  // if (linkdinData) 

  return (
    
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      { ()=>
        <div className='h-screen p-20'>
          <GrainEffect />
          
          <Profile />
          <Card > 
            <GooglePeople />
            <MagneticWrapper  className='w-[300px] mx-auto'>
              <FancyButton text="search بحث" icon={"->"} hanelClickBtn={getData} />
            </MagneticWrapper>
          </Card>
        </div>
      }
    </WaterWaveWrapper>
  
  )
}
