import React from 'react';
import SideMenu from './SideMenu.tsx';
import { useMenuStore } from './state/useMenuStore.ts';

const Header: React.FC = () => {
    const setMenuOpen = useMenuStore((state) => state.setMenuOpen)

  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <h1 className="text-3xl text-white font-bold text-center">Магазин</h1>
      <div className="relative">
      <button onClick={() => setMenuOpen(true)} className="p-2 bg-blue-500 text-white rounded">
        Открыть меню
      </button>
      <SideMenu />
    </div>
    </header>
  );
};

export default Header;