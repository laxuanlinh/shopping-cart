import {useState, useEffect, useMemo} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { removeProduct, addProduct } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';

export default function CartProductItem(props) {
	const [product, setProduct] = useState({...props.product})
	useEffect(() => {
		setProduct({...props.product});
	}, [props.product])
	const dispatch = useDispatch();
	const handleDecrease = () => {
		dispatch(removeProduct(product));
	}
	const handleIncrease = () => {
		dispatch(addProduct(product));
	}
	const memorizedCartItem = useMemo(() => <div className="cart-product-item">
			<div className="cart-product-image-container">
				<img src={product.frontImage} />
			</div>
			<div className="cart-product-info-container">
				{product.name}
				<div className="quantity">
					Quantity: {product.count}
				</div>
			</div>
			<div className="cart-product-right">
				<div className="cart-product-close">
					<FontAwesomeIcon icon={faTimes} />
				</div>
				<div className="cart-product-price">
					$ {product.price}
				</div>
				<div className="cart-product-increase">
					<button className="decrease" onClick={handleDecrease}>-</button>
					<button className="increase" onClick={handleIncrease}>+</button>
				</div>
			</div>
		</div>, [product])
	return (
		<div>{memorizedCartItem}</div>
	)
}