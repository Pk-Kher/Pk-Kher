
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Messages from "../../common/messages"

const List = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState({ type: "", message: '' });
    useEffect(() => {
        getUsers();
        // Promise.all([getUsers(), getUsers()]).then((response) => {
        //     console.log(response);
        // }).catch(() => {

        // });
    }, []);
    const getUsers = useCallback(() => {
        return axios.get("http://122.170.1.83:8899/api/v1/user").then((response) => {
            if (response?.data?.result) {
                setUsers(response?.data?.result);
            }
        }).catch(() => {

        })

    })
    const deleteUser = (id) => {
        axios.delete(`http://122.170.1.83:8899/api/v1/user/${id}`).then((response) => {
            getUsers();
            setMessage({ type: 'success', message: 'User deleted successfully.' });
            setTimeout(() => {
                setMessage({ type: "", message: '' });
            }, 4000);
        }).catch((error) => {
            setMessage({ type: 'success', message: 'User is deleted.' });
            setTimeout(() => {
                setMessage({ type: "", message: '' });
            }, 4000);
        })
    }
    return (
        <>
            <title>Users</title>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="sm:flex sm:justify-between sm:items-center mb-8">
                    <div className="col-span-full w-full flex justify-between items-center">
                        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
                            Users
                        </h1>
                        <div className="flex flex-wrap sm:auto-cols-max gap-2">
                            <NavLink
                                to={"/user/map"}
                                className="btn bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-md flex"
                            >
                                <span className="material-icons-outlined">map</span>
                                <span className="ml-1">Map</span>
                            </NavLink>
                            <NavLink
                                to={"/user/create"}
                                className="btn bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-md flex"
                            >
                                <span className="material-icons-outlined">add</span>
                                <span className="ml-1">Add User</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Messages {...message} />
                <div className='col-span-full w-full bg-white shadow-xxl rounded-md mb-8 relative'>
                    <div className='overflow-x-auto border-t border-neutral-200'>
                        <table className="table-auto w-full text-sm text-[#191919] overflow-x-scroll overflow-y-hidden">
                            <thead className="text-sm font-bold uppercase text-[#b3b3b3] border-b border-neutral-200">
                                <tr>
                                    <th className={`px-2 first:pl-5 py-4 cursor-pointer w-2`}>#</th>
                                    <th className={`px-2 first:pl-5 py-4 cursor-pointer w-2`} >Image</th>
                                    <th className={`px-2 first:pl-5 py-4 cursor-pointer w-2`}>Name</th>
                                    <th className={`px-2 first:pl-5 py-4 cursor-pointer w-2`}>Mobile Number</th>
                                    <th className={`px-2 first:pl-5 py-4 cursor-pointer w-2`}>Email</th>
                                    <th className={`px-2 first:pl-5 py-4 cursor-pointer w-2`}>Address</th>
                                    <th className={`px-2 first:pl-5 py-4 cursor-pointer w-2`}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className={`px-2 first:pl-5 py-3 w-px`}>{index + 1}</td>
                                            <td className={`px-2 first:pl-5 py-3 w-px`}><img src={value.imageUrl} /></td>
                                            <td className={`px-2 first:pl-5 py-3 w-px`}>{value.name}</td>
                                            <td className={`px-2 first:pl-5 py-3 w-px`}>{value.mobileNo}</td>
                                            <td className={`px-2 first:pl-5 py-3 w-px`}>{value.email}</td>
                                            <td className={`px-2 first:pl-5 py-3 w-px`}>{value.address}</td>
                                            <td className={`px-2 first:pl-5 py-3 w-px`}>
                                                <NavLink to={`/user/edit/${value.id}`}>
                                                    <span className="material-icons-outlined cursor-pointer text-indigo-500">edit</span>
                                                </NavLink>
                                                <span onClick={() => deleteUser(value.id)} className="material-icons-outlined cursor-pointer text-red-500">delete</span>
                                            </td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default List;
