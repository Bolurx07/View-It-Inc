
import { useState } from 'react';
import MyVerticallyCenteredModal from '../../Components/Modal/Modal';
import './Modaldemo.css'


export default function Modaldemo() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
      <button  
        onClick={() => setModalShow(true)}>
        Show Modal
      </button>

  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
  }
