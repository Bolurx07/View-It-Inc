import './App.css';
import { Route, Routes } from 'react-router-dom';
import Virtualevent from './Pages/Virtualevent/Virtualevent';



function App() {
  return (
    <div>
      {/* <Modaldemo /> */}
      <Routes>
  
        <Route path='/' element={<Virtualevent />}/>
        {/* <Route path='Login' element={<MyVerticallyCenteredModal />}/>
        <Route path='Signup' element={<MyVerticallyCenteredModal />}/> */}
       
      </Routes>
      

    </div>
  );
}

export default App;
