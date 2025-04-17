
//MyToggleBox에서 받은 props
export default function TailButtonLine({caption, color, onClick}) {
    const border400 = {
        "blue": "border-blue-400",
        "orange": "border-orange-400",
        "gray": "border-gray-400",
    }

    const bg100 = {
        "blue": "bg-blue-100",
        "orange": "bg-orange-100",
        "gray": "bg-white",
    }

    const bgHover = {
      "blue": "hover:bg-blue-400",
      "orange": "hover:bg-orange-400",
      "gray": "",
  }
    //props를 받아서 스타일시트적용
    return (
    <button className={`border ${border400[color]} rounded-md 
                      ${bg100[color]} ${bgHover[color]}
                      ${color !== "gray" && "hover:text-white"}
                       font-bold m-2 px-3 py-2`}
                        onClick={onClick}>
      {caption}
    </button>
  )
}
