
export default function TailButton({caption, color, onClick}) {
    const bg={
        "blue" : "bg-blue-700",
        "orange" : "bg-orange-700",
        "lime" : "bg-blue-700",
    }
    
    const bgHover={
        "blue" : "hover:bg-blue-400",
        "orange" : "hover:bg-orange-400",
        "lime" : "hover:bg-blue-400",
    }

    

  return (
    <button className={`py-2  px-4 m-4 text-lg hover:font-bold
                        ${bg[color]} ${bgHover[color]}
                    rounded-md text-white
                    `}
            onClick={onClick}>
      {caption}
    </button>
  )
}
