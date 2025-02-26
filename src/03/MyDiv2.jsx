import MyDiv3 from "./MyDiv3"

// props로 매개변수 받았을때
export default function MyDiv2(props) {
  return (
    <div className="w-8/10 h-8/10 
                     bg-lime-900 text-white text-2xl
                     p-10 
                    flex flex-col justify-center items-center">
        <div className="w-full text-left mb-10 text-sm">
        {/* '>'가 부등호로 인식되니까 ``으로 묶어서 사용 */}
        {`${props.md1} > ${props.md2}`}
        </div>
    <MyDiv3 d1={props.md1} d2={props.md2} d3={props.md3}/>
    </div>
  )
}
