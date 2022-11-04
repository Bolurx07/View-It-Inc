import BasicTabs from "../Tabcomponent/Tabcomponent";
import Modal from "react-bootstrap/Modal";

export default function MyVerticallyCenteredModal2 (props) {
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
            Join View-It Inc
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BasicTabs button='Verify Email' comment='Already have an account?' checkbox='I have read and agree to the Terms of Service and Privacy Policy.' />
      </Modal.Body>
    </Modal>
  );
}