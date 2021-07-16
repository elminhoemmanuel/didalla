import '../styles/globals.scss'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51J7IfLCLwwAP7KBP86KI6ZO9Th1dOmZzb4I68X2ObU3eorLETInEbt6gEgSEMGQkLY6SyR8SObvaU2eqRnJVcSME00rCpoM1WM')

function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Elements stripe={stripePromise}>
          <Component {...pageProps} />
        </Elements>
      </div>
  )
}

export default MyApp
