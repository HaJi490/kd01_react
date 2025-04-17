import bank from "../assets/bank.png";
import busan from "../assets/busan.png";
import market from "../assets/market.png";
import { useState } from "react";

export default function FoodCard({obj}) {
    // const obj = {
    //     "구분": "광역지원센터",
    //     "시군구": "부산시",
    //     "사업장명": "부산광역푸드뱅크",
    //     "신고기준": "당연",
    //     "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    //     "연락처(대표번호)": "051-791-1377",
    //     "팩스번호": "051-714-3096",
    //     "운영주체 분류": "1. 사회복지법인",
    //     "운영주체명": "부산광역시사회복지협의회"
    // };

    const imgGubun = {
        "광역지원센터": busan,
        "기초푸드뱅크":bank,
        "기초푸드마켓":market,
    };

    //truefalse로 조절
    const[isShow, setIsShow] = useState(false);

    const handleIsShow = () =>{
        setIsShow(!isShow);
    };


    return (
        <div className="w-full h-35 p-1.5 border border-stone-200 solid 1px
                    flex">
            <div className="w-1/4 mr-1 flex justify-center items-center">
            <img src={imgGubun[obj["구분"]]} alt={obj["구분"]} className="w-11/12 " />
            </div>
            
            {/* 'obj.구분'처럼 한글이나 뛰어쓰기가 있으면 [] 표기법을 사용해주는게 좋음 */}
            {/* []쓸때 문자열이니까 "" */}
            <div className="w-3/4 h-full py-2">
                <h1 className="h-1/4  font-extrabold text-lg">
                    {obj["사업장명"]}
                </h1>
                <p className="h-1/4 text-sm ">
                    {obj["운영주체명"]}
                </p>
                <p className="mb-2 text-xs text-gray-600">
                    {obj["사업장 소재지"]}
                </p> 
                <p className="h-1/4  bg-gray-500 cursor-pointer
                            flex items-center p-1
                            text-xs text-white" onClick={handleIsShow}>
                    {/* && 둘중하나가 거짓이면 거짓 */}
                    { isShow && `연락처 :${obj["연락처(대표번호)"]}, fax :${obj["팩스번호"]}`}
                </p>
            </div>
        </div>
    )
}
