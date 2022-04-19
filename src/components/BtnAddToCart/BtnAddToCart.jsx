import Button from "react-bootstrap/esm/Button";

const BtnAddToCart = ({ handleAction }) => {
  return (
    <Button
      variant="outline-secondary"
      className="rounded-0 btn-sm"
      onClick={handleAction}
    >
      Agregar al carrito
    </Button>
  );
};

export default BtnAddToCart;
