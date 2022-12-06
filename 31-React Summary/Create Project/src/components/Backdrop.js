import React from 'react'

const Backdrop = (props) => {
    return (
        <div className='backdrop' onClick={props.onClick}></div>
    );
};

export default Backdrop;