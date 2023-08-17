import FormatPrice from "../Helper/FormatePrice";

import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext";

const SummaryCartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem} = useCartContext();

 

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor:color,color:color}}></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <p style={{color:"#bf0019"}} title="Aug 20 2023">Deliver by Sun Aug 20 2023 </p>

      {/* //Subtotal */}
      

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} title="Delete"/>
      </div>
    </div>
  );
};
export default SummaryCartItem;