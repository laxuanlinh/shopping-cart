import {useState, useMemo, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import CartProductList from './CartProductList';

export default function CartSidebar(){
	const [className, setClassName] = useState("cart-sidebar closed");
	const sum = (total, product) => total+=product.count;
	const cartProductCount = useSelector((state) => state.cart.cartProducts.reduce(sum, 0));
	const sumPrice = (total, product) => total+=product.count*product.price;
	const totalPrice = useSelector((state) => state.cart.cartProducts.reduce(sumPrice, 0));
	const toggleSidebar = () => {
		if (className === "cart-sidebar closed"){
			setClassName("cart-sidebar open");
		} else {
			setClassName("cart-sidebar closed");
		}
	};
	let button;
	let closeLabel;
	let innerLabel;
	useMemo(()=>{
		button = className === "cart-sidebar closed" ? <FontAwesomeIcon icon={faCartShopping} /> : <FontAwesomeIcon icon={faTimes} />;
		closeLabel = className === "cart-sidebar closed" && cartProductCount > 0 ? <i className="product-count">{cartProductCount}</i> : null;
		innerLabel = cartProductCount > 0 ? <i className="product-count">{cartProductCount}</i> : null;
	}, [className, cartProductCount, totalPrice])
	return (
		<div className={className}>
			<div className="close-cart-sidebar" onClick={toggleSidebar}>
				{button}
				{closeLabel}
			</div>
			<div className="cart-sidebar-main">
				<div className="cart-sidebar-header">
					<p>
					<FontAwesomeIcon icon={faCartShopping} />
					&nbsp;&nbsp;&nbsp;&nbsp;Cart
					{innerLabel}
					</p>
				</div>
				<CartProductList />
				{totalPrice.toFixed(2)}
			</div>
		</div>
	)	
}