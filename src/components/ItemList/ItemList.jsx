import Row from "react-bootstrap/esm/Row";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-3">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </Row>
  );
};

export default ItemList;