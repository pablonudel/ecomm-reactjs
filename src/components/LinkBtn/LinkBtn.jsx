import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/esm/Button";

const BtnGoToCart = ({ link, text }) => {
  return (
    <LinkContainer to={link}>
      <Button variant="outline-secondary" className="rounded-0" size="sm">
        {text}
      </Button>
    </LinkContainer>
  );
};

export default BtnGoToCart;
