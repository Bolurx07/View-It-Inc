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
        { Image: home, paragraph: "Home" },
        { Image: stream, paragraph: "Live Streams" },
        { Image: event, paragraph: "Virtual Events" },
        { Image: studio, paragraph: "Studio" },
        { Image: video, paragraph: "My Video" },
        { Image: mychannel, paragraph: "My Channel" },
        { Image: subscribe, paragraph: "Subscription" },
        { Image: library, paragraph: "Library" },
        { Image: history, paragraph: "History" },
        { Image: channel, paragraph: "Channels" },
        { Image: setting, paragraph: "Settings" },
        { Image: help, paragraph: "Help" }
    ])

  return (
    <div>
        <Navbar />
        <div>
            {sidenav.map((item) => (
                <Sidenav image={item.Image} paragraph={item.paragraph} />
            ))}
        </div>


    </div>
  )
}

export default Virtualevent