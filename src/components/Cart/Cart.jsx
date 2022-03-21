import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { CartList, vaciarCart, CartTotal, CartCant } = useCartContext();
  return (
    <Container className="mt-5">
      <Card className="rounded-0 p-5">
        <Card.Title className="text-center mb-5">Carrito</Card.Title>
        {CartList.length === 0 ? (
          <div className="text-center">
            <p>No hay productos en el carrito</p>
            <Link to="/">
              <Button variant="dark">Conoce nuestro productos</Button>
            </Link>
          </div>
        ) : (
          <Row>
            <Col md={8}>
              {CartList.map((producto) => (
                <CartItem key={producto.id} producto={producto} />
              ))}
            </Col>
            <Col md={4}>
              <Card bg="light" className="shadow-sm p-5 position-relative">
                <Card.Title className="mb-4">Detalle de la compra</Card.Title>
                <Card.Text className="mb-0">
                  <p>
                    {CartCant} Productos
                    <br />
                    <strong className="h4">Total: ${CartTotal}.-</strong>
                  </p>
                </Card.Text>
                <Button
                  variant="danger"
                  size="sm"
                  className="position-absolute top-0 end-0 mt-2 me-2"
                  onClick={vaciarCart}
                  hidden={CartList.length === 0}
                >
                  Vaciar Carrito
                </Button>
              </Card>
            </Col>
          </Row>
        )}
      </Card>
    </Container>
  );
};

export default Cart;
