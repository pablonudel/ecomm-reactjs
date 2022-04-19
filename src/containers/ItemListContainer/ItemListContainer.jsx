import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getFirestore, query, where } from "firebase/firestore";
import Container from "react-bootstrap/esm/Container";
import Spinner from "react-bootstrap/esm/Spinner";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../firebase/getFetch";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();

  let sortByDate = (arr) => arr.sort((a, b) => b.created_at - a.created_at);

  useEffect(() => {
    const queryCollection = collection(getFirestore(), "products");
    const dbQuery = catId ? query(queryCollection, where("category", "==", catId)) : queryCollection;
    const setter = (resp) => setProducts(resp.docs.map((item) => ({ id: item.id, ...item.data() })));
    const finalFn = () => setLoading(false);

    getFetch("collection", dbQuery, setter, null, finalFn);
  }, [catId]);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="dark" className="align-self-center"/>
        </div>
      ) : (
        <Container className="mt-5 mb-5">
          <h1 className="mb-5 pt-3">{catId ? catId : "Nuestros productos"}</h1>
          <ItemList products={sortByDate(products)} />
        </Container>
      )}
    </>
  );
};

export default ItemListContainer;
