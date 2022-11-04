import navbarStyle from './Navbar.module.css'
import logo from '../../Assets/logo.svg'
import notificationicon from '../../Assets/notificon.svg'
import recordicon from '../../Assets/recordicon.svg'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import MyVerticallyCenteredModal from "../../Components/Modal/Login";


const Navbar = () => {

    // useState of the modal component for Login
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={navbarStyle.navbar}>
        <div className={navbarStyle.left}>
            <img src={logo} alt="logo"/>
            <h1 className={navbarStyle.header}>View It Inc</h1>
        </div>

        {/* Modal Tab Component for Login*/}
        <div>
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>

        <div className={navbarStyle.right}>
            <img src={notificationicon} alt="notification" />
            <img src={recordicon} alt="recordicon" />
            <button id={navbarStyle.login} onClick={() => setModalShow(true)}>
                  Login
            </button>
            <button id={navbarStyle.signup} onClick={() => setModalShow(true)}>
                  Sign Up
            </button>
        </div>

    </div>
  )
}

export default Navbar