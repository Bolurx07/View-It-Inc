import virtualStyle from './Virtualevent.module.css'
import { useState } from 'react'
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

    <div>
        <Navbar />
        <div className={virtualStyle.mysidenav}>
            {sidenav.map((item) => (
                <Sidenav image={item.Image} paragraph={item.paragraph} active={item.active}/>
            ))}
           
        </div>

               
    </div>
  )
}

export default Virtualevent