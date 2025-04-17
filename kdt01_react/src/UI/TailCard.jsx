
export default function TailCard({title, subtitle, imgurl, kws}) {
    //keyword 가져오기
    const keyword = kws.split(',');//결과 배열
    //console.log(keyword);


  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full h-48">
            <img className="rounded-t-lg w-full h-full object-cover" src={imgurl} alt={title} />
        </div>
        <div className="p-5">
            <a href="#">
            {/* truncate 한줄 말줄임 */}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                    {title}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
            {/* <a href="#" className="px-3 py-2 "> */}
                {keyword.map(item=><span key={item} className="m-1 px-2 py-1 inline-flex items-center bg-stone-300 rounded-lg hover:bg-stone-100  focus:ring-4 focus:outline-none focus:ring-stone-300
                                                    text-xs font-medium text-center text-stone-900">{item}</span>)}
                {/* <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                </svg> */}
            {/* </a> */}
        </div>
    </div>
    
  )
}
