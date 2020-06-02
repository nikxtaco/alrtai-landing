import React, {useEffect, useState} from "react";

import Transition1 from "./transitions/transition1/transition1.js"
import Transition2 from "./transitions/transition2/transition2.js"

import './App.css';

export default () => {

    const [newsCountReturn, setNewsCountReturn] = useState();


  useEffect(() => { 
        
//   const c =
//   {
//       "success": true,
//       "data": {
//           "ZWE": {
//               "storycount": 186
//           },
//           "SOM": {
//               "storycount": 1
//           },
//           "DEU": {
//               "storycount": 165
//           },
//           "ISR": {
//               "storycount": 274
//           },
//           "KEN": {
//               "storycount": 203
//           },
//           "KAZ": {
//               "storycount": 6
//           },
//           "CHE": {
//               "storycount": 162
//           },
//           "TTO": {
//               "storycount": 90
//           },
//           "TUR": {
//               "storycount": 49
//           },
//           "KHM": {
//               "storycount": 7
//           },
//           "MOZ": {
//               "storycount": 1
//           },
//           "MAR": {
//               "storycount": 78
//           },
//           "ARM": {
//               "storycount": 6
//           },
//           "JPN": {
//               "storycount": 75
//           },
//           "USA": {
//               "storycount": 16205
//           },
//           "DOM": {
//               "storycount": 10
//           },
//           "PAN": {
//               "storycount": 2
//           },
//           "RUS": {
//               "storycount": 765
//           },
//           "CMR": {
//               "storycount": 6
//           },
//           "KWT": {
//               "storycount": 3
//           },
//           "IND": {
//               "storycount": 2082
//           },
//           "PAK": {
//               "storycount": 505
//           },
//           "BGR": {
//               "storycount": 1
//           },
//           "SSD": {
//               "storycount": 4
//           },
//           "LBR": {
//               "storycount": 5
//           },
//           "ITA": {
//               "storycount": 108
//           },
//           "BOL": {
//               "storycount": 26
//           },
//           "NZL": {
//               "storycount": 663
//           },
//           "FIN": {
//               "storycount": 3
//           },
//           "HND": {
//               "storycount": 1
//           },
//           "TKM": {
//               "storycount": 3
//           },
//           "GUM": {
//               "storycount": 2
//           },
//           "DMA": {
//               "storycount": 1
//           },
//           "SVK": {
//               "storycount": 1
//           },
//           "HTI": {
//               "storycount": 1
//           },
//           "ARG": {
//               "storycount": 62
//           },
//           "COL": {
//               "storycount": 20
//           },
//           "DNK": {
//               "storycount": 3
//           },
//           "KGZ": {
//               "storycount": 17
//           },
//           "LSO": {
//               "storycount": 2
//           },
//           "ISL": {
//               "storycount": 1
//           },
//           "ECU": {
//               "storycount": 6
//           },
//           "SAU": {
//               "storycount": 70
//           },
//           "VEN": {
//               "storycount": 541
//           },
//           "SXM": {
//               "storycount": 87
//           },
//           "GBR": {
//               "storycount": 817
//           },
//           "JOR": {
//               "storycount": 7
//           },
//           "ARE": {
//               "storycount": 97
//           },
//           "CHL": {
//               "storycount": 6
//           },
//           "SDN": {
//               "storycount": 7
//           },
//           "BRB": {
//               "storycount": 1
//           },
//           "URY": {
//               "storycount": 5
//           },
//           "AUS": {
//               "storycount": 589
//           },
//           "CRI": {
//               "storycount": 1
//           },
//           "IDN": {
//               "storycount": 60
//           },
//           "MYS": {
//               "storycount": 596
//           },
//           "GHA": {
//               "storycount": 318
//           },
//           "NLD": {
//               "storycount": 6
//           },
//           "SEN": {
//               "storycount": 10
//           },
//           "MMR": {
//               "storycount": 18
//           },
//           "ALB": {
//               "storycount": 1
//           },
//           "QAT": {
//               "storycount": 41
//           },
//           "BHS": {
//               "storycount": 1
//           },
//           "IRQ": {
//               "storycount": 19
//           },
//           "MEX": {
//               "storycount": 183
//           },
//           "GTM": {
//               "storycount": 12
//           },
//           "MLT": {
//               "storycount": 3
//           },
//           "LKA": {
//               "storycount": 15
//           },
//           "MNG": {
//               "storycount": 1
//           },
//           "GIN": {
//               "storycount": 2
//           },
//           "EGY": {
//               "storycount": 11
//           },
//           "LUX": {
//               "storycount": 1
//           },
//           "CYP": {
//               "storycount": 3
//           },
//           "NRU": {
//               "storycount": 219
//           },
//           "OMN": {
//               "storycount": 1
//           },
//           "JAM": {
//               "storycount": 37
//           },
//           "ROU": {
//               "storycount": 4
//           },
//           "AFG": {
//               "storycount": 29
//           },
//           "NPL": {
//               "storycount": 12
//           },
//           "BLR": {
//               "storycount": 30
//           },
//           "NOR": {
//               "storycount": 6
//           },
//           "MRT": {
//               "storycount": 1
//           },
//           "SLE": {
//               "storycount": 6
//           },
//           "CUB": {
//               "storycount": 24
//           },
//           "IRL": {
//               "storycount": 1312
//           },
//           "ESP": {
//               "storycount": 15
//           },
//           "HRV": {
//               "storycount": 2
//           },
//           "AUT": {
//               "storycount": 22
//           },
//           "ZAF": {
//               "storycount": 381
//           },
//           "SYR": {
//               "storycount": 107
//           },
//           "COG": {
//               "storycount": 2
//           },
//           "MUS": {
//               "storycount": 1
//           },
//           "SRB": {
//               "storycount": 5
//           },
//           "CHN": {
//               "storycount": 1120
//           },
//           "THA": {
//               "storycount": 20
//           },
//           "UGA": {
//               "storycount": 2
//           },
//           "LBN": {
//               "storycount": 8
//           },
//           "GIB": {
//               "storycount": 1
//           },
//           "BFA": {
//               "storycount": 1
//           },
//           "GUY": {
//               "storycount": 28
//           },
//           "GRC": {
//               "storycount": 23
//           },
//           "SGP": {
//               "storycount": 1880
//           },
//           "UKR": {
//               "storycount": 61
//           },
//           "POL": {
//               "storycount": 44
//           },
//           "AZE": {
//               "storycount": 61
//           },
//           "CZE": {
//               "storycount": 8
//           },
//           "HKG": {
//               "storycount": 7
//           },
//           "TWN": {
//               "storycount": 185
//           },
//           "DZA": {
//               "storycount": 1
//           },
//           "VNM": {
//               "storycount": 38
//           },
//           "PRT": {
//               "storycount": 29
//           },
//           "CAN": {
//               "storycount": 2937
//           },
//           "TCD": {
//               "storycount": 1
//           },
//           "SWE": {
//               "storycount": 6
//           },
//           "BEL": {
//               "storycount": 71
//           },
//           "PRK": {
//               "storycount": 26
//           },
//           "TZA": {
//               "storycount": 154
//           },
//           "FRA": {
//               "storycount": 62
//           },
//           "BRA": {
//               "storycount": 81
//           },
//           "NGA": {
//               "storycount": 460
//           },
//           "BWA": {
//               "storycount": 1853
//           },
//           "NIC": {
//               "storycount": 3
//           },
//           "BHR": {
//               "storycount": 1
//           },
//           "PER": {
//               "storycount": 13
//           },
//           "HUN": {
//               "storycount": 5
//           },
//           "IRN": {
//               "storycount": 92
//           },
//           "FJI": {
//               "storycount": 1
//           },
//           "AGO": {
//               "storycount": 1
//           },
//           "BLZ": {
//               "storycount": 1
//           },
//           "BGD": {
//               "storycount": 35
//           },
//           "SYC": {
//               "storycount": 2
//           },
//           "PHL": {
//               "storycount": 405
//           },
//           "IOT": {
//               "storycount": 3
//           }
//       }
//   }
  
//   setTimeout(() => {
//     setNewsCountReturn(c.data)
//   }, 3000);

    fetch("https://api.alrt.ai/api/v1/viz/globedata")
    .then(res => res.json())
    .then((res) => { setNewsCountReturn(res.data) ; 
    })
  }, []);


    return (
      <body>
        <Transition1  newsCountReturn={newsCountReturn} />           
        <Transition2  newsCountReturn={newsCountReturn} />
      </body>
    );
  }


