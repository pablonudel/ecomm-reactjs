import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import LinkBtn from "../LinkBtn/LinkBtn";
import CartItem from "../CartItem/CartItem";
import CartForm from "../CartForm/CartForm";
import PurchaseDetail from "../PurchaseDetail/PurchaseDetail";
import { getFetch } from "../../firebase/getFetch";

const Cart = () => {
  const { CartList, emptyCart, CartTotal, CartQty } = useCartContext();

  const [CustomerData, setCustomerData] = useState({});
  const [ShowModal, setShowModal] = useState(false);
  const [ShowAlert, setShowAlert] = useState(false);
  const [PurchaseId, setPurchaseId] = useState("");

  const handleClose = () => {
    setShowModal(false);
    setPurchaseId("");
    emptyCart();
  };

  const handleShowModal = () => setShowModal(true);

  const getCustomerData = (e) => {
    const name = e.target.name;
    const userValue = e.target.value;
    setCustomerData({ ...CustomerData, [name]: userValue.toString() });
  };

  const validationErrors = () => {
    let validationMsgs;
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    !CustomerData.name &&
      (validationMsgs = { ...validationMsgs, name: "Nombre requerido" });

    !CustomerData.email
      ? (validationMsgs = { ...validationMsgs, email: "Email requerido" })
      : !CustomerData.email.match(emailPattern) &&
        (validationMsgs = { ...validationMsgs, email: "Email invalido" });

    !CustomerData.phone
      ? (validationMsgs = { ...validationMsgs, phone: "Teléfono requerido" })
      : CustomerData.phone.length < 8 &&
        (validationMsgs = {
          ...validationMsgs,
          phone: "Teléfono mínimo de 8 digitos",
        });

    return validationMsgs;
  };

  const submit = (e) => {
    e.preventDefault();
    !validationErrors() ? generateOrder() : setShowAlert(true);
  };

  const generateOrder = async () => {
    setShowAlert(false);

    let order = {};
    order.customer = CustomerData;
    order.item = CartList.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));
    order.date = new Date();
    order.total = CartTotal;

    const dbQuery = collection(getFirestore(), "orders");
    const setter = (resp) => setPurchaseId(resp.id);
    const finalFn = () => handleShowModal();

    getFetch("add", dbQuery, setter, order, finalFn);

    const queryItems = collection(getFirestore(), "products");
    const queryUpdateStock = query(
      queryItems,
      where(
        documentId(),
        "in",
        CartList.map((i) => i.id)
      )
    );

    const batch = writeBatch(getFirestore());

    await getDocs(queryUpdateStock)
      .then((resp) =>
        resp.docs.forEach((doc) =>
          batch.update(doc.ref, {
            stock:
              doc.data().stock -
              CartList.find((item) => item.id === doc.id).quantity,
          })
        )
      )
      .catch((err) => console.log(err));

    batch.commit();
  };

  return (
    <>
      <Container className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-5 pt-3">
          <h1>Carrito</h1>

          <Button
            className="rounded-0"
            variant="danger"
            size="sm"
            onClick={emptyCart}
            hidden={CartList.length === 0}
          >
            Vaciar Carrito
          </Button>
        </div>
        {CartList.length === 0 ? (
          <Card className="rounded-0 p-5 bg-light shadow-sm">
            <div className="text-center">
              <p className="mb-5">No hay productos en tu carrito</p>
              <LinkBtn link="/" text="Ver nuestro catálogo" />
            </div>
          </Card>
        ) : (
          <Row className="mb-5">
            <Col md={12} lg={7} xl={8} className="mb-3">
              {CartList.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </Col>
            <Col md={12} lg={5} xl={4}>
              <PurchaseDetail />
              <CartForm
                submit={submit}
                getCustomerData={getCustomerData}
                validationErrors={validationErrors()}
                ShowAlert={ShowAlert}
              />
            </Col>
          </Row>
        )}
      </Container>

      <Modal show={ShowModal} backdrop="static">
        <Modal.Body>
          <div className="p-5 text-center">
            <p>¡Gracias por su compra, {CustomerData.name}!</p>
            <h6>Detalle de la compra</h6>
            <p>
              Orden ID: {PurchaseId}
              <br />
              Cantidad de productos: {CartQty}
              <br />
              Precio total: ${CartTotal}.-
            </p>
            <Link to="/">
              <Button variant="secondary" onClick={() => handleClose()}>
                Ver nuestro catálogo
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Cart;
