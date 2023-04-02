import {fetchProducts} from '../slices/productsSlice';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

export default function SideFilter(){
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("");
    const handleFilter = (size) => {
        if(size===filter) {
            size="";
        }
        setFilter(size);
        dispatch(fetchProducts(size));
    }
    return (
        <div>
            Sizes:
            <div className="sizes">
                <div className={filter==="XS" ? "size-option on" : "size-option"} onClick={() => handleFilter("XS")}>
                    XS
                </div>
                <div className={filter==="S" ? "size-option on" : "size-option"} onClick={() => handleFilter("S")}>
                    S
                </div>
                <div className={filter==="M" ? "size-option on" : "size-option"} onClick={() => handleFilter("M")}>
                    M
                </div>
                <div className={filter==="ML" ? "size-option on" : "size-option"} onClick={() => handleFilter("ML")}>
                    ML
                </div>
                <div className={filter==="L" ? "size-option on" : "size-option"} onClick={() => handleFilter("L")}>
                    L
                </div>
                <div className={filter==="XL" ? "size-option on" : "size-option"} onClick={() => handleFilter("XL")}>
                    XL
                </div>
                <div className={filter==="XXL" ? "size-option on" : "size-option"} onClick={() => handleFilter("XXL")}>
                    XXL
                </div>
            </div>
        </div>
        
    )
}