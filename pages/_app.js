import '../styles/globals.scss'
import React, {useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { createWrapper } from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './../redux/store';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51IvSPMBq5sNbHqP6J56AYkbuw7SrA2sybQFBhs4Nf5WOg3nwFlJVTn4Wc18lzr55T2GVBoEuwc7mUnCIfEPMKK6T00x05Amhvw')

function MyApp({ Component, pageProps }) {

  return (
    <React.Fragment>
      <Head>
        <title>Didalla</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        /> 
      </Head>
      
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Elements stripe={stripePromise}>
              <Component {...pageProps} />
          </Elements>
        </PersistGate>
      </Provider>
      
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};



const makeStore = () => store;
const wrapper = createWrapper(makeStore);
//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);
// export default withRedux(makeStore)(MyApp);

// function MyApp({ Component, pageProps }) {
//   return (
//       <div>
//         <Elements stripe={stripePromise}>
//           <Component {...pageProps} />
//         </Elements>
//       </div>
//   )
// }

