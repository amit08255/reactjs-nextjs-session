import React, { useEffect } from 'react';
import App from 'next/app';
import { sessionStore } from 'stores';
import { StoreContext } from 'storeon/react';

const store = sessionStore();

const genRanHex = size => [...Array(size)].map(
    () => Math.floor(Math.random() * 16).toString(16)
).join('');

function MyApp({ Component, pageProps, session }) {
    useEffect(() => {
        if(session){
            store.dispatch('setSession', session);
        }
    });

    return (
        <StoreContext.Provider value={store}>
            <Component {...pageProps} />
        </StoreContext.Provider>
    );
}

MyApp.getInitialProps = async (appContext) => {
    let isFromServer = !!appContext.ctx.req;
    const appProps = await App.getInitialProps(appContext);

    /*
        setting dummy session data (random string)

        Example - Setting session data from PassportJS ExpressJS
        const serverRequest = appContext.ctx.req;
        const user = serverRequest.user;
        pageProps.session = user;
    */

    if(isFromServer === true){
        appProps.session = genRanHex(32);
    }
    return { ...appProps };
}

export default MyApp;
