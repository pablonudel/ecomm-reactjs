import { useCartContext } from "../../context/CartContext";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Badge from "react-bootstrap/esm/Badge";
import CloseButton from "react-bootstrap/esm/CloseButton";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const { removeItem } = useCartContext();

  return (
    <div>
      <Card className="rounded-0 position-relative border mb-2 border-0 shadow-sm cartItem">
        <CloseButton className="position-absolute top-0 end-0 mt-1 me-1" onClick={() => {removeItem(product)}}
        />
        <Row className="align-items-center">
          <Col sm={4} md={3} lg={4} xl={3} xxl={2}>
            <img className="w-100" src={product.image} alt={product.name} />
          </Col>
          <Col sm={8} md={9} lg={8} xl={9} xxl={10}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Precio: ${product.price}.-</Card.Text>
              <Card.Text>
                <Badge bg="secondary" className="me-1">
                  Cantidad: {product.quantity}
                </Badge>
                <Badge bg="secondary">SubTotal: ${product.subtotal}.-</Badge>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CartItem;