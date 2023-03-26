import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../slices/cartSlice';

export default function ProductItem(props){
    const [product, setProduct] = useState({...props.product})
    const getBackground = (url) => {
        return "URL("+url+")";
    }
    const [image, setImage] = useState(getBackground(product.frontImage));
    const imageStyle = {
        backgroundImage: image
    };
    const dispatch = useDispatch();
    const handleMouseEnter = () => {
        setImage(getBackground(product.backImage))
    };
    const handleMouseLeave = () => {
        setImage(getBackground(product.frontImage))
    };
    const handleAdd = () => {
        dispatch(addProduct(product));
    }
    return (
        <div className="product-item">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={imageStyle} className="image-container"></div>
            <div className="product-name">
                <p>{product.name}</p>
            </div>
            <div className="product-price">
                <b>${product.price}</b>
            </div>
            <div className="buy-container">
                <button onClick={handleAdd}>Add to cart</button>
            </div>
        </div>
    )
}