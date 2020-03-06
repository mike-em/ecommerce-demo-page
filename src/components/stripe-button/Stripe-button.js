import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';

const StripeCheckoutButton = ({ price, clearAll }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_sOnliz6rx7pBXuDRurCOwAl100WltyfVRT';

  let history = useHistory();

  const onToken = token => {
    console.log(token);
    clearAll();
    history.push('/');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
