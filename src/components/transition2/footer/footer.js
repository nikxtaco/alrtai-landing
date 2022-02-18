import React from "react"

import "./footer.css"

import img from "../../../media/logo.svg"

class Footer extends React.Component {
    render(){
        return(
            
            <div id="footer">

                <img src={img} alt="" className="logo_footer"/>

                    <div align="center" className="socialbtns">
                    <ul>
                    <li><a href="https://twitter.com/alrt_ai" className="fa fa-lg fa-twitter"></a></li>
                    <li><a href="https://www.instagram.com/alrt.ai/" className="fa fa-lg fa-instagram"></a></li>
                    <li><a href="https://www.linkedin.com/company/alrt-ai" className="fa fa-lg fa-linkedin"></a></li>
                    </ul>
                    </div>
                    
                <h3>Terms of Use | Privacy Policy</h3>
                <h4 style={{'textTransform':'lowercase'}}><a href="mailto:info@alrt.ai" style={{'color':'white'}}>info@alrt.ai</a></h4>
                <h4 style={{'textTransform':'lowercase'}}>alrt.ai 2020</h4>

            </div>            
        )
    }
}

export default Footer