import TailiButtonLine from "../UI/TailButtonLine"
import MyToggleBox from "./MyToggleBox"

export default function MyToggle() {

    return (
        //컴포넌트별로 적용되니까 별개로 적용
        <div className="w-10/12 grid grid-cols-2 gap-4">
            <div>
                {/* props 전달 */}
                <MyToggleBox color="blue"/>
            </div>
            <div>
                <MyToggleBox color="orange" />
            </div>
        </div>
    )
}
