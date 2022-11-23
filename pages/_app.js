import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';

import { store } from "../store/store";
import { Provider } from "react-redux";
import { ContactsProvider } from '../context/ContactsProvider';
import { ConversationsProvider } from '../context/ConversationsProvider';
import { SocketProvider } from '../context/SocketProvider';

function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ContactsProvider>
          <SocketProvider username={session?.user?.email}>
            <ConversationsProvider username={session?.user?.email}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ConversationsProvider>
          </SocketProvider>
        </ContactsProvider>
      </Provider>
    </SessionProvider>
  )
}

export default App
