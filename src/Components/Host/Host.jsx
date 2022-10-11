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
            <div>
                <img className={hostStyle.image} src={hostcode} alt="meetingcode" />
            </div>
            <button id={hostStyle.button}type="submit">Start Meeting</button>
        </div>  

    </div>
  )
}

export default Host