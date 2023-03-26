import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';

export default function ProductList() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const dataFetch = async () => {
          const data = await (
            await fetch("http://localhost:3004/products")
          ).json();
          setProducts(data);
        };
        dataFetch();
    }, [])
    return(
        <div className="product-list-container">
            <p id="product-count">{products.length} Product(s) found</p>
            <div className="product-list">
                {products.map(p => <ProductItem key={p.id} product={p}/>)}
            </div>
        </div>
    )
}