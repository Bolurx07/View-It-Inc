import lgStyle from './Login.module.css'
import { Link } from 'react-router-dom'
import xicon from "../../Assets/xicon.svg"

const Login = () => {
  return (
    <div>
      <section className={lgStyle.logincontainer}>
          <img src={xicon} alt="icon" className={lgStyle.icon} />
          <h1 className={lgStyle.heading}>Login to View-It Inc</h1>
          <div className={lgStyle.buttondiv}>
            <button className={lgStyle.phonebutton}>Phone Number</button>
            <button className={lgStyle.mailbutton}>Email</button>
          </div>
          <form action="./" type="submit">
            <div>
              <label className={lgStyle.label} htmlFor="phone-no">Phone Number</label>
              <br />
              <br />
              <input type="phone" name="phone-no" placeholder="Phone Number" id={lgStyle.phoneno} />
            </div>
            <br />
            <div>
                <label className={lgStyle.label} htmlFor="">Password</label>
                <br />
                <br />
                <input type="password" name="password" placeholder="Password" id={lgStyle.password} />
            </div>
            <div className={lgStyle.checkboxcontainer}>
              <div>
                <input type="checkbox" name="checkbox" id={lgStyle.checkbox} />
                <span>Remember me</span>
              </div>
                <p>Forgot Password?</p>
            </div>

            <div >
              <button type="submit" id={lgStyle.login}>Login</button>
            </div>

          </form>
          <div className={lgStyle.foot}>
            <p>Don't have an account?</p>
            <span>Sign Up</span>
          </div>
      </section>
      
  
    </div>
  )
}

export default Login