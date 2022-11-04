import { useState } from "react";
import MyVerticallyCenteredModal from "../../Components/Modal/Login";

export default function Modaldemo() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <button
        className="bg-primary text-light position-absolute top-50 start-50 translate-middle"
        onClick={() => setModalShow(true)}
      >
        Show Modal
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
