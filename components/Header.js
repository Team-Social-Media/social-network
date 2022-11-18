import Nav from "./Nav";
import headerStyles from "../styles/Header.module.css"

const Header = () => {
  return (
    <>
      <header>
        <div className={headerStyles.title}>
        <h1>Social Media</h1>
        </div>
        <Nav />
      </header>
    </>
  )

}


export default Header;