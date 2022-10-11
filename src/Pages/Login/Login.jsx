import lgStyle from './Login.module.css'
import { Link } from 'react-router-dom'
import xicon from "../../Assets/xicon.svg"
import BasicTabs from '../../Components/Tabcomponent/Tabcomponent'

const Login = () => {
  return (
    <div>
      <section className={lgStyle.logincontainer}>
          <img src={xicon} alt="icon" className={lgStyle.icon} />
          <h1 className={lgStyle.heading}>Login to View-It Inc</h1>
          <form action="./" type="submit">
            <div>
                <BasicTabs />
            </div>
            <div className={lgStyle.passworddiv}>
                <label className={lgStyle.label} htmlFor="">Password</label>
                <br />
                <input type="password" name="password" placeholder="Password" id={lgStyle.password} />
            </div>
            <div className={lgStyle.checkboxcontainer}>
              <div>
                <input type="checkbox" name="checkbox" id={lgStyle.checkbox} />
                <span className={lgStyle.span}>Remember me</span>
              </div>
                <p className={lgStyle.span}>Forgot Password?</p>
            </div>

            <div >
              <button type="submit" id={lgStyle.login}>Login</button>
            </div>

          </form>
          <div className={lgStyle.foot}>
            <p>Don't have an account?</p>
            <a href="">Sign Up</a> 
          </div>
      </section>
      
  
    </div>
  )
}

export default Login