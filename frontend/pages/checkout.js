import { Col, Row } from "reactstrap";
import Cart from "../components/cart";
import { CheckoutForm } from "../components/checkoutForm";

const checkout = () => {
  return (
    <Row>
      <Col style={{ padingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20, fontSize: 20, textAlign: "center" }}>checkout</h1>
        <Cart />
      </Col>
      <Col style={{ padingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <CheckoutForm />
      </Col>
    </Row>
  );
}

export default checkout;