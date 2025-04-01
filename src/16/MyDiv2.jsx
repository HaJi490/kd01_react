import MyDiv3 from "./MyDiv3"

// props로 매개변수 받았을때
export default function MyDiv2({ n, setN}) {
  return (
    <div className="w-8/10 h-8/10 
                     bg-lime-900 text-white text-2xl
                     p-10 
                    flex flex-col justify-center items-center">
        <div className="w-full text-left mb-10 text-sm">
          Mydiv2
        </div>
    <MyDiv3 n={n} setN={setN}/>
    </div>
  )
}
