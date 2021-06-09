import React from "react";
import "./Subtotal.css";
import Currencyformat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <Currencyformat
                renderText= {(value) => (
                <div>    
                        <p>
                            Subtotal ({basket.length} items) :
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                </div>       
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        <button className="subtotal__button">Proceed to Checkout</button>
        </div>
    );  
}

export default Subtotal
