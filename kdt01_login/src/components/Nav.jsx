import { Link } from "react-router-dom"
import { useAtom } from "jotai";
import { isLogin } from "../atoms/IsLoginAtom";

import { GoHome } from "react-icons/go";
import { FiLogIn } from "react-icons/fi";

export default function Nav() {
    const [login, setLogin] = useAtom(isLogin);

    //logout누르면 false!!!!!!!!
    const handleClick = ()=>{
        setLogin(false);
        localStorage.setItem('id', '');
    }
  return (
    <div >
        {/* ********** */}
        { localStorage.getItem('id') != '' ? <div className='flex flex-row'>
            <Link to='/' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Home</Link> 
            <Link to='/subway' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Subway</Link> 
            <Link to='/todo' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Todo</Link> 
            <Link to='/login' onClick={handleClick}
            className='px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600 flex justify-center'>Logout</Link>
            </div>
        : <div className='flex flex-row'>
            <Link to='/' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Home</Link> 
            <Link to='/login' 
            className='px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600 flex justify-center'>Login</Link></div>}

        
    </div>
  )
}
