import lgStyle from './Login.module.css'
import { Link } from 'react'
import xicon from "../../Assets/xicon.svg"

const Login = () => {
  return (
    <div>
      <section>
          <img src={xicon} alt="icon"  />
          <div>
              <p>Phone Number</p>
              <p>Email</p>
          </div>
          <form action="./" type="submit">
            <div>
              <label htmlFor="phone-no">Phone Number</label>
              <input type="phone" name="phone-no" placeholder="Phone Number" id={lgStyle.phoneno} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder="Password" id={lgStyle.password} />
            </div>
            <div>
                <input type="checkbox" name="checkbox" id={lgStyle.checkbox} />
                <span>Remember me</span>
                <p>Forgot Password?</p>
            </div>
            <button type="submit" id={lgStyle.button}>Login</button>
          </form>
          <div>
            <p>Don't have an account?</p>
            <Link to="./"><span>Sign Up</span></Link>
          </div>
      </section>
    </div>
  )
}

export default Login