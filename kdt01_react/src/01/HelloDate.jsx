function HelloDate() {
    const current = new Date();

    // jsx 스타일 속성넣기
    const tStyle = {
        backgroundColor:"aliceblue",
        padding: "5px",
        fontSize: "large"
    }
    return (
        <div style={tStyle}>
           {/* 리턴문안에 변수, 조건식 넣고 싶을 때 {} -> 리액트의 jsx문법 // 객체 그대로를 넣을 수 없으니까 '객체.()'*/}
           {/* 무조건 tag로 싸서 보내야함 */}
            현재시각 : 
            <span style={{color: "blue", fontWeight: "bolder"}}>
                {current.toLocaleTimeString()} 
            </span>   
        </div>
    )
    
}

export default HelloDate