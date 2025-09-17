
export default function FancyButton({text, icon, className}) {
  return (
    <button className={`fancy_btn ${className}`}>
      <div className="group bg-black rounded-full hover:bg-transparent text-white py-[1vw] px-[2vw] text-3xl cursor-pointer gap-2 flex items-center transition-all duration-75">
        <span>{text}</span>
        <span className="group-hover:translate-x-[.75vw] transition-transform duration-100">{icon}</span>
      </div>
    </button>
  )
}
