import './App.css';
import Login from './Pages/Login/Login';
import Switchtab from './Components/LoginSwitchTab/Switchtab';
import Calendarr from './Components/Calendar/Calendarr';
import Virtualevent from './Pages/Virtualevent/Virtualevent';

function App() {
  return (
    <div>
      <Virtualevent />
      {/* <Calendarr /> */}
    </div>
  );
}

export default App;
