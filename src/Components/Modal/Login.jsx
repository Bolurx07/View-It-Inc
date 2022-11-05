import { Link } from "react-router-dom";
import xicon from "../../Assets/xicon.svg";
import BasicTabs from "../Tabcomponent/Tabcomponent";
import Modal from "react-bootstrap/Modal";

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
          <h3 className="d-flex align-items-center mt-2 fs-4">
            Login to View-It Inc
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BasicTabs button='Login' comment='Dont have an account?' remember='Remember Me' link='Login' checkbox='Forgot Password?'/>
      </Modal.Body>
    </Modal>
  );
}
