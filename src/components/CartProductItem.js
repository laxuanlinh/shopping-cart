import {useState, useEffect} from 'react';

export default function CartProductItem(props) {
	const [product, setProduct] = useState({...props.product})
	useEffect(() => {
		setProduct({...props.product});
	}, [props.product])
	return (
		<div className="cart-product-item">
			{product.id}
			{product.name}
			{product.count}
		</div>
	)
}