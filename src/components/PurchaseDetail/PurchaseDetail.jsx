import { useCartContext } from "../../context/CartContext";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

const PurchaseDetail = () => {
  const { CartQty, CartTotal, emptyCart, CartList } = useCartContext();

  return (
    <Card bg="secondary" text="white" className="shadow-sm p-5 position-relative rounded-0 text-center">
      <h2 className="mb-4">Detalle de la compra</h2>
      <Card.Text className="mb-0">
        <p>Cantidad de productos: {CartQty}</p>
        <strong className="h4">Total: ${CartTotal}.-</strong>
      </Card.Text>
    </Card>
  );
};

export default PurchaseDetail;