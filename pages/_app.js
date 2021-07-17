import '../styles/globals.scss'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51IvSPMBq5sNbHqP6J56AYkbuw7SrA2sybQFBhs4Nf5WOg3nwFlJVTn4Wc18lzr55T2GVBoEuwc7mUnCIfEPMKK6T00x05Amhvw')

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
