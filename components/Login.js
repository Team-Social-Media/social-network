import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Login = () => {
    return (
      <>
        <login >
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/'>Profile</Link>
                </li>
            </ul>
        </login>
        </>
    )
}

export default Login;