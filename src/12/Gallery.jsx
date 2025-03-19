import TailButton from "../UI/TailButton";
import TailCard from "../UI/TailCard"
import { useEffect, useState, useRef } from "react";

export default function Gallery() {

    //화면에 렌더링될 상태 변수
    const[info, setInfo] =useState([]);
    //const[search, setSearch] = useState();

    //ref 변수 선언
    const refInput = useRef();
    const refSearch = useRef();

    //검색
    const handleInput=(e)=>{//e #생기는 이벤트를 잡음
        e.preventDefault();//preventDefalut() #
        if(refInput.current.value==''){
            alert('검색어를 입력하세요.');
            refInput.current.focus();
            return;
        }
        getFetchData();
    }

    //취소
    const handleReset=()=>{
        refInput.current.value = '';
    }
      
    //fetch
      const getFetchData = async()=>{
        //검색어 인코딩
        let searchWord = refInput.current.value;
        let searchWordEncoding = encodeURI(searchWord);

        //환경변수(.env)의 키값 가져옴
        const apiKey= import.meta.env.VITE_APP_SEE_KEY;
        let url=`https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
        url = `${url}serviceKey=${apiKey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${searchWordEncoding}&_type=json`
        console.log(url);

        const resp = await fetch(url);
        const data = await resp.json();

        let seeList = data.response.body.items.item;
        seeList.map(item=>item.galContentId);
        //console.log("seeList: ", seeList);

        let tm= seeList.map(item=><TailCard key={item.galContentId}
                                            title={item.galTitle} 
                                            subtitle={item.galPhotographyLocation}
                                            imgurl={item.galWebImageUrl.replace('http','https')}
                                            kws={item.galSearchKeyword}/>)
        setInfo(tm);
        console.log("tm: ", tm);
    }


    //시작할때 데이터 fetch
    useEffect(()=>{
        // getFetchData();
    },[])


  return (
    <>
    <form className="max-w-sm mx-auto">
        <div className="mb-5
                        flex items-center">
            <input type="text" className="w-full mr-3 p-2.5 shadow-xs bg-gray-50 border border-gray-300 
                                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" 
                                        placeholder="관광지 입력" ref={refInput} />
            <TailButton caption="검색" color="lime" onClick={handleInput}
                        className="text-white bg-amber-950 hover:bg-amber-800 
                        focus:ring-4 focus:outline-none focus:ring-blue-300 
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center"/>
            <TailButton caption="취소" color="lime" onClick={handleReset}
                        className="text-white bg-amber-950 hover:bg-amber-800 
                        focus:ring-4 focus:outline-none focus:ring-blue-300 
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center"/>
           
        </div>
    </form>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {info}
    </div>
    </>
  )
}
