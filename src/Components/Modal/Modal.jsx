

import { Link } from 'react-router-dom'
import xicon from "../../Assets/xicon.svg"
import BasicTabs from '../../Components/Tabcomponent/Tabcomponent'
import Modal from 'react-bootstrap/Modal';




export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 >Login to View-It Inc</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form action="./" type="submit">
            <div>
                <BasicTabs />
            </div>
            <div >
                <label htmlFor="">Password</label>
                <br />
                <input type="password" name="password" placeholder="Password"  />
            </div>
            <div >
              <div>
                <input type="checkbox" name="checkbox"  />
                <span >Remember me</span>
              </div>
                <p >Forgot Password?</p>
            </div>

            <div >
              <button type="submit" >Login</button>
            </div>

          </form>
          <div >
            <p> Don't have an account?</p>
            <Link to='/Signup'>Sign Up</Link> 
          </div>
      </Modal.Body>
     
    </Modal>
  )
}

