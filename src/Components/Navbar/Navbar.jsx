import navbarStyle from './Navbar.module.css'
import logo from '../../Assets/logo.svg'
import notificationicon from '../../Assets/notificon.svg'
import recordicon from '../../Assets/recordicon.svg'

const Navbar = () => {
  return (
    <div className={navbarStyle.navbar}>
        <div className={navbarStyle.left}>
            <img src={logo} alt="logo"/>
            <h1 className={navbarStyle.header}>View It Inc</h1>
        </div>
        <div className={navbarStyle.right}>
            <img src={notificationicon} alt="notification" />
            <img src={recordicon} alt="recordicon" />
        </div>
    </div>
  )
}

export default Navbar