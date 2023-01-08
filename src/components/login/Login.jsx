
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const loginHandler = (e) => {
        e.preventDefault();
        //you can use formik with yup validation alose
        if (login.email === '') {
            setError((prev) => ({ ...prev, email: "Email is required" }))
        } else {
            setError((prev) => ({ ...prev, email: "" }))

        }
        if (login.password === '') {
            setError((prev) => ({ ...prev, password: "Password is required" }))
        } else {
            setError((prev) => ({ ...prev, password: "" }))

        }
        if (login.email !== '' && login.password !== '') {
            navigate('/products');
        }
    }
    return (
        <>
            <div className="relative items-center ">
                <div className="items-center z-10">
                    <div className="min-h-screen h-full flex justify-center items-center w-full">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                                <div className="sm:mx-auto sm:w-full sm:max-w-md -6 text-center justify-center mb-10">
                                    <h1 className="text-3xl text-gray-800 font-bold mb-6 items-center text-center">
                                        Login
                                    </h1>
                                </div>
                                <form action="#" method='post' onSubmit={loginHandler}>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
                                            <input
                                                name="email"
                                                type="email"
                                                id="email"
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                value={login.email}
                                                onChange={(e) => {
                                                    setLogin(prev => {
                                                        return { ...prev, email: e.target.value }
                                                    })
                                                }}
                                            />
                                            {error?.email && <span className='text-red-500'>{error?.email}</span>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                                            <input
                                                name="password"
                                                type="password"
                                                id="password"
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                value={login.password}
                                                onChange={(e) => {
                                                    setLogin(prev => {
                                                        return { ...prev, password: e.target.value }
                                                    })
                                                }}
                                            />
                                            {error?.password && <span className='text-red-500'>{error?.password}</span>}

                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-6">
                                        <button
                                            className="w-full flex justify-center align-middle py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            disabled=""
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;
