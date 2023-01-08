/*Component Name: Cart
Component Functional Details:  Cart .
Created By: PK Kher
Created Date: <Creation Date>
Modified By: PK Kher
Modified Date: <Modified Date> */

import React from 'react';

const Cart = ({ cart, addToCart, setShowCart, removeQty }) => {
    return (
        <>

            <div className="fixed inset-0 bg-slate-900 bg-opacity-95 z-50 transition-opacity"></div>
            <div className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6">
                <div className="bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full">
                    <div className="px-5 py-3 border-b border-neutral-200 ">
                        <div className="flex justify-between items-center">
                            <div className="font-bold text-black">
                                Cart
                            </div>
                            <button type="button"
                                className="text-black hover:text-gray-400"
                                onClick={() => setShowCart(false)}
                            >
                                <div className="sr-only">Close</div>
                                <svg className="w-4 h-4 fill-current">
                                    <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="px-5 pt-4 pb-1">
                        <div className="text-sm">
                            <div className="space-y-2">
                                {cart.map((value, i) => {
                                    return (
                                        <div key={i} className='w-auto mx-2 bg-white shadow-lg rounded-md border border-neutral-200 p-2 mt-1' >
                                            <div className='flex justify-between'>
                                                <h3 className='font-bold'>{value.name}</h3>
                                                <div className='  rounded-lg px-5 py-1'>
                                                    <span className='font-bold text-lg'>${value.price * value.qty}</span> &nbsp;
                                                    <span>(${value.price}/Items)</span>
                                                </div>
                                            </div>
                                            <div>
                                                *{value.qty}
                                            </div>
                                            <div className='flex justify-end mt-2'>
                                                <button className='border border-indigo-600 text-indigo-600 rounded-lg px-5 py-1 hover:text-white hover:bg-indigo-600 ' onClick={() => removeQty(value)}>-</button>
                                                <button className='border border-indigo-600 text-indigo-600 rounded-lg px-5 py-1 hover:text-white hover:bg-indigo-600 ml-2' onClick={() => addToCart(value)}>+</button>
                                            </div>
                                        </div>
                                    );
                                })}
                                {cart.length == 0 && <div className='text-center'>
                                    Cart is Empty
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-4">
                        <div className="flex flex-wrap justify-end space-x-2">
                            <button type="button" className="btn border-gray-300 hover:border-neutral-400 text-gray-500"
                                onClick={() => setShowCart((prev) => !prev)}
                            >
                                Cancel
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default Cart;
