import { useCartContext } from "../../context/CartContext";
import Badge from "react-bootstrap/esm/Badge";

const CartWidget = () => {
  const { CartQty } = useCartContext();

  return (
    <div className="position-relative">
      <i className="bi bi-cart2 rounded-circle bg-secondary text-light p-2"></i>
      {CartQty > 0 && (
        <Badge pill bg="info" className="position-absolute top-0 start-100 translate-middle border border-2 border-light">
          {CartQty}
        </Badge>
      )}
    </div>
  );
};

export default CartWidget;
