import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Badge from "react-bootstrap/esm/Badge";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import BtnGoToShop from "../BtnGoToShop/BtnGoToShop";

const ItemDetail = ({ producto }) => {
  const { agregarItem } = useCartContext();

  const quantityToAdd = (cant) => {
    //console.log("Cantidad agregada: " + cant);
    let itemSubtotal = producto.precio * cant;
    agregarItem({ ...producto, cantidad: cant, subtotal: itemSubtotal });
  };

  return (
    <Card className="rounded-0">
      <Row>
        <Col md={6}>
          <div className="ImgCol h-100">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid rounded-0"
            />
          </div>
        </Col>
        <Col md={6} className="p-5">
          <Card.Body>
            <LinkContainer to={`/category/${producto.categoria}`}>
              <Card.Link>
                <Badge pill bg="dark">
                  {producto.categoria}
                </Badge>
              </Card.Link>
            </LinkContainer>
            <Card.Title className="mt-3">{producto.nombre}</Card.Title>
            <Card.Text>{producto.descripcion}</Card.Text>
            <Card.Text as={"h4"}>${producto.precio}.-</Card.Text>
            <Badge bg="secondary" hidden={producto.stock > 0} className="mb-5">
              Sin stock
            </Badge>

            <div className="mt-5">
              {producto.stock === 0 ? (
                <BtnGoToShop />
              ) : (
                <ItemCount
                  initial={1}
                  producto={producto}
                  onAdd={quantityToAdd}
                />
              )}
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
