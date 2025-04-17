import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const button = document.getElementById('dropdown');
    const menu = document.getElementById('dropdown-menu');

    if (button && !button.contains(target) && menu && !menu.contains(target)) {
      setIsOpen(false);
    }
  };

  // 드롭다운 외부 클릭 시 메뉴 숨기기
  window.addEventListener('click', closeDropdown);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        id="dropdown"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
      >
        menu
      </button>
      <ul
        id="dropdown-menu"
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        role="menu"
        aria-labelledby="dropdown"
      >
        <li>
          <Link to="/clock" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Clock</Link>
        </li>
        <li>
          <Link to="/lotto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Lotto</Link>
        </li>
        <li>
          <Link to="/food" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Food</Link>
        </li>
        <li>
          <Link to="/subway" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Subway</Link>
        </li>
        <li>
          <Link to="/todo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Todo</Link>
        </li>
      </ul>
    </div>

// React와 TypeScript 사용:

// React.FC를 사용하여 함수형 컴포넌트를 정의합니다.
// useState 훅을 사용하여 드롭다운의 열림 상태를 관리합니다.



// Tailwind CSS 클래스 사용:

// Tailwind CSS의 유틸리티 클래스를 사용하여 버튼과 드롭다운 메뉴의 스타일을 적용합니다.
// hidden과 block 클래스를 사용하여 드롭다운 메뉴의 표시 여부를 제어합니다.



// 이벤트 핸들링:

// toggleDropdown 함수로 드롭다운의 열림/닫힘 상태를 토글합니다.
// closeDropdown 함수는 드롭다운 외부 클릭 시 메뉴를 숨기는 역할을 합니다.
  );
};

export default DropdownMenu;