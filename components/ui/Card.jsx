import clsx from "clsx";
import { twMerge } from "tailwind-merge";


export default function Card({title, children, className}) {
  return (
    <div className={twMerge(clsx(
      // className, "bg-[#ffffff44] max-w-[1200px] h-fit m-auto rounded-2xl border p-6 text-gray-100 overflow-hidden border-none"
      className, "w-screen h-screen fixed top-0 left-0 z-90 rounded-2xl border p-6 text-gray-100 overflow-hidden border-none"
    ))}>
      <div className="flex flex-col gap-y-6">
        {title && <div><p className="uppercase text-lg">{title}</p></div>}
        <h1 className="text-center mt-50 text-6xl">من خالد مبرمج ممتاز ؟</h1>
        {children}
      </div>
    </div>
  )
}
