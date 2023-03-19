import {useState} from 'react';

export default function ProductItem(){
    const [image, setImage] = useState(`url("https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644-1-product.b6128dd1df3de552cf1b.webp")`)
    const imageStyle = {
        backgroundImage: image
    };
    const handleMouseEnter = () => {
        setImage(`url("https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644-2-product.6df01508d4cdad361b39.webp")`)
    };
    const handleMouseLeave = () => {
        setImage(`url("https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644-1-product.b6128dd1df3de552cf1b.webp")`)
    };
    return (
        <div className="product-item">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={imageStyle} className="image-container"></div>
            <div className="product-name">
                <p>Cropped Stay Groovy off white</p>
            </div>
            <div className="product-price">
                <b>$49.99</b>
            </div>
            <div className="buy-container">
                <button>Add to cart</button>
            </div>
        </div>
    )
}