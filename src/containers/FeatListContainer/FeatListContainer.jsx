import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { collection, getFirestore, query, where } from "firebase/firestore";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/esm/Carousel";
import Button from "react-bootstrap/esm/Button";
import Spinner from "react-bootstrap/esm/Spinner";
import Badge from "react-bootstrap/esm/Badge";
import { getFetch } from "../../firebase/getFetch";
import "./FeatListContainer.css";

const FeatListContainer = () => {
  const [FeatItems, setFeatItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbQuery = query(collection(getFirestore(), "products"), where("featured", "==", true));
    const setter = (resp) => setFeatItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })));
    const finalFn = () => setLoading(false);

    getFetch("collection", dbQuery, setter, null, finalFn);
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center spinnerWrapper">
          <Spinner animation="border" variant="dark" className="d-none d-lg-block align-self-center"/>
        </div>
      ) : (
        <Container>
          <Carousel variant="dark" controls={false}className="d-none d-md-block shadow-sm" fade>
            {FeatItems.map((item) => (
              <Carousel.Item key={item.id}>
                <div className="d-flex flex-md-column flex-xl-row justify-content-xl-center justify-content-xxl-around align-items-center featCarousel">
                  <img className="imgCarousel" src={item.image} alt="First slide"/>
                  <div className="position-relative">
                    <h4 className="position-absolute top-0 end-0">
                      <Badge className="mt-2 rounded-0 bg-info shadow-sm">
                        NUEVO
                      </Badge>
                    </h4>
                    <h2 className="text-black bg-white p-5 mb-0 shadow">
                      {item.name}
                    </h2>
                    <div className="position-absolute top-100 start-50 translate-middle">
                      <LinkContainer to={`/item/${item.id}`}>
                        <Button variant="dark" className="rounded-0 shadow-sm">
                          ¡Conócelo AQUÍ!
                        </Button>
                      </LinkContainer>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      )}
    </>
  );
};

export default FeatListContainer;