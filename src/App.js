import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Virtualevent from './Pages/Virtualevent/Virtualevent';
import Signup from './Pages/Signup/Signup';
import Host from './Components/Host/Host';
import Join from './Components/Join/Join';
import Modaldemo from './Pages/Modaldemo/Modaldemo';


function App() {
  return (
    <div>
      <Modaldemo />
      {/* <Routes>
  
        <Route path='/' element={<Virtualevent />}/>
        <Route path='Login' element={<Login />}/>
        <Route path='Signup' element={<Signup />}/>
        <Route></Route>
      </Routes> */}
      

    </div>
  );
}

export default App;
