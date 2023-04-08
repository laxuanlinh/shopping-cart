import {useState, useMemo, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import CartProductList from './CartProductList';

export default function CartSidebar(){
	const [className, setClassName] = useState("cart-sidebar closed");
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	const sum = (total, product) => total+=product.count;
	const cartProductCount = useMemo(()=> cartProducts.reduce(sum, 0), [cartProducts]);
	const sumPrice = (total, product) => total+=product.count*product.price;
	const totalPrice = useMemo(() => cartProducts.reduce(sumPrice, 0), [cartProducts]);
	const toggleSidebar = () => {
		setClassName("cart-sidebar "+(className === "cart-sidebar closed" ? "open" : "closed"))
	};
	const button = useMemo(() => className === "cart-sidebar closed" ? <FontAwesomeIcon icon={faCartShopping} /> : <FontAwesomeIcon icon={faTimes} />, [className]);
	const closeLabel = useMemo(() => className === "cart-sidebar closed" && cartProductCount > 0 ? <i className="product-count">{cartProductCount}</i> : null, [className, cartProductCount]);
	const innerLabel = useMemo(() => cartProductCount > 0 ? <i className="product-count">{cartProductCount}</i> : null, [className, cartProductCount]);
	const MemorizedCartProducts = useMemo(() => <CartProductList />, [])
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
				{MemorizedCartProducts}
				<div className="total-price">
					<p>Total price: ${totalPrice.toFixed(2)}</p>
					<button>CHECK OUT</button>	
				</div>
				
			</div>
		</div>
	)	
}