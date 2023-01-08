

import React, { useEffect, useState } from 'react';

const Success = ({ message }) => {
    console.log(message);
    const [messageText, setMessage] = useState(null);
    useEffect(() => {
        setMessage(message);
        setTimeout(() => {
            setMessage(null);
        }, 4000);
    }, [message]);
    return (
        <>
            <div className={`py-5 ${!messageText && 'hidden'} `}>
                <div className="px-4 py-2 rounded text-sm bg-green-100 border border-green-200 text-green-600">
                    <div className="flex w-full justify-between items-start">
                        <div className="flex">
                            <svg className="w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3" viewBox="0 0 16 16">
                                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z">
                                </path>
                            </svg>
                            <div>{messageText}</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Success;
