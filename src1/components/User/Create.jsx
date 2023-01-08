
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as Yup from "yup";
import FormErrorMessage from '../../common/FormErrorMessage';
import Messages from "../../common/messages"
const Create = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [message, setMessage] = useState({ type: '', message: '' });
    const isAddMode = !id;
    useEffect(() => {
        if (!isAddMode) {
            axios.get(`http://122.170.1.83:8899/api/v1/user/${id}`).then((response) => {
                if (response?.data?.result) {
                    setUser(response?.data?.result);
                }
            }).catch(() => { })
        }
    }, []);
    const schema = Yup.object().shape({
        name: Yup.string().required("Name is Required."),
        mobileNo: Yup.number().required("Mobile Number is Required.").min(10, "Please Enter valid mobile no."),
        latitude: Yup.number(),
        longitude: Yup.number(),
        email: Yup.string().required("Email is Required."),
        address: Yup.string().required("Address is Required."),
    });
    const submitHandler = (values, { resetForm }) => {
        if (isAddMode) {
            createUser(values, resetForm);
        } else {
            updateUser(values, resetForm);
        }
    }
    const createUser = (values, resetForm) => {

        var form = new FormData();
        for (var key in values) {
            form.append(key, values[key]);
        }
        axios.post("http://122.170.1.83:8899/api/v1/user", form, {
            "Content-Type": "multipart/form-data",
        }).then((response) => {
            console.log(response);
            setMessage({ type: 'success', message: 'User created successfully.' });
            setTimeout(() => {
                setMessage({ type: "", message: '' });
            }, 4000);
            resetForm({})
        }).catch((error) => {
            setMessage({ type: 'danger', message: 'User is not created.' });
            setTimeout(() => {
                setMessage({ type: "", message: '' });
            }, 4000);
        });
    }
    const updateUser = (values, resetForm) => {
        var form = new FormData();
        for (var key in values) {
            form.append(key, values[key]);
        }
        form.append('id', id);
        axios.put(`http://122.170.1.83:8899/api/v1/user/${id}`, form, {
            "Content-Type": "multipart/form-data",
        }).then((response) => {
            console.log(response);
            setMessage({ type: 'success', message: 'User updated successfully.' });
            setTimeout(() => {
                setMessage({ type: "", message: '' });
            }, 4000);
        }).catch((error) => {
            console.log(error);
            setMessage({ type: 'danger', message: 'User is not updated.' });
            setTimeout(() => {
                setMessage({ type: "", message: '' });
            }, 4000);
        });
    }
    return (
        <>
            <title>{isAddMode ? 'Create User' : 'Edit User'}</title>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    name: user?.name || "",
                    mobileNo: user?.mobileNo || "",
                    email: user?.email || "",
                    address: user?.address || "",
                    image: "",
                    latitude: user?.latitude || '',
                    longitude: user?.longitude || ''
                }}
                onSubmit={submitHandler}
                validationSchema={schema}
                validateOnBlur={true}
            >
                {({ errors, setFieldValue, values }) => {
                    // console.log(values);
                    return (
                        <Form>
                            <div className="sm:flex sm:justify-between sm:items-center mb-8 mt-16 mx-10">
                                <div className="col-span-full w-full flex justify-between items-center">
                                    <div className='col-span-full w-full flex justify-start items-center'>
                                        <NavLink
                                            to={"/users"}
                                            className="btn border-neutral-200 hover:border-neutral-400 text-gray-500 hover:text-gray-700 flex items-center mr-2 active"
                                        >
                                            <span className="material-icons-outlined">west</span>
                                        </NavLink>
                                        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold ml-6">
                                            {isAddMode ? 'Create' : 'Edit'} Users
                                        </h1>
                                    </div>
                                    <button
                                        type='submit'
                                        className="btn bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-md px-4"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                            <Messages {...message} />
                            <div className='w-auto mx-10 bg-white shadow-lg rounded-md border border-neutral-200 p-6 mb-6'>

                                <div className='mb-2'>
                                    <label htmlFor="name">Name</label>
                                    <Field type="text" value={values.name} name="name" className={`block w-full bg-white border border-neutral-200 hover:border-neutral-300 focus:border-neutral-300 focus:ring-0 focus:shadow-lg px-2 py-2 rounded-md`} />
                                    <ErrorMessage name={'name'} component={FormErrorMessage} />
                                </div>
                                <div className='mb-2 col-span-full w-full flex items-center'>
                                    <div className='w-auto'>
                                        <label htmlFor="image">Image</label>
                                        <Field onChange={(event) => {
                                            setFieldValue("image", event.currentTarget.files[0]);
                                        }} type={'file'} value={values.file} name="image" className={`block w-full bg-white border border-neutral-200 hover:border-neutral-300 focus:border-neutral-300 focus:ring-0 focus:shadow-lg px-2 py-2 rounded-md`} />
                                    </div>
                                    <img src={user.imageUrl} className='w-10' />
                                </div>
                                <ErrorMessage name={'image'} component={FormErrorMessage} />
                                <div className='mb-2'>
                                    <label htmlFor="mobileNo">Mobile No.</label>
                                    <Field type="text" name="mobileNo" value={values.mobileNo} className={`block w-full bg-white border border-neutral-200 hover:border-neutral-300 focus:border-neutral-300 focus:ring-0 focus:shadow-lg px-2 py-2 rounded-md`} />
                                    <ErrorMessage name={'mobileNo'} component={FormErrorMessage} />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="email">Email</label>
                                    <Field type="text" name="email" value={values.email} className={`block w-full bg-white border border-neutral-200 hover:border-neutral-300 focus:border-neutral-300 focus:ring-0 focus:shadow-lg px-2 py-2 rounded-md`} />
                                    <ErrorMessage name={'email'} component={FormErrorMessage} />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="address">Address</label>
                                    <Field type="text" name="address" value={values.address} className={`block w-full bg-white border border-neutral-200 hover:border-neutral-300 focus:border-neutral-300 focus:ring-0 focus:shadow-lg px-2 py-2 rounded-md`} />
                                    <ErrorMessage name={'address'} component={FormErrorMessage} />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="latitude">latitude</label>
                                    <Field type="text" name="latitude" value={values.latitude} className={`block w-full bg-white border border-neutral-200 hover:border-neutral-300 focus:border-neutral-300 focus:ring-0 focus:shadow-lg px-2 py-2 rounded-md`} />
                                    <ErrorMessage name={'latitude'} component={FormErrorMessage} />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="longitude">Longitude</label>
                                    <Field type="text" name="longitude" value={values.longitude} className={`block w-full bg-white border border-neutral-200 hover:border-neutral-300 focus:border-neutral-300 focus:ring-0 focus:shadow-lg px-2 py-2 rounded-md`} />
                                    <ErrorMessage name={'longitude'} component={FormErrorMessage} />
                                </div>
                            </div>

                        </Form>
                    )
                }}
            </Formik>

        </>
    );
};

export default Create;
