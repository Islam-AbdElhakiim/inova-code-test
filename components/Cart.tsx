import { FaCartArrowDown } from "react-icons/fa";

const Cart = () => {
    return ( 
        <div className="flex justify-center items-center text-white gap-2">
            <span className="text-2xl ">
            <FaCartArrowDown />

            </span>
            <h2>Cart</h2>

        </div>
     );
}
 
export default Cart;