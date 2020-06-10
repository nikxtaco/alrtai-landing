import React from "react";
import "./features.css";
import img1 from "../../../media/visualisation.svg";
import img2 from "../../../media/risk.svg";
import img3 from "../../../media/detection.svg";

//import Slider from "./features.js"

class App extends React.Component {
  render() {
    return (
      <div>
<div>


<div className="features">
  <h1>Our Value Proposition  <hr/>
</h1>

  <div className="feature1">
  <img src={img1} alt="" className="img"/>
    <div className="text">
      <h2>
      Alerts
      </h2>
      <p>
      We'll find the news before it breaks because we scrape the world's global news feeds to find the story locally before it hits the headlines. We'll cluster news into events to make sure you only get the very first alert, then hit our dashboard to research the story in more depth.
      </p>
    </div>
  </div>

  <div className="feature2">
  <img src={img2} alt="" className="img"/>
    <div className="text">
      <h2>
      Dashboard
      </h2>
      <p>
      Our dashboard will show you curated news based on your scenario, classified by theme. For example if you have a watchlist of 100 companies, we can show you stories based on various types of financial crime: they're scored by severity and grouped into categories like cybercrime, sanctions etc.
      </p>
    </div>
  </div>

  <div className="feature3">
    <img src={img3} alt="" className="img"/>
    <div className="text">
      <h2>
      Niche Markets
      </h2>
      <p>
      We can quickly and easily create scenarios based on niche markets or scenarios. Create and maintain your own: curate your keywords and even scoring methodologies based on news source quality or reliability.
      </p>
    </div>
  </div>
</div>


</div>
</div>
     ) }
}

export default App;