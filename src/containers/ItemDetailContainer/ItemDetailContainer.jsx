import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getFirestore } from "firebase/firestore";
import Container from "react-bootstrap/esm/Container";
import Spinner from "react-bootstrap/esm/Spinner";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../firebase/getFetch";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const dbQuery = doc(getFirestore(), "products", itemId);
    const setter = (resp) => setProduct({ id: resp.id, ...resp.data() });
    const finalFn = () => setLoading(false);

    getFetch("item", dbQuery, setter, null, finalFn);
  }, [itemId]);

  return (
    <Container fluid>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="dark" className="align-self-center"/>
        </div>
      ) : (
        <Container className="mt-5 mb-5">
          <ItemDetail product={product} />
        </Container>
      )}
    </Container>
  );
};

export default ItemDetailContainer;
