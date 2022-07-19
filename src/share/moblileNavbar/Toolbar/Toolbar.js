import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import './Toolbar.css';

const Toolbar = (props) => {


    return (
        <div className="mobile-toolbar" onClick={props.drawerClickHandler}>
            <AiOutlineMenu/>
        </div>
    )
}

export default Toolbar
