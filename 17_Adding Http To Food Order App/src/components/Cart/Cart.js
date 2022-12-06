import React , { Fragment , useContext , useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import CheckOut from './CheckOut';

const Cart = (props) => {

    const [isCheckOut , setIsCheckOut] = useState(false);
    const [isSubmitting , setIsSubmitting] = useState(false);
    const [didSubmit , setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({
            ...item,
            amount: 1
        })
    };

    const orderHandler = () => {
        setIsCheckOut(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-http-b8754-default-rtdb.firebaseio.com/order.json' ,{
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    const cartItems = <ul className={classes['cart-items']}>
        {
            cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null , item.id)}
                    onAdd={cartItemAddHandler.bind(null , item)}
                />
            )
        )}</ul>;

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseCart}>
                Close
            </button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
    );

    const cartModalContent = (
        <Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckOut && <CheckOut onConfirm={submitOrderHandler} onCancel={props.onCloseCart} />}
            {!isCheckOut && modalActions}
        </Fragment>
    );

    const isSubmittingModalContent = (<p>Sending Order data...</p>);

    const didSubmitModalContent = (
        <Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onCloseCart}>
                    Close
                </button>
            </div>
        </Fragment>
    );

    return (
        <Modal onCloseCart={props.onCloseCart} >
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;