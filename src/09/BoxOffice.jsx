import { useState, useEffect } from "react"
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export default function BoxOffice() {
    //화면에 렌더링될 상태 변수
    const [tags, setTags] = useState([]);
    const [info, setInfo] = useState('');

     //어제날짜 가져오기
     //메서드 ()잘 넣어주기
     const getYesterday = () => {
      let dt = new Date();    //Date 객체를 만듦
      dt.setDate(dt.getDate() - 1); //set을 통해 -1(하루빼기)

      //연도 4자리
      let year = dt.getFullYear();  
      
      //월
      let month = String(dt.getMonth() + 1).padStart(2, '0'); //0부터 시작해서 +1 (Month만)

      //일
      let day = String(dt.getDate()).padStart(2, '0');

      return (year + '-' + month + '-' + day);
  }

    //일일 박스오피스 정보 가져오기
    const getFetchData = async ()=>{
      //환경변수(.env)의 키값가져옴
        const mvApiKey = import.meta.env.VITE_APP_API_KEY ;
        const dt = getYesterday().replaceAll('-','');
        let url=`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        url = `${url}key=${mvApiKey}&targetDt=20250305`;//${dt}

        console.log(url);
        //await #이 함수가 실행된 뒤에 다음꺼 실행
        const resp = await fetch(url);
        const data = await resp.json();

        let boxList = data.boxOfficeResult.dailyBoxOfficeList;
        boxList.map(item=> item.rank);
        //console.log(boxList);
        
       
        let tm = boxList.map(item => <tr key={item.movieCd} //다른데이터와 구분되는 키값(영화코드)
                                        onClick={()=>clickMv(item)} //'()=>' 안하면 클릭이 안됨
                                      className="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 
                                                  hover:cursor-pointer hover:font-bold hover:bg-stone-200">
                                      <td scope="row" className="w-24 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       {item.rank}
                                      </td>
                                      <td className="w-1/7 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.movieNm}
                                      </td>
                                      <td className="w-1/7 px-6 py-4 text-right">
                                        {parseInt(item.salesAmt).toLocaleString()}  
                                      </td>
                                      <td className="w-1/7 px-6 py-4 text-right">
                                        {parseInt(item.audiCnt).toLocaleString()} 
                                      </td>
                                      <td className="w-1/7 px-6 py-4 text-right">
                                        {parseInt(item.salesAcc).toLocaleString()}
                                      </td>
                                      <td className="w-1/7 px-6 py-4 text-right">
                                        {parseInt(item.audiAcc).toLocaleString()}
                                      </td>
                                      <td className="w-24 px-6 py-4 flex justify-center items-center">
                                      {/* .abs #절댓값# parseInt #소숫점이하 숫자 제거*/}
                                        {parseInt(item.rankInten) > 0 ? <span className="text-red-500"><FaCaretUp/></span>: 
                                        parseInt(item.rankInten) < 0 ? <span className="text-blue-500"><FaCaretDown/></span> : ''}
                                        {item.rankInten ==0? '-': Math.abs(item.rankInten)}
                                      </td>
                                    </tr>)
        //배열변수 선언하고 push해줘야함 ->tr 10개
        setTags(tm);
        console.log(tm);
    };
    

     //컴포넌트가 실행될때 한번 fetch
     useEffect(()=>{
      getFetchData();
    }, []);

    //클릭하면 영화정보
    const clickMv=(item) => {
      //console.log(item.movieNm+item.scrnCnt+item.showCnt);
      setInfo(`[${item.rankOldAndNew}]${item.movieNm}, 상영한 스크린수: ${item.scrnCnt}, 상영횟수: ${item.showCnt}`)
      
    }



  return (
    //class -> className 으로
      <div className="relative overflow-x-auto w-11/12">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="w-full text-xs font-bold text-stone-700 uppercase bg-stone-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <td scope="col" className="px-6 py-3 w-24">
                    순위
                </td>
                <td scope="col" className="px-6 py-3 w-1/7">
                    영화명
                </td>
                <td scope="col" className="px-6 py-3 w-1/7">
                    매출액
                </td>
                <td scope="col" className="px-6 py-3 w-1/7">
                    관객수
                </td>
                <td scope="col" className="px-6 py-3 w-1/7">
                    누적매출액
                </td>
                <td scope="col" className="px-6 py-3 w-1/7">
                    누적관객수
                </td>
                <td scope="col" className="px-6 py-3 w-24">
                    증감률
                </td>
            </tr>
        </thead>
        <tbody className="w-full">
            {tags}
        </tbody>
        <tfoot>
          <tr className="text-md h-20 font-bold text-stone-800 bg-stone-100 border border-y-2 border-y-amber-950">
            <td colSpan="7" className="text-center">
           
              {info}
            </td>
          </tr>
        </tfoot>
        
    </table>
</div>
    
  )
}
