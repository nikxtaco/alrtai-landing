import React from "react"

import "./contact.css"

import img from "./media/logo.svg"

import Navbar from "./components/transition1/navbar/navbar.js"


const ThirdPage = () => (
  <div className="contact_page">

      <Navbar />

      <div id="footer">

<img src={img} alt="" className="logo_contact margin_contact"/>
                
    <div align="center" class="socialbtns">
    <ul>
    <li><a href="https://twitter.com/alrt_ai" class="fa fa-lg fa-twitter"></a></li>
    <li><a href="https://www.instagram.com/alrt.ai/" class="fa fa-lg fa-instagram"></a></li>
    <li><a href="https://www.linkedin.com/company/alrt-ai" class="fa fa-lg fa-linkedin"></a></li>
    </ul>
    </div>
    
<h3>Terms of Use | Privacy Policy</h3>
<h4 style={{'text-transform':'lowercase'}}><a href="mailto:info@alrt.ai" style={{'color':'white'}}>info@alrt.ai</a></h4>
<h4 style={{'text-transform':'lowercase'}}>alrt.ai 2020</h4>
</div>         

</div>

)

export default ThirdPage