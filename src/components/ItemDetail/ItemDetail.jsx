import { useCartContext } from "../../context/CartContext";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Badge from "react-bootstrap/esm/Badge";
import ItemCount from "../ItemCount/ItemCount";
import LinkBtn from "../LinkBtn/LinkBtn";
import { badgeColor } from "../Item/badgeColor.js";

const ItemDetail = ({ product }) => {
  const { addItem, availCant, CartList } = useCartContext();

  const quantityToAdd = (qty) => {
    addItem({ ...product, quantity: qty, subtotal: product.price * qty });
  };

  const cantAdded = () => {
    const item = CartList.find((item) => product.id === item.id);
    return (
      item &&
      (item.quantity === product.stock ? (
        <Badge bg="secondary">
          ¡Agregaste la cantidad disponible al carrito!
        </Badge>
      ) : (
        <Badge bg="secondary">
          Tienes {item.quantity} items en el carrito.
        </Badge>
      ))
    );
  };

  return (
    <Card className="rounded-0 bg-light shadow-sm">
      <Row>
        <Col md={6}>
          <div className="ImgCol h-100">
            <img src={product.image} alt={product.name} className="img-fluid rounded-0"/>
          </div>
        </Col>
        <Col md={6} className="p-5">
          <div className="d-flex flex-column h-100">
            <div className="flex-grow-1">
              <LinkContainer to={`/category/${product.category}`}>
                <Card.Link>
                  <Badge pill bg={badgeColor(product)} className="mb-5">
                    {product.category}
                  </Badge>
                </Card.Link>
              </LinkContainer>
              <Card.Title className="mb-3">{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text as={"h4"}>${product.price}.-</Card.Text>
              <Badge bg="secondary" hidden={product.stock > 0}>
                Sin stock
              </Badge>
              <div>{cantAdded()}</div>
            </div>
            <div className="w-50 text-center mx-auto">
              {availCant(product) === 0 ? (
                <div className="d-grid gap-3 text-center">
                  <LinkBtn link="/" text="Volver al catálogo" />
                  <LinkBtn link="/cart" text="Ir al Carrito" />
                </div>
              ) : (
                <ItemCount initial={1} product={product} onAdd={quantityToAdd}/>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
