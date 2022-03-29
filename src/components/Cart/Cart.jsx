import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'

const Cart = () => {
  const { CartList, vaciarCart, CartTotal, CartCant } = useCartContext();

  const [ClientData, setClientData] = useState({});
  const [show, setShow] = useState(false);
  const [IdCompra, setIdCompra] = useState('');

  const handleClose = () => {
    setShow(false)
    setIdCompra('')
    vaciarCart()
  };
  const handleShow = () => setShow(true);

  const getClientData = (e)=>{
    e.preventDefault()
    const name = e.target.name
    const userValue = e.target.value
    setClientData({...ClientData, [name]:userValue })
  };

  const generarOrden = async () => {
    let orden = {}
    orden.cliente = ClientData
    orden.item = CartList.map(item => ({id: item.id, nombre: item.nombre, cantidad:item.cantidad, precio: item.precio}))
    orden.fecha = new Date()
    orden.total = CartTotal

    const db = getFirestore()
    const queryOrdenes = collection(db, 'ordenes')
    addDoc(queryOrdenes, orden)
    .then(resp => setIdCompra(resp.id))
    .catch(err => console.log(err))
    .finally(() => handleShow())

    const queryItems = collection(db, 'productos')
    const queryActualizarStock = query(
      queryItems,
      where( documentId(), 'in', CartList.map(i => i.id))
    )

    const batch = writeBatch(db)

    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(doc => batch.update(doc.ref, {
      stock:doc.data().stock - CartList.find(item => item.id === doc.id).cantidad
    })))
    .catch(err => console.log(err))
    .finally(() => console.log('se actualizó stock'))
    batch.commit()
  };

  return (
    <>
    <Container className="mt-5">
      <Card className="rounded-0 p-5">
        <Card.Title className="text-center mb-5">Carrito</Card.Title>
        {CartList.length === 0 ? (
          <div className="text-center">
            <p>No hay productos en el carrito</p>
            <Link to="/">
              <Button variant="dark">Conoce nuestro productos</Button>
            </Link>
          </div>
        ) : (
          <Row>
            <Col md={8}>
              {CartList.map((producto) => (
                <CartItem key={producto.id} producto={producto} />
              ))}
            </Col>
            <Col md={4}>
              <Card bg="light" className="shadow-sm p-5 position-relative rounded-0">
                <Card.Title className="mb-4">Detalle de la compra</Card.Title>
                <Card.Text className="mb-0">
                    {CartCant} Productos
                    <br />
                    <strong className="h4">Total: ${CartTotal}.-</strong>
                </Card.Text>
                <Button
                  variant="danger"
                  size="sm"
                  className="position-absolute top-0 end-0 mt-2 me-2"
                  onClick={vaciarCart}
                  hidden={CartList.length === 0}
                >
                  Vaciar Carrito
                </Button>
              </Card>
              <Card bg="dark" className="shadow-sm text-white p-5 rounded-0">
                <Card.Text className="text-center">Complete sus datos a continuación para finalizar su compra.</Card.Text>
                  <Form.Control className="mb-3" type="text" placeholder="Nombre Completo" name="nombre" onChange={getClientData}/>
                  <Form.Control className="mb-3" type="email" placeholder="Enter email"  name="email" onChange={getClientData}/>
                  <Form.Control className="mb-3" type="text" placeholder="Teléfono" name="telefono" onChange={getClientData}/>
                  <Button variant="success" type="submit" onClick={generarOrden}>
                    Finalizar compra
                  </Button>
                
              </Card>
            </Col>
          </Row>
        )}
      </Card>
    </Container>

    <Modal show={show} onHide={()=>handleClose()}>
      <Modal.Body closeButton>
        <div className="p-5 text-center">
          <p>¡Gracias por su compra, {ClientData.nombre}!</p>
          <h6>Detalle de la compra</h6>
          <p>Orden ID: {IdCompra}<br/>
          Cantidad de productos: {CartCant}<br/>
          Precio total: ${CartTotal}.-
          </p>
          <Link to='/'>
            <Button variant="secondary" onClick={()=>handleClose()}>
              Volver a la tienda
            </Button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default Cart;
