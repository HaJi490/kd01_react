type nameT= [string, number]; //❗type: 타입 정의가능, 보통 대분자
//type personT = {name:string; age: number;}; //';'로 구분
interface personT {name:string; age: number;};  //interface: 주로 객체 정의할 때 사용, '='안 씀

export default function TsxTest() {
  let name:string = "PNU" //타입 명시
  let age: number = 20;

  let names:string[] = ['Kim', 'Lee'];
  let ages:Array<number> = [10, 30];

  //❗type, interface 사용
  let nameTuple1:[string, number] = ['Kim', 10]; //tuple: 순서를 가지고 다른 타입을 가짐
  let nameTuple2:nameT = ['Lee', 30]; 

  let person1: {name:string, age: number} = {name : 'Kim', age : 10} ; //Object 정의
  let person2: personT = {name : 'Lee', age : 30} ; 

  //❗(매개변수):리턴타입
  //함수 타입 선언1: 인수가 없고 리턴이 없는 경우(void 생략가능)
  const handleOk1=():void=> { 
    alert('안녕하세요.');
  }

  //함수 타입 선언2:  인수가 있고 리턴이 없는 경우
  //인수에 타입 선언
  const handleOk2=(name:string):void=> { 
    alert(`${name}님 안녕하세요.`);
  }

  //함수 타입 선언3: 인수가 있고 리턴이 있는 경우
  //인수에 타입 선언하고 리턴값의 타입도 선언
  const helloStr = (name:string):string =>{
    return `${name}님 안녕하세요.`;
  }

  const handleOk3=(name:string):void=> { //인수가 있을때
    const s:string  = helloStr(name);
    alert(s);
  }
  

  return (
    <div>
      <ul className="list-disc marker:text-purple-300 list-inside">
        <li>이름: {name}, 나이: {age}</li>
        <li>
        {/* 인덱스만 키로 주면 배열변화가 있을때마다 바뀌니까 xx */}
          {names.map((item:string, idx:number) => 
                      <span key={`item${idx}`}>{`  ${item}`}</span>)}
          {ages.map((item:number, idx:number)=>
                      <span key={`item${idx}`}>{`  ${item}`}</span>)} 
        </li>
        <li>
          이름 : {nameTuple1[0]}, 나이{nameTuple1[1]}
          이름 : {nameTuple2[0]}, 나이{nameTuple2[1]}
        </li>
        <li>
          이름 : {person1.name}, 나이{person1.age}
          이름 : {person2.name}, 나이{person2.age}
        </li>
      </ul>
      <div className="grid grid-cols-3">
        <button onClick={handleOk1}
                className="p-1 m-1 bg-purple-500 rounded-md text-white hover:cursor-pointer hover:bg-purple-300  ">
          함수예제1
        </button>
        <button onClick={()=>{handleOk2('Kim')}}
                className="p-1 m-1 bg-purple-500 rounded-md text-white hover:cursor-pointer hover:bg-purple-300  ">
          함수예제2
        </button>
        <button onClick={()=>{handleOk3('Lee')}}
                className="p-1 m-1 bg-purple-500 rounded-md text-white hover:cursor-pointer hover:bg-purple-300  ">
          함수예제3
        </button>
      </div>
    </div>
  )
}
