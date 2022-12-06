import React, { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = (props) => {

    const [showModal, setShowModal] = useState(false);

    const deleteHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false)
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { showModal ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null }
            { showModal && <Backdrop onClick={closeModalHandler} /> }
        </div>
    );
};

export default Todo;