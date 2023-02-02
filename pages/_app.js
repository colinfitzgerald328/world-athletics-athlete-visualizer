// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import ReactGA from 'react-ga';
const TRACKING_ID = "G-BLNL1C2C1B"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
