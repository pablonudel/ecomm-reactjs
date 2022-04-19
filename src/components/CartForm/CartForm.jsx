import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import "./CartForm.css";

const CartForm = ({ submit, getCustomerData, validationErrors, ShowAlert }) => {
  return (
    <Card bg="info" className="shadow-sm text-white p-5 rounded-0">
      <Card.Text className="text-center">
        Complete sus datos a continuación para finalizar su compra.
      </Card.Text>
      <Form onSubmit={submit}>
        <Form.Control className="mb-3" type="text" placeholder="Nombre Completo" name="name" onChange={getCustomerData}/>
        <Form.Control className="mb-3" type="text" placeholder="Enter email" name="email" onChange={getCustomerData}/>
        <Form.Control className="mb-3" type="number" placeholder="Teléfono" name="phone" onChange={getCustomerData}/>

        <>
          {validationErrors && ShowAlert && (
            <div className="bg-danger p-3 mb-3 rounded-0">
              <p className="small mb-1">{validationErrors.name}</p>
              <p className="small mb-1">{validationErrors.email}</p>
              <p className="small mb-0">{validationErrors.phone}</p>
            </div>
          )}
        </>

        <div className="d-grid">
          <Button variant="outline-light" className="rounded-0" type="submit">
            Finalizar compra
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default CartForm;