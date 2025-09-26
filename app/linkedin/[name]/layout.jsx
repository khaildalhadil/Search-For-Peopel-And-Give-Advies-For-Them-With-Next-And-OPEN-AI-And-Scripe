import Cursor from '@/components/cursor/Cursor'
import React from 'react'


export default function layout({children}) {

  

  return (
    <>
      <div className=''>
        <Cursor color={"#444"} />
        {children}
      </div>
    </>
  )
}
