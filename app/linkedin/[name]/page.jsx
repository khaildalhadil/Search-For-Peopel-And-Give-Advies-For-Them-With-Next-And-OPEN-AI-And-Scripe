'use client'
import useMyStore from "@/app/sotre";
import RowInfo from '@/components/RowInfo';
import GrainEffect from "@/components/visualEffects/GrainEffect";
import WaterWaveWrapper from "@/components/visualEffects/WaterWaveWrapper";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiRobot3Line } from 'react-icons/ri'
import { TfiClose } from 'react-icons/tfi'
import Loadding from '@/app/loading';
import Image from "next/image";

export default function LinkedinData({params}) {

  const userParams = React.use(params);
  const name = userParams.name;

  const [userData, setUserData] = useState();

  const [loadding, isLoadding] = useState(false);
  const [showChat, setShowChat] = useState(false);
 
 
  useEffect(() => {
    
    isLoadding(true)

    async function getData() {

      let response = await fetch("/api/linkedin/", {
        method: "POST",
        header: {"content-type": "application/json"},
        body: JSON.stringify({name}),
      })

      let data = await response.json();
      // console.log(data);
      setUserData(data);

    }

    getData();

  }, [])

  

  if (loadding) <Loadding />

  return (
    <div className=" overflow-x-hidden">
      <div className="text-[#444] text-2xl font-mono rounded-2xl h-screen w-screen bg-white pt-20">
    

        <div className='chat'>
          {
            showChat && <div className='chatBox'>
              <div className="header rounded-tl-lg rounded-tr-lg w-[403px]">chat with {userData?.person?.firstName} {userData?.person?.lastName}</div>
              <div className='iframe_chat bg-gray-700 flex justify-center items-center p-3 text-3xl text-c'>I will  make you chat with your linkedin account I'm working in it
                <br />
                  بخليك تراسل حسابك في لنكد ان بستخدام ا اي جالس اشتغل عليه حاليا</div>
              {/* <iframe className='iframe_chat' src="https://my-own-chat-bot-next-js.vercel.app/" frameborder="" ></iframe> */}
            </div>
          }
          <div className='icon' onClick={()=> setShowChat(!showChat)}>
            {!showChat ? <RiRobot3Line className='text-white' />: <TfiClose /> }
          </div>
        </div>
        
        <div className="bg-[#f9f6f3] max-w-[1300px] m-auto rounded-2xl">
          
          <div className="lg:flex  bg-red-50 max-w-[1200px] m-auto py-10 px-5 gap-20">
            
            <div className="flex-3">
              {userData?.person ? <h1 className="text-6xl font-bold mb-4">Hey I'm <span className="text-amber-700">{userData?.person?.firstName} {userData?.person?.lastName}</span></h1>: <h1 className="text-6xl font-bold mb-4">Loadding <span className="text-amber-700"> The Name ... </span></h1>}
              
              <div>
                {userData?.person ? <RowInfo header={"headline"} content={userData?.person?.headline} />: <RowInfo header={""} content={"Loadding... "} />}
                {userData?.person ? <RowInfo header={"Summary"} content={userData?.person?.summary}/>: <RowInfo header={""} content={"Loadding... "} />}
                {userData?.person ? <RowInfo header={"Open TO Work"} content={userData?.person?.openToWork? "Yes": "No"} />: <RowInfo header={"Open TO Work"} content={"Loadding... "} />}
                {userData?.person ? <RowInfo header={"Acount Creation Date"} content={`Month → ${userData?.person?.creationDate?.month} / Year → ${userData?.person?.creationDate?.year}`} />: <RowInfo header={"Acount Creation Date"} content={"Loadding... "} />}
                {userData?.person ? <RowInfo header={"From"} content={`${userData?.person?.location.country}: ${userData?.person?.location.state}`} />: <RowInfo header={"From"} content={"Loadding... "} />}

                <div className="border flex rounded">
                  <p className="flex-1 font-bold border-r p-2 text-start flex items-center">skills</p> 
                  <ul className="p-2 flex-3  ">
                    {
                      userData?.person?.skills.map((skill) => 
                        <li className=" list-decimal ml-20">{skill}</li>)
                    }
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex mt-5">
                  <img className="h-10 rounded-full w-10 object-cover border border-[#f9f6f3]" src="/img-1.jpg" alt="user Image" />
                  <img className="h-10 rounded-full w-10 object-cover border border-[#f9f6f3] -ml-3" src="/img-2.jpg" alt="user Image" />
                  <img className="h-10 rounded-full w-10 object-cover border border-[#f9f6f3] -ml-3" src="/img-3.jpg" alt="user Image" />
                </div>
                <p className="text-xl mt-4 text-green-700 font-bold">Follower {userData?.person?.followerCount ? userData?.person?.followerCount: "Not Found"}</p>
              </div>

            </div>

            <div  className="flex-2 justify-self-center">
              {userData?.person?.photoUrl ? <img className="h-full rounded object-contain" src={userData?.person?.photoUrl} alt="user image" />: <p className="w-full text-4xl text-gray-700 text-center">"Loading THe Image..."</p>}
            </div>

          </div>

        </div>
      </div>

      {/* <div className="h-screen w-screen ">
        <p>Adives</p>
      </div> */}
    </div>
  )
}