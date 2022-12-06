import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li>
                    <Link to="/products/p1">A Book</Link>
                </li>
                <li>
                    <Link to="/products/p2">A Pen</Link>
                </li>
                <li>
                    <Link to="/products/p3">A Pencil</Link>
                </li>
            </ul>
        </section>
    );
};

export default Products;