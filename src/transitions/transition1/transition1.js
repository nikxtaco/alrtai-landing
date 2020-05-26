import React from "react";
import Globe from "../../components/transition1/globe/globe.js"
//import "../css/sections.css";
import Navbar from "../../components/transition1/navbar/navbar.js"

import "./transition1.css"

import Loading from "../loading/loading.js"

 const Fullpage = props => {

  return (
    <div className="transition1">

    {!props.newsCountReturn && <div><Loading /></div>}

      {props.newsCountReturn && <div>
      <Navbar/>

      <div className="content">

            <h1>
            Tell me something I don't know
            </h1>
    
            <p>
            If you talk to any senior business leader,  heads of sales, traders, risk managers, they'll all say something along these lines. They're fed up with data overload, or even just having too much information. They need insights. Show me what i need to know, don't make me search for it. What are the Top 10 things I should know about today. We use Artificial Intelligence to analyse global news feeds to find news that’s immediately important to you. Whether you’re looking for market moving events, monitoring counterparties or suppliers for pre-deal checks, KYC or ongoing risk management, we can provide up to the minute alerts on your clients, supply chain, even people, countries or specific events. News is filtered, ranked and aggregated, augmenting and automating your capability to review the relevant stories.
            </p>

            <a href="www.google.com">
            <button className="button button1">
            Get Started
            </button>
            </a>

            <button className="button button2">
            Learn More
            </button>
    
    </div>

    <div className="component first-component globe">
      <Globe newsCountReturn={props.newsCountReturn} />
    </div>

    </div>
            }

    </div>
  );
};

export default Fullpage