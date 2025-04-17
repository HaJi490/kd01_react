
export default function TailButton({caption, color, onClick}) {
    const bg={
        "blue" : "bg-blue-700",
        "orange" : "bg-orange-700",
        "lime" : "bg-amber-950",
        "dgray" : "bg-gray-800",
        "lgray" : "bg-gray-400",
    }
    
    const bgHover={
        "blue" : "hover:bg-blue-400",
        "orange" : "hover:bg-orange-400",
        "lime" : "hover:bg-amber-200 ",
        "dgray" : "hover:bg-gray-500 ",
        "lgray" : "hover:bg-gray-200 ",
    }

  return (
<button className={`w-auto h-auto py-2 px-3 my-2 mx-1 mr-2 text-xs  hover:font-bold
                    ${bg[color]} ${bgHover[color]}
                    rounded-md text-white
                    flex justify-center items-center`}
            onClick={onClick}>
      {caption}
    </button>
  )
}
