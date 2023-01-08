
import React from 'react';
const Login = () => {
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
                                <form action="#">
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700" for="email">Email Address</label>
                                            <input
                                                name="email"
                                                type="text"
                                                id="email"
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                value=""
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700" for="password">Password</label>
                                            <input
                                                name="password"
                                                type="password"
                                                id="password"
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex items-center justify-between align-middle">
                                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                            <p for="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</p>
                                        </div>
                                        <div className="text-sm"><a className="font-medium text-indigo-600 hover:text-indigo-500" href="/forgot-password">Forgot your password?</a></div>
                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <button
                                            className="w-full flex justify-center align-middle py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-200 hover:bg-indigo-200"
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
