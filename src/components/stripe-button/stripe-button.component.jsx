import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_9kLHkbLOQ7KcaBC5FPuMm1Oj00F9tKfaF8";

    const onToken = token => {
        console.log(token);
        alert("Payment successfull");
    }

    return (
        <StripeCheckout 
        label="Pay Now"
        nane="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;

