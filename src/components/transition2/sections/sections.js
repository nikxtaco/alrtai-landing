import React from "react";
import "./sections.css";
import img1 from "../../../media/financial_data.png"
import img2 from "../../../media/interview.png"
import img3 from "../../../media/analytics.png"
import img4 from "../../../media/prices.png"
import img5 from "../../../media/hire.png"
import img6 from "../../../media/finance.png"

//import Slider from "./sections.js"

class App extends React.Component {
  render() {
    return (
      <div>
<div className="component third-component">
</div>
<div>


<div className="sections">

  <div className="heading">
  <h1>How can we help you?</h1>
  <hr/>
  </div>

  <div className="section1">
    <div className="text">
      <h2 className="section_headings">
      Financial Crime
      </h2>
      <p>
      You're a Risk Manager responsible for a country or portfolio of counterparties. Upload your client list and we'll search the news globally looking for stories about, or related to these entities. We'll classify and score the stories and then the clients based on different buckets such as sanctions, regulatory and governance issues, fraud or anything you want to define. Then we'll prepare a curated real time news dashboard that shows you what you need to know.
      </p>
    </div>
    <img src={img1} alt="" className="img"/>
  </div>

  <div className="section2">
  <img src={img2} alt="" className="img1"/>
    <div className="text">
      <h2 className="section_headings">
      Trading
      </h2>
      <p>
      You're a trader or an energy analyst. You need to watch news for market moving news stories. Catch that refinery explosion story the moment it gets publish in local news before it hits the major news wires. Analyse historical stories correlated to market prices, look at the impact of a major event and how it impacts related entities or markets. Customise based on the products you trade, the analytics you're working on, and how you filter, score & rank the news you want to see: we'll show you things you didn't already know.
<br/><br/>In addition we're working with commodity analytics and news research providers to include premium curated news content into our dashboards so that you can link subscribed content with public news for even more in depth analysis.
      </p>
    </div>
    <img src={img2} alt="" className="img2"/>
  </div>

  <div className="section3">
    <div className="text">
      <h2 className="section_headings">
      Sustainable Finance
      </h2>
      <p>
      If you're looking to see which companies are innovating in the renewable energy space, or looking at regional trends in green investment, we can give you a lens on what the industry trends are. Our models go beyond keyword searching to identify and classify the most relevant news: find people, companies and technologies and look at how they're linked together via graph nodes.
      </p>
    </div>
    <img src={img3} alt="" className="img"/>
  </div>

<div className="section4">
  <img src={img4} alt="" className="img1"/>
    <div className="text">
      <h2 className="section_headings">
      Insurance Pricing
      </h2>
      <p>
      Insurance brokers need to understand trends related to distinct risk types, for example you want to price cybercrime risk in Western Europe - what are the recently trending topics in this area, which countries are most at risk, what sectors are they targeting. Your historical research providers will be months out of date with analytics - we can tell you up to the minute trends based on key sectors you define.
      </p>
    </div>
    <img src={img4} alt="" className="img2"/>
  </div>

  <div className="section5">
    <div className="text">
      <h2 className="section_headings">
      Recruiting
      </h2>
      <p>
      You're a recruiter - you want to know which companies across which sectors are hiring what skillsets. Are banks hiring data scientists, maybe insurance companies are coding models in python, is SAS dead? We can work with you on a use case to tell you where to target your resources.
      </p>
    </div>
    <img src={img5} alt="" className="img"/>
  </div>

  <div className="section6">
  <img src={img6} alt="" className="img1"/>
    <div className="text">
      <h2 className="section_headings">
      Your business is...
      </h2>
      <p>
      ...unique. So many more use cases will fit the platform, the above is only a selection of cases we're working on. Talk to us and we can help you build one that works for your business.      </p>
    </div>
    <img src={img6} alt="" className="img2"/>
  </div>

</div>


</div>
</div>
     ) }
}

export default App;

/*
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min.js'

import Slider from "./slider.js"

class App extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef();
    this.state = true
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      mouseControls: this.vantaRef.true,
      touchControls: this.vantaRef.true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xff3ff5,
  backgroundColor: 0x050618,
      THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }

  render() {
    return (
      <div>
<div className="component third-component" ref={this.vantaRef}>
</div>
<div>

<Slider/>

</div>
</div>
     ) }
}

export default App;
*/