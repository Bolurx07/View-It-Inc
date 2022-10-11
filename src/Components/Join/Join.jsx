import React from 'react'
import joinStyle from './Join.module.css'
import joincode from '../../Assets/joincode.svg'

const Join = () => {
  return (
    <div>
        <div id={joinStyle.hostcontainer}>
            <div>
                <input type="checkbox" name="checkbox" className={joinStyle.checkbox} />
                <p>Start with video On</p>
            </div>
            <div>
                <input type="checkbox" name="checkbox" className={joinStyle.checkbox} />
                <p>Start with video Off</p>
            </div>
            <div>
                <input type="checkbox" name="checkbox" className={joinStyle.checkbox} />
                <p>Share screen only</p>
            </div>
            <p id={joinStyle.fade}>Share invite link</p>
            <div>
                <img className={joinStyle.image} src={joincode} alt="meetingcode" />
            </div>
            <button id={joinStyle.button}type="submit">Join Meeting</button>
        </div>  
    </div>
  )
}

export default Join