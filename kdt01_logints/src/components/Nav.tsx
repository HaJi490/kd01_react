import { Link } from "react-router-dom"
import { useAtom } from "jotai";
import { isLogin } from "../atoms/IsLoginAtom";
import { useState } from "react";

import { GoHome } from "react-icons/go";
import { FiLogIn } from "react-icons/fi";

export default function Nav() {
    //Atom 변수
    const [login, setLogin] = useAtom(isLogin);
    
    //**dropdown---------------------------------------------------------------------------
    //state 변수
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () =>{
      setIsOpen(!isOpen);
    }

    const closeDropdown = () =>{
      const target = event?.target as HTMLElement;
      const button = document.getElementById('dropdown');
      const menu = document.getElementById('dropdown-menu');

      if(button && !button.contains(target) && menu && !menu.contains(target)){
        setIsOpen(false);
      }
    }

    //외부클릭시 메뉴 숨기기
    window.addEventListener('click', closeDropdown);

    // ----------------------------------------------------------------------------------------

    //logout누르면 false!!!!!!!!
    const handleClick = ()=>{
        setLogin(false);
        localStorage.setItem('id', '');
    }
  return (
    <div className="relative inline-block ">
        { localStorage.getItem('id') != '' 
        ? <div className='flex flex-row'>
            <Link to='/' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Home</Link> 
            <button type="button" id="dropdown" onClick={toggleDropdown} aria-expanded={isOpen} aria-hashpopup="true"
                    className="w-full rouded-md border border-gray-300 shadow-sm px-4 py-2
                              inline-flex justify-center  
                              bg-white text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none">
              menu
            </button>
            {/* dropdown menu */}
            {/* ul className 이해안됨 */}
            <ul aria-labelledby="dropdown" className={`${isOpen ? 'block' : 'hidden'} absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5`}
                role='menu'  >
              <li>
                <Link to='/clock' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Clock</Link>
              </li>
              <li>
                <Link to='/lotto' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Lotto</Link> 
              </li>
              <li>
                <Link to='/food' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Food</Link> 
              </li>
              <li>
                <Link to='/subway' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Subway</Link> 
              </li>
              <li>
              <Link to='/todo' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 text-gray-600'>Todo</Link>
              </li>
            </ul>
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
