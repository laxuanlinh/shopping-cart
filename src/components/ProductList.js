import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slices/productsSlice';

export default function ProductList() {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts(null));
    }, []);
    return(
        <div className="product-list-container">
            <p id="product-count">{products ? products.length : 0} Product(s) found</p>
            <div className="product-list">
                {products ? products.map(p => <ProductItem key={p.id} product={p}/>) : ""}
            </div>
        </div>
    )
}