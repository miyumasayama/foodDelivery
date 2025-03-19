import { CardElement } from "@stripe/react-stripe-js"

export const CardSection = (props) => {
  return (
    <div>
      <div>
        <label html="card-element">クレジット/デビットカード</label>
        <div>
          <fieldset>
            <div class="form-row">
              <div id="card-element" style={{ width: "100%" }}>
                <CardElement />
              </div>
              <br />
              {props.errorMessage ? (<div style={{ color: "red" }}>{props.errorMessage}</div>) : null}
              {props.successMessage ? (<div style={{ color: "green" }}>{props.successMessage}</div>) : null}
              <div className="order-button-wrapper">
                <button onClick={() => props.submitOrder()}>注文を確認</button>
              </div>
            </div>

          </fieldset>
        </div>
      </div>
      <style jsx>
        {`
          .order-button-wrapper {
            display: flex;
            width: 100%;
            align-items: flex-end;
            justify-content: flex-end
          }
        `}
      </style>
    </div>
  );
}