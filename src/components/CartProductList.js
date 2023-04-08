import {useSelector} from 'react-redux';
import {useMemo, useState} from 'react';
import CartProductItem from './CartProductItem';

export default function CartProductList() {
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	const memorizedCartProducts = useMemo(() => cartProducts.map(p =><CartProductItem key={p.id}product={p} />), [cartProducts])
	return (
		<div className="cart-product-list">
			{memorizedCartProducts}
		</div>
	)
}