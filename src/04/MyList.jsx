import MyListItem from "./MyListItem"
import MyListData from "./MyListData.json"

export default function MyList() {
    //한개만 불러올 때(배열)
    // const data = { "title" : "HTML",
    //     "imgUrl" : "./img/html.png", 
    //     "content": "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"
    //   }
    
    let show = true;
    //map의 ()=>{return문} 콜백함수 생략 > 명령어 하나니까,  //const도 됨 
    // item은 오브젝트, 객체, 내용 & i는 index
    let tags = MyListData.map( item => <MyListItem 
                                    key={item.title}
                                    d1={item.title}
                                    d2={item.content} 
                                    img={item.imgUrl}
                                    show = {show}/>) ;
    console.log(tags);
    
    
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 
                    w-full m-10">
        {/* className="grid grid-cols-1 lg:grid-cols-2 gap-4 
        w-full m-10" */}
      {/* <MyListItem d1={data.title} d2={data.content} img={data.imgUrl}/>
      <MyListItem d1={data.title} d2={data.content} img={data.imgUrl}/>
      <MyListItem d1={data.title} d2={data.content} img={data.imgUrl}/>
      <MyListItem d1={data.title} d2={data.content} img={data.imgUrl}/> */}
      
      {tags}

    </div>
  )
}
