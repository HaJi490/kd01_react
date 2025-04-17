import clock from "./clock.png"

function MyClockImage() {
    return(
        // animate-[bounce_1.5s_ease-in-out_infinite]
        <div className="w-1/2 ">
            <img src={clock} alt="시계"></img>
        </div>
    )
}
export default MyClockImage