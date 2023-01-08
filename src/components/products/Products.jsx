import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';

const Products = () => {
    const [showLogout, setShowLogout] = useState(false);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const Products = [
        {
            id: 1,
            name: 'Product 1',
            price: 600,
            description: 'description 1'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
            description: 'description 2'
        }
    ];
    const addToCart = (item) => {
        const alreadyExists = cart.filter(value => value.id === item.id);
        if (alreadyExists.length > 0) {
            setCart(() => {
                return cart.map((value) => {
                    if (value.id === item.id) {
                        return {
                            ...value,
                            qty: value.qty + 1
                        }
                    }
                    return value;
                })
            })
        } else {
            setCart((prev) => {
                return [
                    ...prev,
                    { ...item, qty: 1 }
                ]
            })
        }
    }
    const removeQty = (item) => {
        if (item.qty <= 1) {
            setCart((prev) => {
                return prev.filter((value) => value.id !== item.id);
            });
        } else {
            setCart((prev) => {
                return prev.map((value) => {
                    if (value.id === item.id) {
                        return { ...value, qty: value.qty - 1 }
                    }
                    return value;
                });
            });
        }
    }
    return (
        <>
            <div className=''>
                <header className="relative border-b border-b-gray-200">
                    <nav aria-label="Top">
                        <div className="">
                            <div className="py-3 flex items-center justify-between gap-3 ml-14">
                                <div className="hidden lg:flex lg:items-center">
                                    Products
                                </div>
                                <div className="flex items-center justify-end mr-12">
                                    <div className="flex items-center">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex relative" >
                                                <span className="text-gray-600 hover:text-primary flex items-center gap-1 cursor-pointer" onClick={() => setShowLogout(prev => !prev)} >
                                                    <span className="material-icons-outlined">person</span>
                                                </span>
                                                {showLogout && <div className="absolute right-0 top-full border-2 border-black bg-white z-40 w-52">
                                                    <ul className="">
                                                        <li className="border-t-2 border-t-gray-300">
                                                            <NavLink to={'/login'} className="flex p-2 gap-1"><span className="material-icons-outlined">logout</span> <span className="">Sign Out</span></NavLink>
                                                        </li>
                                                    </ul>
                                                </div>}
                                            </div>
                                            <div className="flow-root">
                                                <span className="text-gray-600 hover:text-primary group flex items-center gap-1 relative pr-2 cursor-pointer" onClick={() => setShowCart(prev => !prev)}>
                                                    <span className="material-icons-outlined">shopping_cart</span>
                                                    <span className="absolute right-0 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-[9px] font-medium text-gray-500">{cart.length}</span>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav >
                </header >
                <main>
                    {Products.map((value, index) => {
                        return (
                            <div className='w-auto mx-10 bg-white shadow-lg rounded-md border border-neutral-200 p-6 mb-6 mt-10' key={index}>
                                <div className='flex justify-between'>
                                    <h3 className='font-bold'>{value.name}</h3>
                                    <button className='bg-black text-white rounded-lg px-5 py-1'>${value.price}</button>
                                </div>
                                <div>
                                    {value?.description}
                                </div>
                                <div className='flex justify-end'>
                                    <button className='border border-indigo-600 text-indigo-600 rounded-lg px-5 py-1 hover:text-white hover:bg-indigo-600' onClick={() => addToCart(value)}>Add to Cart</button>
                                </div>
                            </div>
                        );
                    })}
                </main>
            </div>
            {showCart && <Cart cart={cart} addToCart={addToCart} setShowCart={setShowCart} removeQty={removeQty} />}
        </>
    );
};

export default Products;
