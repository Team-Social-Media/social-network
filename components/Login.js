import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () => {

    const {data: session, status } = useSession();
    console.log(session)
  
    const user = session?.user;

    return (
        <>
            <login >
                <div>
                    {user && (
                        <>
                            <img src={session.user.image} height='50' width='50' />
                            <h2>Welcome, {user.name}</h2>
                            <button onClick={() => signOut()}>Sign Out</button>
                        </>
                    )}

                    {!user && (
                        <>
                            <button onClick={() => signIn()}>Sign In</button>
                            {console.log(session)}
                        </>
                    )}
                </div>
            </login>
        </>
    )
}

export default Login;