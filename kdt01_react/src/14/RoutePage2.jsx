import { useLocation, useSearchParams } from "react-router-dom"

export default function RoutePage2() {
    //location #경로를 변수로 가져올때
    const loc = useLocation();
    console.log("loc pathname= ", loc.pathname) ;  

    //**SearchParams 안썼을때**
    // let tm = loc.search.replace('?','').split('&'); //split을 통해 배열이됨
    // console.log(tm);
    // console.log("loc search= ", loc.search) ; //Stirng(문자열)

    // let item1 = tm[0].split('=')[1];
    // let item2 = tm[1].split('=')[1];
    // console.log(item1, item2);
    


    const [sParams] = useSearchParams();
    console.log('sParams= ', sParams);
    
    //**SearchParam 사용1(비추)**
    // const qlist=[...sParams];
    // console.log('qlist= ', qlist);

    // let item1 = qlist[0][1];
    // let item2 = qlist[1][1];

    //**SearchParam 사용2(안쪼개도 됨)**
    let item1 = sParams.get('item1');
    let item2 = sParams.get('item2');
  return (
    <div className="w-11/12 p-3 bg-stone-100 rounded-md text-stone-600  font-bold flex justify-center">
        {/* item1이 null이면 */}
        { !item1 ? '메뉴페이지 입니다.' : `${item1}은 ${item2}입니다.`}
    </div>
  )
}
