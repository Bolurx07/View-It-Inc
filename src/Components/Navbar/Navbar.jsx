import navbarStyle from './Navbar.module.css'
import logo from '../../Assets/logo.svg'
import notificationicon from '../../Assets/notificon.svg'
import recordicon from '../../Assets/recordicon.svg'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import MyVerticallyCenteredModal from "../../Components/Modal/Login";
import MyVerticallyCenteredModal2 from "../../Components/Modal/Signup";

const Navbar = () => {

    // useState of the modal component for Login
  const [modalShow, setModalShow] = useState(false);


   // useState of the modal component for Signup
   const [modalShow2, setModalShow2] = useState(false);

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

        {/* Modal Tab Component for Signup*/}
        <div>
            <MyVerticallyCenteredModal2
            show={modalShow2}
            onHide={() => setModalShow2(false)}
          />
        </div>

        <div className={navbarStyle.right}>
            <img src={notificationicon} alt="notification" />
            <img src={recordicon} alt="recordicon" />

            {/* Button of the modal component for Login */}
            <button id={navbarStyle.login} onClick={() => setModalShow(true)}>
                  Login
            </button>

            {/* Button of the modal component for Signup */}
            <button id={navbarStyle.signup} onClick={() => setModalShow2(true)}>
                  Sign Up
            </button>
        </div>

    </div>
  )
}

export default Navbar