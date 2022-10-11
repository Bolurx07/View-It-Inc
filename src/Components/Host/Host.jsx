import React from 'react'
import hostStyle from './Host.module.css'
import hostcode from '../../Assets/hostcode.svg'


const Host = () => {
  return (
    <div>
        <div className={hostStyle.hostcontainer}>
            <div>
                <input type="checkbox" name="checkbox" className={hostStyle.checkbox} />
                <p>Start with video On</p>
            </div>
            <div>
                <input type="checkbox" name="checkbox" className={hostStyle.checkbox} />
                <p>Start with video On</p>
            </div>
            <div>
                <input type="checkbox" name="checkbox" className={hostStyle.checkbox} />
                <p>Share screen only</p>
            </div>
            <p>Share invite link</p>
            <div>
                <img src={hostcode} alt="meetingcode" />
            </div>
            <button classname={hostStyle.button}type="submit">Start Meeting</button>
        </div>  

    </div>
  )
}

export default Host