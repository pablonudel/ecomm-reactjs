import { LinkContainer } from "react-router-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/esm/Badge";
import LinkBtn from "../LinkBtn/LinkBtn";
import { badgeColor } from "./badgeColor.js";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <Col>
      <Card className="h-100 rounded-0 shadow-sm">
        <Card.Img variant="top" className="rounded-0" src={product.image} alt={product.name}/>
        <Card.Body className="itemCardBody">
          <LinkContainer to={`/category/${product.category}`}>
            <Card.Link>
              <Badge pill bg={badgeColor(product)}>
                {product.category}
              </Badge>
            </Card.Link>
          </LinkContainer>
          <Card.Title className="mt-3 text-truncate">{product.name}</Card.Title>
          <div className="d-flex justify-content-between"></div>
          <div className="d-flex justify-content-between align-items-baseline">
            <h5 className="text-center">${product.price}.-</h5>
            <LinkBtn link={`/item/${product.id}`} text="Ver detalle" />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;