import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Stateprovider";
import { getTotalValue } from "../reducer";

var sum = 0;

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);

  sum = sum + basket.i;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalValue(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proced to buy</button>
    </div>
  );
}

export default Subtotal;
