import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';

import { store } from "../store/store";
import { Provider } from "react-redux";


function App ({
Component,
pageProps: { session, ...pageProps},
}) {

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
      <Component {...pageProps}/>
      </Provider>
    </SessionProvider>
  )
}

export default App
