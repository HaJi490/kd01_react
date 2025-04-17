import clock from "./clock.png"


function MyClockImage() {
    return(
        // animate-[bounce_1.5s_ease-in-out_infinite]
        <div className="w-1/2 ">
        <img src={clock}></img>
        </div>
    )
}

export default MyClockImage