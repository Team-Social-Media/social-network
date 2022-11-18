import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/react';
import Header from '../components/Header.js'
import Sidebar from '../components/Sidebar'
import SidebarRight from '../components/SidebarRight'
import Item from '../components/Item'
import Footer from '../components/Footer'


export default function Home() {

  const {data: session, status } = useSession();
  console.log(session)

  const user = session?.user;

  return (
    <>
    <Header/>

      <div className={styles.main}>

        <main>
          <Sidebar />
          <Item />
          <SidebarRight />
        </main>

        <div className={styles.footer}>
          <Footer />
        </div>

      {user && (
        <>
          <img src={session.user.image} height= '50' width ='50'/>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
      
      {!user &&(
        <>
        <button onClick={() => signIn()}>Sign In</button>
        </>
      )}
    
      </div>
    </>

      
  )
}
