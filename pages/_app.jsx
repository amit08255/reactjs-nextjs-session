import React, { useEffect } from 'react';
import App from 'next/app';
import { sessionStore } from 'stores';
import { StoreContext } from 'storeon/react';

const store = sessionStore();

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
    const appProps = await App.getInitialProps(appContext);

    /*
        setting dummy session data (random string)

        Example - Setting session data from PassportJS ExpressJS
        const serverRequest:any = appContext.req;
        const user = serverRequest.user;
        pageProps.session = user;
    */
    appProps.session = "05022ea9e1f03c28ef937556347b429c";
    return { ...appProps };
}

export default MyApp;
