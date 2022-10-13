import React from 'react'
import hostStyle from './Host.module.css'
import hostcode from '../../Assets/hostcode.svg'



const Host = () => {
  return (
    <div>
        <div id={hostStyle.hostcontainer}>
            <div>
                <input type="checkbox" name="checkbox" className={hostStyle.checkbox} />
                <p>Start with video On</p>
            </div>
            <div>
                <input type="checkbox" name="checkbox" className={hostStyle.checkbox} />
                <p>Start with video Off</p>
            </div>
            <div>
                <input type="checkbox" name="checkbox" className={hostStyle.checkbox} />
                <p>Share screen only</p>
            </div>
            <p id={hostStyle.fade}>Share invite link</p>
            {/* <div>
                <img className={hostStyle.image} src={hostcode} alt="meetingcode" />
            </div> */}
            
            <button id={hostStyle.button}type="submit"><a href="https://meet.google.com/new?hs=180&amp;authuser=0" target="_top" title="Start a meeting" aria-label="Start a meeting" draggable="false">Start Meeting</a></button>
            

        </div>  

    </div>
  )
}

export default Host