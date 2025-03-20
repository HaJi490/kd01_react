
export default function TailSelect({id, refSel, ops, handleChange}) {
  return (
    //max-w-? #최대너비 xm-auto #하니까 중간으로 옴
  <form className="max-w-md mx-auto mb-3">
    <select id={id} ref={refSel} onChange={handleChange}
    //bg-transparent #투명
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-stone-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option selected>선택</option>
       { ops.map(item => <option key={item} value={item}>{item}</option>)}
    </select>
</form>
  )
}
