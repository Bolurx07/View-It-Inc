import navbarStyle from './Navbar.module.css'
import logo from '../../Assets/logo.svg'

const Navbar = () => {
  return (
    <div>
        <div>
            <img src={logo} alt="logo"/>
            <h1>View It Inc</h1>
        </div>
    </div>
  )
}

export default Navbar