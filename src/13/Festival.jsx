import TailCard from "../UI/TailCard";
import TailSelect from "../UI/TailSelect"
import { useEffect, useState, useRef } from "react";

export default function Festival() {
    //state 변수
    const[tags, setTags] = useState([]);
    const[gugun, setGugun] = useState([]);
    const[card, setCard] = useState();

    //seelct ref
    const refSelect = useRef()

    //data fetch
    const getFetchData= async()=>{
        const apikey = import.meta.env.VITE_APP_DATA_KEY;
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url =`${url}serviceKey=${apikey}&pageNo=1&numOfRows=39&resultType=json`;

        console.log(url);

        const resp = await fetch(url);
        const data = await resp.json();
        
        let festiList = data.getFestivalKr.item;
        festiList.map(item => item.UC_SEQ);
        setTags(festiList);
        console.log("festiList: ", festiList);
        
        setCard(festiList.map(item=> <TailCard key={item.UC_SEQ}
                                        title ={item.MAIN_TITLE.split('(')[0]}//문자열 '('를 기준으로 뜯어짐-> 배열 2개생성 -> [0]인거만 씀
                                        subtitle ={item.TITLE}
                                        imgurl={item.MAIN_IMG_NORMAL}
                                        kws={item.PLACE}/>))

    }

    //맨처음 한번 url 불러오기
    useEffect(()=>{
        getFetchData();
    },[]);

    //전체데이터 생성 후
    useEffect(()=>{
        //if(!tdata) return;
        //option 만들기
        let tm = tags.map(item=>item.GUGUN_NM);
        tm = [...new Set(tm)];//중복 제거
        tm.sort();//가나다 정렬
        
        setGugun(tm);
    },[tags])//fetchdata가 완성됐을때
    
    useEffect(()=>{
        if(gugun.length== 0) return;
        console.log("구군정보: ", gugun);
    },[gugun])

    //선택한 option정보 가져오기
    let handleCard=()=>{
        let tr=tags.filter(item=> item.GUGUN_NM == refSelect.current.value)
                .map(item=> <TailCard key={item.UC_SEQ}
                                    title ={item.MAIN_TITLE.split('(')[0]}//문자열 '('를 기준으로 뜯어짐-> 배열 2개생성 -> [0]인거만 씀
                                    subtitle ={item.TITLE}
                                    imgurl={item.MAIN_IMG_NORMAL}
                                    kws={item.PLACE}/>);
        setCard(tr);
        console.log(tr);
    }

  return (
    <div>
        <div>
            <TailSelect id="sel1" 
                        refSel={refSelect}
                        ops={gugun} 
                        handleChange={handleCard}/>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {card} 
        </div>
    </div>
  )
}
