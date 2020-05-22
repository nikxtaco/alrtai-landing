import React from "react";

import "./moreinfo.css"

import img from "../../../media/moreinfo.png"

export default () => {
  return (
    <div>
      <div className="morecontent">
      <div className="moretext">
            <h1>
            Automated News Aggregation
            </h1>
    
            <p>
            We can give you tailored content based on news related to your clients, suppliers or counterparties based on various different risk buckets ranging from financial crime, sanctions, operational risk, compliance, or even build custom models for specific use cases. You supply the keywords and the AI model will take these and identify news related to the topic. We'll score and rank the news related to your interests even if they're related by association. Look for links in the chain and historical trends over time. 
            </p>

            <button className="morebutton morebutton3">
            Demo
            </button>
        </div>

        <img src={img} alt="" className="moreimg"/>
    </div>

    </div>
  );
};