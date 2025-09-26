'use client'
import User from '@/components/User.jsx';
import useMyStore from '../sotre';

export default function AllUser() {

  let {googleUser} = useMyStore();
  console.log(googleUser);

  return (
    <>
      <h1 className='text-center text-2xl mb-3 text-white font-mono'>I found more than one person with the same name as you. Click on the file.</h1>
      <h2 className='text-center text-2xl mb-5 text-white font-mono'>حصلت اكثر من شخص نفس اسمك اضغط على الملف مالك منهم</h2>
      <div className='w-[1300px] m-auto grid grid-cols-[1fr_1fr_1fr_1fr] gap-3 '>

        {(googleUser.map((user,i) => <User key={i} user={user} />))}
      </div>
    </>
  )
}
