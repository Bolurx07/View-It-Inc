import virtualStyle from './Virtualevent.module.css'
import { useState } from 'react'
import Calendarr from '../../Components/Calendar/Calendarr'
import Navbar from '../../Components/Navbar/Navbar'
import Sidenav from '../../Components/SideNav/Sidenav'
import home from '../../Assets/homeicon.svg'
import channel from '../../Assets/channelicon.svg'
import stream from '../../Assets/streamicon.svg'
import event from '../../Assets/eventicon.svg'
import studio from '../../Assets/studioicon.svg'
import mychannel from '../../Assets/mychanicon.svg'
import subscribe from '../../Assets/subicon.svg'
import library from '../../Assets/libraryicon.svg'
import history from '../../Assets/historyicon.svg'
import setting from '../../Assets/settingicon.svg'
import help from '../../Assets/helpicon.svg'
import video from '../../Assets/videoicon.svg'
import search from '../../Assets/searchicon.svg'

const Virtualevent = () => {
    // Usestate for sidenav component
    const [sidenav] = useState([
        { Image: home, paragraph: "Home", active: false },
        { Image: stream, paragraph: "Live Streams", active: false  },
        { Image: event, paragraph: "Virtual Events", active: true },
        { Image: studio, paragraph: "Studio", active: false },
        { Image: video, paragraph: "My Video", active: false },
        { Image: mychannel, paragraph: "My Channel", active: false },
        { Image: subscribe, paragraph: "Subscription", active: false },
        { Image: library, paragraph: "Library", active: false },
        { Image: history, paragraph: "History", active: false },
        { Image: channel, paragraph: "Channels", active: false },
        { Image: setting, paragraph: "Settings", active: false },
        { Image: help, paragraph: "Help", active: false }
    ])

  return (

    <div className={virtualStyle.maincontainer}>

        {/* Navbar Component */}
        <div className={virtualStyle.navbar}>
            <Navbar />
        </div>

        {/* Sidenav Component */}
        <div className={virtualStyle.mysidenav}>
            {sidenav.map((item) => (
                <Sidenav image={item.Image} paragraph={item.paragraph} active={item.active}/>
            ))}   
        </div>

        {/* Search Input */}
        <div className={virtualStyle.inputcontainer}>
            <input type="search" placeholder='Search' name="search" id={virtualStyle.search} />
            <button className={virtualStyle.button}> <img src={search} alt="icon"/> Search</button>
        </div>


        {/* Sidenav Component */}
        <div className={virtualStyle.calendarcontainer}>
            <Calendarr />
        </div>

               
    </div>
  )
}

export default Virtualevent