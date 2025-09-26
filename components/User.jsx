'use client'
import useMyStore from "@/app/sotre";
import axios from "axios";
import { redirect } from "next/navigation";
import { useState } from "react";


export default function User({user}) {
  
  /**
  * 
    items: Array(10)0: 
    displayLink: "uk.linkedin.com"
    formattedUrl: "https://uk.linkedin.com/in/khalid-al-hadi-b28a10320"
    htmlFormattedUrl: "https://uk.linkedin.com/in/<b>khalid</b>-al-hadi-b28a10320"
    htmlSnippet: "Bachelor&#39;s degree of Accounting and Finance · Experience: Amazon · Education: Leeds Beckett University · Location: Leeds · 10 connections on LinkedIn."
    htmlTitle: "<b>Khalid Al-Hadi</b> - Bachelor&#39;s degree of Accounting and Finance ..."
    kind: "customsearch#result"
    link: "https://uk.linkedin.com/in/khalid-al-hadi-b28a10320"
    pagemap: {cse_thumbnail: Array(1), ProfilePage: Array(1), metatags: Array(1), cse_image: Array(1)}
    snippet: "Bachelor's degree of Accounting and Finance · Experience: Amazon · Education: Leeds Beckett University · Location: Leeds · 10 connections on LinkedIn."
    title: "Khalid Al-Hadi - Bachelor's degree of Accounting and Finance ..."
  */

  let formattedUrl= "https://uk.linkedin.com/in/khalid-al-hadi-b28a10320";

  let unName = user.formattedUrl.split("/")[4]
  

  const [linkdinData, setLinkdinData] = useState(null);


 let {setLinkedinDataUser} = useMyStore();

  async function handelCliekToUser() {


    // let data = await axios.get("https://gist.githubusercontent.com/khaildalhadil/1cb1934074c818eada9ef83bc514c021/raw/69c25d70c4b7274efaba1c4d82f7d1e48cde3d71/myInfo.json");
    // console.log(data);
    // console.log(setLinkedinDataUser)
    
    // setLinkedinDataUser(data);

    redirect(`/linkedin/${unName}`);
  }

  return (
    <div className="w-full h-full font-mono border border-gray-400 rounded-2xl p-5 text-white hover:-translate-y-2 transition-all z-90 link" onClick={handelCliekToUser}>
      <div>
        <img src="/user.png" className="rounded-full" alt="user imge icon " />
      </div>
      <div className="bg-neutral-800 rounded p-2 mt-3 text-md text-start">
        <h1><span className="bg-purple-600 ">name:</span> {unName}</h1>
        <h2> <span className="bg-purple-600 ">title:</span> {user.title}</h2>
        <h3><span className="bg-purple-600 ">discripation:</span> {user.snippet}</h3>
      </div>
    </div>
  )
}
