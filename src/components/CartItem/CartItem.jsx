import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Badge from "react-bootstrap/esm/Badge";
import CloseButton from "react-bootstrap/esm/CloseButton";
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ producto }) => {
  const { quitarItem } = useCartContext();

  return (
    <div>
      <Card className="rounded-0 position-relative border mb-2 border-0 shadow-sm ItemCard">
        <CloseButton
          className="position-absolute top-0 end-0 mt-1 me-1"
          onClick={() => {
            quitarItem(producto);
          }}
        />
        <Row className="align-items-center">
          <Col md={2}>
            <img
              className="w-100"
              src={producto.imagen}
              alt={producto.nombre}
            />
          </Col>
          <Col md={10}>
            <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>Precio: ${producto.precio}.-</Card.Text>
              <Card.Text>
                <Badge bg="secondary" className="me-1">
                  Cantidad: {producto.cantidad}
                </Badge>
                <Badge bg="secondary">SubTotal: ${producto.subtotal}.-</Badge>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CartItem;
