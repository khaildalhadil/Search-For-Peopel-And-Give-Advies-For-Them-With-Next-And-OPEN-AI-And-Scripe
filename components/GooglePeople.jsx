'use client'

import { useState } from "react"
import useMyStore from '@/app/sotre.js'

export default function GooglePeople() {

  const [name, setName] = useState("");

  const {setUserName} = useMyStore();
  // console.log(setUserName);

  function handelStoreName(e) {

    setUserName(e.target.value);
    setName(e.target.value);
    
  }

  return (
    <div className="w-[1300px] m-auto bg-[#444]  p-4 rounded-lg">
      <label htmlFor="nameInput" className="text-4xl mb-10 text-center block">Type Your Name In Linkedin</label>
      <label htmlFor="nameInput" className="text-4xl mb-10 text-center block font-mono">اكتب اسمك في لنكدان</label>
      <div className="text-center mb-5"> 
        <input 
          value={name} onChange={(e) => handelStoreName(e)} 
          type="text" name="nameInput" id="nameInput" 
          className=" border border-gray-400 w-1/2 p-3 rounded-lg outline-none text-2xl font-mono" />
      </div>
    </div>
  )
}
