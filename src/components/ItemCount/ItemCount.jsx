import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import InputGroup from "react-bootstrap/esm/InputGroup";
import FormControl from "react-bootstrap/esm/FormControl";
import Button from "react-bootstrap/esm/Button";
import BtnAddToCart from "../BtnAddToCart/BtnAddToCart";
import LinkBtn from "../LinkBtn/LinkBtn";

const ItemCount = ({ initial, onAdd, product }) => {
  const { availCant } = useCartContext();
  const [itemCount, setCounter] = useState(initial);
  const [inputType, setInputType] = useState("actionAdd");

  const handleCount = (op) => {
    op === "add" ? setCounter(itemCount + 1) : setCounter(itemCount - 1)
  };

  const handleAction = () => {
    setInputType("actionGoTo");
    onAdd(itemCount);
  };

  return (
    <div>
      {inputType === "actionAdd" ? (
        <div>
          <InputGroup className="mb-3" size="sm">
            <Button
              variant="outline-secondary"
              className="rounded-0"
              onClick={() => handleCount("sub")}
              disabled={itemCount === initial}
            >
              -
            </Button>
            <FormControl className="text-center" placeholder={itemCount} />
            <Button
              variant="outline-secondary"
              className="rounded-0"
              onClick={() => handleCount("add")}
              disabled={itemCount === availCant(product)}
            >
              +
            </Button>
          </InputGroup>
          <div className="d-grid">
            <BtnAddToCart handleAction={handleAction} />
          </div>
        </div>
      ) : (
        <div className="d-grid gap-3 text-center">
          <LinkBtn link="/" text="Volver al catálogo" />
          <LinkBtn link="/cart" text="Ir al Carrito" />
        </div>
      )}
    </div>
  );
};

export default ItemCount;
