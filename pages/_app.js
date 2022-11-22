import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';

import { store } from "../store/store";
import { Provider } from "react-redux";


function App ({
Component,
pageProps: { session, ...pageProps},
}) {

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
       <Layout>
          <Component {...pageProps}/>
        </Layout>
      </Provider>
    </SessionProvider>
  )
}

export default App
