import MyDiv2 from "./MyDiv2"

//props = 사용자정의태그의 속성
export default function MyDiv1() {
    let d1="myDiv1";
    let d2="myDiv2";
    let d3="myDiv3";
  return (
    <div className="w-8/10 h-8/10 
                    bg-lime-950 text-white text-2xl
                     p-10
                    flex flex-col justify-center items-center">
        <div className="w-full text-left mb-10 text-sm">
            {d1}
        </div>
      <MyDiv2 md1={d1} md2={d2} md3={d3}/>
    </div>
  )
}

