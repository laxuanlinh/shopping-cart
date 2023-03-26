import {useSelector} from 'react-redux';
import {useMemo} from 'react';
import CartProductItem from './CartProductItem';

export default function CartProductList() {
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	return (
		<div className="cart-product-list">
			{
				cartProducts.map(p =>
					<CartProductItem key={p.id} product={p} />
				)
			}
		</div>
	)
}