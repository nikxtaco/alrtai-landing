import React from "react";

import img from "../../media/logo.svg"

import "./loading.css"

const Fullpage = props => {
  return (
    <div className="loading_page">

<div id="footer">

<img src={img} alt="" className="logo_loading margin_contact"/>
    
    
<p className="saving hello">hello world&nbsp;<span>.</span><span>.</span><span>.</span></p>

</div>         

    </div>
  );
};

export default Fullpage