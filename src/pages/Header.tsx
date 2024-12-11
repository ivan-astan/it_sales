import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import { GiHamburgerMenu } from 'react-icons/gi'; 
import SideMenu from './SideMenu.tsx';
import { useMenuStore } from '../state/useMenuStore.ts';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const setMenuOpen = useMenuStore((state) => state.setMenuOpen);
    const navigate = useNavigate()
    const handleOpenCart = () => navigate('/cart')
    return (
        <header className="bg-blue-600 p-4 shadow-md flex items-center justify-between">

            <div className="flex items-center">
                <button 
                    onClick={() => setMenuOpen(true)} 
                    className="flex items-center justify-center w-10 h-10 bg-transparent border-2 border-white rounded focus:outline-none hover:bg-blue-500 hover:border-transparent transition duration-300"
                >
                    <GiHamburgerMenu className="text-white text-2xl" />
                </button>
            </div>


            <h1 className="flex-grow text-3xl text-white font-bold text-center" onClick={() => navigate('/products')}>
                Магазин
            </h1>


            <div className="ml-4">
                <FaShoppingCart 
                    className="text-white text-2xl cursor-pointer"
                    onClick={handleOpenCart}
                />
            </div>
            
            <SideMenu />
        </header>
    );
};

export default Header;