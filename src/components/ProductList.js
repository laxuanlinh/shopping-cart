import ProductItem from './ProductItem';

export default function ProductList() {
    return(
        <div className="product-list-container">
            <p>16 Product(s) found</p>
            <div className="product-list">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )
}