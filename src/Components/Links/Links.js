import React from 'react';
import { Link } from "react-router-dom";

const Links = (props) => {
    const { path, name } = props.route
    return (
        <li className=' list-none'><Link className='hover:text-sky-600 font-semibold' to={path}>{name}</Link></li>
    );
};

export default Links;