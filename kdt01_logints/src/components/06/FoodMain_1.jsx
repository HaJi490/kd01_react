import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"

export default function FoodMain() {
    console.log(fooddata);
    const tags = fooddata.map(item => <FoodCard
                                        key={item["사업장명"]}
                                        obj={item}
                                        />);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {tags};
    </div>
  )
}
