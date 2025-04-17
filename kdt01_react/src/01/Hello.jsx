import HelloDate from "./HelloDate"

function Hello() {
    let name = 'PNU';

    return (
        <>
            <h1 className="font-black">
                {/* {name == undefined ? "이름이 존재하지 않습니다." : name} 와 같음 */}
                {/* {name && "이름이 존재하지 않습니다."} */}
                {/* {name == undefined ? "이름이 존재하지 않습니다." : `${name}님 반갑습니다.`} */}
                {name && `${name} 님 반갑습니다.`}
            </h1>
            <HelloDate />
        </>
    )
}

export default Hello