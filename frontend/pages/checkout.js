import { Col, Row } from "reactstrap";
import Cart from "../components/cart";
import { CheckoutForm } from "../components/checkoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51R2lHtKxzJxAC3pa3NihL637edyHS49Btu5b8mDfrkfJp5IYnLo8pyrVSggPGFGBn5QWnambEyRlRfGFbhLwVrv600KQ8875QQ"
  )
  return (
    <Row>
      <Col style={{ padingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20, fontSize: 20, textAlign: "center" }}>checkout</h1>
        <Cart />
      </Col>
      <Col style={{ padingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
}

export default checkout;