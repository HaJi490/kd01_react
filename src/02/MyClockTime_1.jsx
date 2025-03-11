function MyClockTime() {
    const time = new Date();

    return(
        <div className="p-5 text-red-400 font-bold">
            현재시각  {time.toLocaleTimeString()}
        </div>
    )
}

export default MyClockTime
