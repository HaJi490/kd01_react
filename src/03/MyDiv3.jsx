//속성명으로 받을때(넘어오는게 Object여서 구조분해가 가능하기 때문에 가능)
export default function MyDiv3({d1, d2, d3}) {
  return (
    <div className="w-8/10 h-8/10 
                     bg-lime-500 text-white text-2xl
                     p-10
                    flex flex-col justify-center items-center">
        <div className="w-full text-left mb-10 text-sm">
            {d1} : {d2} : {d3}
        </div>
    </div>
  )
}
