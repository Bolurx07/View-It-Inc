import './App.css';
import Login from './Pages/Login/Login';
import Switchtab from './Components/LoginSwitchTab/Switchtab';
import Calendarr from './Components/Calendar/Calendarr';
import Virtualevent from './Pages/Virtualevent/Virtualevent';
import BasicTabs from './Components/Tab/Uitab';


function App() {
  return (
    <div>
      <BasicTabs />
      {/* <Virtualevent /> */}
      {/* <Calendarr /> */}
    </div>
  );
}

export default App;
