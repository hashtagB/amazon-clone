import React from "react";
import "./Subtotal.css";
import Currencyformat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <Currencyformat
                renderText= {(value) => (
                <div>    
                        <p>
                            Subtotal (0 items) :
                            <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                </div>       
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

        </div>
    );  
}

export default Subtotal
