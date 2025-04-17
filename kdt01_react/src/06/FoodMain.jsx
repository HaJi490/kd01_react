import TailButton from "../UI/TailButton";
import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import { useState } from "react";

export default function FoodMain() {
  //console.log(fooddata);
  //tags를 state변수로 생성
  const [tags, setTags] = useState([]);

  let category = fooddata.map(item => item["운영주체 분류"].replaceAll(' ', ''));

  //[] #배열로 만들기# ... #하나하나씩 돌면서 # new Set #중복제거
  category = [...new Set(category)];
  console.log(category);

  const handleCategory = (c) => {
    console.log("handleCategory", c)

    let tm = fooddata.filter(item => item["운영주체 분류"].replaceAll(' ', '') == c)
      .map(item => <FoodCard key={item["사업자명"]} obj={item} />);

    setTags(tm);
    console.log("handleCategory", tm);
  }

  const bts = category.map(bt => <TailButton
    key={bt}
    caption={bt}
    color="lime"
    // bt를 넣으니까 handleCategory의 c에 선택한 분류가 콘솔 나옴
    onClick={() => { handleCategory(bt) }}
  />);

  return (
    <div>
      <div className="flex justify-center items-center mb-2">
        {bts}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tags}
      </div>
    </div>
  )
}
