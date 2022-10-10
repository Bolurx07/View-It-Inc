import tabStyle from './Switchtab.module.css'
// import Uitab from './Components/Tab/Uitab';

const Switchtab = () => {
    // // Function for switching tabs
    // function tabSwitch(loginType, elmnt, color) {
    //     // Hide all elements with class="tabcontent" by default */
    //     var i, tabcontent, tablinks;
    //     tabcontent = document.getElementsByClassName("tabcontent");
    //     for (i = 0; i < tabcontent.length; i++) {
    //       tabcontent[i].style.display = "none";
    //     }
      
    //     // Remove the background color of all tablinks/buttons
    //     tablinks = document.getElementsByClassName("tablink");
    //     for (i = 0; i < tablinks.length; i++) {
    //       tablinks[i].style.backgroundColor = "";
    //     }
      
    //     // Show the specific tab content
    //     document.getElementById(loginType).style.display = "block";
      
    //     // Add the specific color to the button used to open the tab content
    //     elmnt.style.backgroundColor = color;
      
    // }

  return (
        
    <div>
      {/* <Uitab /> */}
        {/* <button className={tabStyle.tablink} onclick={tabSwitch('Phone', this, 'blue')} id={tabStyle.defaultOpen} >Phone</button>
        <button className={tabStyle.tablink} onclick={tabSwitch('email', this, 'blue')}>Email</button>
        <form action="./" type="submit" id={tabStyle.Phone} className={tabStyle.tabcontent}>
            <div>
              <label className={tabStyle.label} htmlFor="phone-no">Phone Number</label>
              <br />
              <br />
              <input type="phone" name="phone-no" placeholder="Phone Number" id={tabStyle.phoneno} />
            </div>
            <br />
            <div>
                <label className={tabStyle.label} htmlFor="">Password</label>
                <br />
                <br />
                <input type="password" name="password" placeholder="Password" id={tabStyle.password} />
            </div>
            <div className={tabStyle.checkboxcontainer}>
              <div>
                <input type="checkbox" name="checkbox" id={tabStyle.checkbox} />
                <span>Remember me</span>
              </div>
                <p>Forgot Password?</p>
            </div>

            <div >
              <button type="submit" id={tabStyle.login}>Login</button>
            </div>

        </form>

        <form action="./" type="submit" id={tabStyle.Phone} className={tabStyle.tabcontent}>
            <div>
              <label className={tabStyle.label} htmlFor="phone-no">Phone Number</label>
              <br />
              <br />
              <input type="phone" name="phone-no" placeholder="Phone Number" id={tabStyle.phoneno} />
            </div>
            <br />
            <div>
                <label className={tabStyle.label} htmlFor="">Password</label>
                <br />
                <br />
                <input type="password" name="password" placeholder="Password" id={tabStyle.password} />
            </div>
            <div className={tabStyle.checkboxcontainer}>
              <div>
                <input type="checkbox" name="checkbox" id={tabStyle.checkbox} />
                <span>Remember me</span>
              </div>
                <p>Forgot Password?</p>
            </div>

            <div >
              <button type="submit" id={tabStyle.login}>Login</button>
            </div>

        </form> */}
    </div>
  )
}

export default Switchtab