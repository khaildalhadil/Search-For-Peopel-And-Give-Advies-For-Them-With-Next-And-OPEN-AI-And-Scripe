
export default function RowInfo({header, content}) {
  return (
  <div className="border flex rounded">
    <p className="flex-1 font-bold border-r p-2 text-start flex items-center">{header}</p> 
    <span className="p-2 flex-3 flex items-center">{content}</span>
  </div>
  )
}
