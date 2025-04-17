
export default function TailInput({type, id, ref, onFocus}) {
  return (
    <div>
      <input type={type} id={id} ref={ref} onFocus={onFocus}/>
    </div>
  )
}