// import React from "react";
// import { Pager } from "react-bootstrap";

// import ReactPageScroller from "react-page-scroller";

// import Transition1 from "./transitions/transition1/transition1.js"
// import Transition2 from "./transitions/transition2/transition2.js"

// import './App.css';

// // import FirstComponent from "./pages/FirstComponent";
// // import SecondComponent from "./pages/SecondComponent";
// // import Sections from "./pages/Sections";
// // import Vertical from "./pages/VerticalTimeline.js"
// // import Footer from "./Footer.js"

// class FullPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { currentPage: null };
//   }


//   handlePageChange = number => {
//     this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
//   };

//   getPagesNumbers = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= 9; i++) {
//       pageNumbers.push(
//         <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
//           {i}
//         </Pager.Item>,
//       );
//     }

//     return [...pageNumbers];
//   };

 

//   render() {
//     const pagesNumbers = this.getPagesNumbers();

//     return (
//       <body>
//       <React.Fragment>
//         <ReactPageScroller
//           pageOnChange={this.handlePageChange}
//           customPageNumber={this.state.currentPage}
//         >
        
//         <Transition1 />           
//         <Transition2 />

//         </ReactPageScroller>
        
//          {/* <Pager className="pagination-additional-class" bsSize="large">
//            {pagesNumbers}
//      </Pager> */}
//       </React.Fragment>
//       </body>
//     );
//   }
// }

// export default FullPage;