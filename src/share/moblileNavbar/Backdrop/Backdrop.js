import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
    return (
        <div className='nav-backdrop' onClick={props.click}></div>
    )
}

export default Backdrop
