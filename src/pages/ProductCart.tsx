import React from "react";
import { useCartStore } from "../state/useCartStore.ts";
import { Button } from "@gravity-ui/uikit";

const ProductCart = () => {
    
    const cartItems = useCartStore((state) => state.cart)
    const deleteFromCart = useCartStore((state) => state.deleteFromCart)
    const addToCart = useCartStore((state) => state.addToCart)
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.amount, 0);

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Корзина</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">Корзина пуста</p>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {cartItems.map(item => (
                            <li key={item.id} className="flex justify-between items-center p-4 border-b">
                                <div>
                                    <img src={item.image} alt={item.name}/>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-600">Цена: {item.price} $</p>
                                    <p className="text-sm text-gray-600">Количество: {item.amount}</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-lg font-bold mr-4">{item.price * item.amount} $</span>
                                    <Button 
                                        onClick={() => addToCart(item)} 
                                        className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition duration-300"
                                    >
                                        Добавить еще
                                    </Button>
                                    <Button 
                                        onClick={() => deleteFromCart(item.id)} 
                                        className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition duration-300"
                                    >
                                        Удалить
                                    </Button>

                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex justify-between font-bold text-lg">
                        <span>Итого:</span>
                        <span>{totalAmount} $</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductCart;