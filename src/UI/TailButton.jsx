
export default function TailButton({caption, color, onClick}) {
    const bg={
        "blue" : "bg-blue-700",
        "orange" : "bg-orange-700",
        "lime" : "bg-amber-950",
    }
    
    const bgHover={
        "blue" : "hover:bg-blue-400",
        "orange" : "hover:bg-orange-400",
        "lime" : "hover:bg-amber-200 ",
    }

  return (
    <button className={`py-2  px-3 my-2 mx-1 text-xs  hover:font-bold
                        ${bg[color]} ${bgHover[color]}
                    rounded-md text-white
                    `}
            onClick={onClick}>
      {caption}
    </button>
  )
}
