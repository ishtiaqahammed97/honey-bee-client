import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IrcO3DpibsM5ZGNCIDUTAHRyW2mFkxnWWhO9l5kbnFrqbWMqTpGiotbf6m5NwXML8BmCTsQj71zs1cNMJFieTR5009rVfcdgK');

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm />
    </Elements>
  );
};