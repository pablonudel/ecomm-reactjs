import Badge from "react-bootstrap/esm/Badge";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { CartCant } = useCartContext();

  return (
    <div className="position-relative">
      <i className="bi bi-cart2 rounded-circle bg-light text-dark p-2"></i>
      {CartCant > 0 && (
        <Badge
          pill
          bg="primary"
          className="position-absolute top-0 start-100 translate-middle"
        >
          {CartCant}
        </Badge>
      )}
    </div>
  );
};

export default CartWidget;
