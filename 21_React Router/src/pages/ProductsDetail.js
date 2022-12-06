import React from 'react';
import { useParams } from 'react-router-dom'

const ProductsDetail = () => {

    const params = useParams();

    return (
        <section>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
        </section>
    );
};

export default ProductsDetail;