import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useITStore } from "../state/useITStore.ts";
import { Button } from "@gravity-ui/uikit"; 
import { FaTimes } from 'react-icons/fa'; 
import { useCartStore } from "../state/useCartStore.ts";

const ProductDetailed = () => {
    const { id } = useParams();
    const product = useITStore((state) => state.products.find((p) => p.id === Number(id)));
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart)
    const handleClose = () => {
        navigate('/products')
    };
    const handleAddToCart = () => {
        if (product){
            if (product.stock > 0){
                addToCart(product)
            }
        }
        
        navigate('/productss')
    }

    if (!product) return <h1 className="text-danger text-center">Продукт не найден</h1>;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg w-full p-6 relative">
                <button 
                    onClick={handleClose} 
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none">
                    <FaTimes size={24} />
                </button>
                
                <div className="flex justify-center mb-4">
                    <img
                        src={product.image} 
                        alt={product.name}
                        className="max-w-full h-auto"
                    />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">{product.name}</h1>
                <p className="text-lg text-gray-600 mb-4 text-center">{product.description}</p>
                <span className="text-2xl font-semibold text-gray-900 mb-4 block text-center">{product.price} $</span>
                <span className="text-2xl font-semibold text-gray-900 mb-4 block text-center">В наличии: {product.stock}</span>
                <Button className="mt-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 w-full" onClick={handleAddToCart}>
                    Добавить в корзину
                </Button>
            </div>
        </div>
    );
};

export default ProductDetailed;