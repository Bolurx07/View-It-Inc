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
import Host from '../../Components/Host/Host'
import Join from '../../Components/Join/Join'


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

     // Usestate Hamburger display
     const [doggle, setDoggle] = useState(false)

     const helpDoggle = () => {
       return setDoggle(prevDoggle =>!prevDoggle)
     }
    
    // Usestate for Host & Join Button display
    const [toggle, setToggle] = useState(false)

    const helpToggle = () => {
      return setToggle(prevToggle =>!prevToggle)
    }

    
  return (

    <div >
        <div className={toggle ? virtualStyle.nocontainer : virtualStyle.maincontainer}>
            <div className={virtualStyle.navwrap}>
                {/* Navbar Component */}
                <div className={toggle ? virtualStyle.nonavbar : virtualStyle.navbar}>
                    <Navbar />
                </div>

                    {/* Sidenav Toggle */}
                <div id={virtualStyle.hamburger} onClick={helpDoggle}>
                    {doggle ? <div>&times;</div> :  <div>&#9776;</div>}
                </div>
            </div>

            {/* Sidenav Component */}
            <div className={toggle ? virtualStyle.nosidenav : virtualStyle.mysidenav }>
                <div className={doggle ? virtualStyle.active : virtualStyle.inactive }>
                    {sidenav.map((item) => (
                        <Sidenav image={item.Image} paragraph={item.paragraph} active={item.active}/>
                    ))}   
                </div>
            
            </div>
           

            {/* Search Input */}
            <div className={virtualStyle.inputcontainer}>
                <input type="search" placeholder='Search' name="search" className={toggle ? virtualStyle.nosearch : virtualStyle.search} />
                <button className={virtualStyle.button}> <img src={search} alt="icon"/> Search</button>
            </div>

                {/* Heading */}
            <div className={virtualStyle.header}>
                <div className={virtualStyle.header1}>
                    <p>Meeting</p>
                    <p className={virtualStyle.para}>Podcast</p>
                    <p className={virtualStyle.para}>Webinar</p>
                </div>
                <div className={virtualStyle.header2} >
                    <p onClick={helpToggle}>Host</p>
                    <p>Join</p>
                </div>
            </div>

            <div className={virtualStyle.subheader}>
                <p className={virtualStyle.subheader1}>Upcoming</p>
                <p className={virtualStyle.para}>Previous</p>
            </div>


            {/* Calendar Component */}
            <div className={virtualStyle.calendarcontainer}>
                <Calendarr />
            </div>

        </div>

        {/* Modal for Host & Join Button */}
        <div>
            <div className={toggle ? virtualStyle.active : virtualStyle.noactive }>
                <Host />
            </div>
            <div className={toggle ? virtualStyle.join : virtualStyle.nojoin }>
                {/* <Join /> */}
            </div>
        </div>

    </div>
  )
}

export default Virtualevent