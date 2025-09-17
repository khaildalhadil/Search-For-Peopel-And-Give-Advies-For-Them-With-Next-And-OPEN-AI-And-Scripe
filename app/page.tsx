import Home from '@/components/Home.jsx';
import Profile from '@/components/ui/Profile.jsx';

import Cursor from '@/components/cursor/Cursor';

import GrainEffect from '@/components/visualEffects/GrainEffect';

export default function page() {
  return (
    <div className=' relative'>
    {/* <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center">
      <h1 className={
        twMerge(
          clsx(
            "text-blue-200", "text-4xl",
            "italic", "font-bold", 
            
          )
        )
      }
        >Welcome to Scrapin Website made by Khalid Alhadi
      </h1>
    </div> */}
      <GrainEffect />
      <Cursor />
      <Profile />
      <Home />
    </div>
  )
}
