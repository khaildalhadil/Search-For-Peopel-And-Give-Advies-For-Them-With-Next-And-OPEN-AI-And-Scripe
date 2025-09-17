'use client'
import {motion} from 'framer-motion'
import { useRef, useState } from 'react'

export default function MagneticWrapper({className, children, yes}) {

  const ref = useRef(null);

  const [position, setPosition] = useState({x: 0, y: 0});
  const {x, y} = position;
  console.log(position);

  function handelMouseMove(event) {
    const {clientX, clientY} = event;
    // console.log(clientX, clientY)

    const boundingR = ref.current?.getBoundingClientRect();

    if(boundingR) {

      const {width, height, top, left} = boundingR

      const middleX = clientX - (left + width / 2);
      const middelY = clientY - (top + height / 2);

      console.log(middleX, middelY);

      setPosition({x: -middleX * 10, y: -middelY * 10})

    }
  }

  function handelMouseleave() {
    setPosition({x: 0, y: 0})
  }

  return (
    <motion.div
      ref={ref}
      animate={{x, y}}
      className={`relative ${className}`}
      transition={{type: "spring", stiffness: 50, damping: 105, mass: .2}}
      onMouseMove={handelMouseMove}
      onMouseLeave={handelMouseleave}
    >
      {children}
    </motion.div>
  )
}
