

import React from 'react';
import Success from "./Success"
import Danger from "./Danger"
const index = ({ type, ...rest }) => {
    switch (type) {
        case 'success':
            return <Success type={type} {...rest} />;
        case 'danger':
            return <Danger type={type} {...rest} />;
        default:
            break;
    }
};

export default index;
