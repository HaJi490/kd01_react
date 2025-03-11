import MyClockTime from "./MyClockTime"
import MyClockImage from "./MyClockImage"
//import './MyClock.css'

function MyClock(){
    return(
        <div className="flex flex-col justify-center items-center">
            <MyClockImage/>
            <MyClockTime/>
        </div>
    )
}

export default MyClock