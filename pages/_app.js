// 1. import `NextUIProvider` component
import {NextUIProvider} from '@nextui-org/react';
import Head from 'next/head';
import React from 'react';
import {initGA, logPageView} from '../lib/analytics';

class MyApp extends React.Component {
    componentDidMount() {
        initGA('G-BLNL1C2C1B');
        logPageView();
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    hi
                </Head>
                <NextUIProvider>
                    <Component {...pageProps} />
                </NextUIProvider>
            </>
        );
    }
}

export default MyApp;
