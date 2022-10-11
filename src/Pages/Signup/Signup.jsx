import sgStyle from './Signup.module.css'
import { Link } from 'react-router-dom'
import xicon from "../../Assets/xicon.svg"
import BasicTabs from '../../Components/Tabcomponent/Tabcomponent'


const Signup = () => {
  return (
    <div>
        <section className={sgStyle.logincontainer}>
          <img src={xicon} alt="icon" className={sgStyle.icon} />
          <h1 className={sgStyle.heading}>Join View-It Inc</h1>
          <form action="./" type="submit">
            <div>
                <BasicTabs />
            </div>
            <div className={sgStyle.passworddiv}>
                <label className={sgStyle.label} htmlFor="">Password</label>
                <br />
                <input type="password" name="password" placeholder="Password" id={sgStyle.password} />
            </div>
            <div className={sgStyle.checkboxcontainer}>
                <input type="checkbox" name="checkbox" id={sgStyle.checkbox} />
                <p>I have read and agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
            </div>

            <div >
              <button type="submit" id={sgStyle.signup}>Sign Up</button>
            </div>

          </form>
          <div className={sgStyle.foot}>
            <p>Already have an account?</p>
            <Link to="Login">Login</Link> 
          </div>
        </section>

    </div>
  )
}

export default Signup