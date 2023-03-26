import {useState, useMemo } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import CartProductList from './CartProductList';

export default function CartSidebar(){
	const [className, setClassName] = useState("cart-sidebar closed");
	const cartProductCount = useSelector((state) => state.cart.cartProducts.length);
	const toggleSidebar = () => {
		if (className === "cart-sidebar closed"){
			setClassName("cart-sidebar open");
		} else {
			setClassName("cart-sidebar closed");
		}
	}
	let button;
	let closeLabel;
	let innerLabel;
	useMemo(()=>{
		button = className === "cart-sidebar closed" ? <FontAwesomeIcon icon={faCartShopping} /> : <FontAwesomeIcon icon={faTimes} />;
		closeLabel = className === "cart-sidebar closed" && cartProductCount > 0 ? <i className="product-count">{cartProductCount}</i> : null;
		innerLabel = cartProductCount > 0 ? <i className="product-count">{cartProductCount}</i> : null;
	}, [className, cartProductCount])
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
			</div>
		</div>
	)	
}