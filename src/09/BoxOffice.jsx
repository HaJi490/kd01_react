import { useState, useEffect } from "react"

export default function BoxOffice() {
    //화면에 렌더링될 상태 변수
    const [tags, setTags] = useState([]);

    //일일 박스오피스 정보 가져오기
    const getFetchData = async ()=>{
        let url=`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        //환경변수의 키값가져오기!!!!!!!!!
        url = `${url}key=&targetDt=20250310`;

        console.log(url);
        //await #이 함수가 실행된 뒤에 다음꺼 실행
        const resp = await fetch(url);
        const data = await resp.json();

        let boxList = data.boxOfficeResult.dailyBoxOfficeList
        console.log(boxList);
    };

    //어제날짜 가져오기
    const getYesterday = () => {
        let dt = new Date();    //Date 객체를 만듦
        dt.setDate(dt.getDate - 1); //set을 통해 -1

        //연도 4자리
        let year = dt.getFullYear();  
        
        //월
        let month = String(dt.getMonth + 1).padStart(2, '0');

        
    }

    //컴포넌트가 실행될때 한번 fetch
    useEffect(()=>{
        getFetchData();
    }, []);

  return (
    <div>
      BoxOffice
    </div>
  )
}
