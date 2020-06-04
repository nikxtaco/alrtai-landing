import React from "react";
import MoreInfo from "../../components/transition2/moreinfo/moreinfo.js"
import Sections from "../../components/transition2/sections/sections.js"
import Features from "../../components/transition2/features/features.js"
import Footer from "../../components/transition2/footer/footer.js"

const Fullpage = props => {
  return (
    <div>
      {/* {props.newsCountReturn && <div> */}
    <MoreInfo />
    <Features />
    <Sections />
    <Footer />
    {/* </div>} */}
    </div>
  );
};

export default Fullpage