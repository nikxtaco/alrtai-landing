import React, {useState, useEffect} from "react";
import Globe from "../../components/transition1/globe/globe.js"
import Navbar from "../../components/transition1/navbar/navbar.js"
// import Select from 'react-select'
import "./transition1.css"
import { HashLink as HLink } from 'react-router-hash-link';

// const options = [
//   { value: '0', label: 'Oil' },
//   { value: '1', label: 'Risk' },
//   { value: '2', label: 'Sustainable Finance' }
// ]

const Fullpage = props => {

  const c =
  {
      "success": true,
      "data": {
          "ZWE": {
              "storycount": 186
          },
          "SOM": {
              "storycount": 1
          },
          "DEU": {
              "storycount": 165
          },
          "ISR": {
              "storycount": 274
          },
          "KEN": {
              "storycount": 203
          },
          "KAZ": {
              "storycount": 6
          },
          "CHE": {
              "storycount": 162
          },
          "TTO": {
              "storycount": 90
          },
          "TUR": {
              "storycount": 49
          },
          "KHM": {
              "storycount": 7
          },
          "MOZ": {
              "storycount": 1
          },
          "MAR": {
              "storycount": 78
          },
          "ARM": {
              "storycount": 6
          },
          "JPN": {
              "storycount": 75
          },
          "USA": {
              "storycount": 16205
          },
          "DOM": {
              "storycount": 10
          },
          "PAN": {
              "storycount": 2
          },
          "RUS": {
              "storycount": 765
          },
          "CMR": {
              "storycount": 6
          },
          "KWT": {
              "storycount": 3
          },
          "IND": {
              "storycount": 2082
          },
          "PAK": {
              "storycount": 505
          },
          "BGR": {
              "storycount": 1
          },
          "SSD": {
              "storycount": 4
          },
          "LBR": {
              "storycount": 5
          },
          "ITA": {
              "storycount": 108
          },
          "BOL": {
              "storycount": 26
          },
          "NZL": {
              "storycount": 663
          },
          "FIN": {
              "storycount": 3
          },
          "HND": {
              "storycount": 1
          },
          "TKM": {
              "storycount": 3
          },
          "GUM": {
              "storycount": 2
          },
          "DMA": {
              "storycount": 1
          },
          "SVK": {
              "storycount": 1
          },
          "HTI": {
              "storycount": 1
          },
          "ARG": {
              "storycount": 62
          },
          "COL": {
              "storycount": 20
          },
          "DNK": {
              "storycount": 3
          },
          "KGZ": {
              "storycount": 17
          },
          "LSO": {
              "storycount": 2
          },
          "ISL": {
              "storycount": 1
          },
          "ECU": {
              "storycount": 6
          },
          "SAU": {
              "storycount": 70
          },
          "VEN": {
              "storycount": 541
          },
          "SXM": {
              "storycount": 87
          },
          "GBR": {
              "storycount": 817
          },
          "JOR": {
              "storycount": 7
          },
          "ARE": {
              "storycount": 97
          },
          "CHL": {
              "storycount": 6
          },
          "SDN": {
              "storycount": 7
          },
          "BRB": {
              "storycount": 1
          },
          "URY": {
              "storycount": 5
          },
          "AUS": {
              "storycount": 589
          },
          "CRI": {
              "storycount": 1
          },
          "IDN": {
              "storycount": 60
          },
          "MYS": {
              "storycount": 596
          },
          "GHA": {
              "storycount": 318
          },
          "NLD": {
              "storycount": 6
          },
          "SEN": {
              "storycount": 10
          },
          "MMR": {
              "storycount": 18
          },
          "ALB": {
              "storycount": 1
          },
          "QAT": {
              "storycount": 41
          },
          "BHS": {
              "storycount": 1
          },
          "IRQ": {
              "storycount": 19
          },
          "MEX": {
              "storycount": 183
          },
          "GTM": {
              "storycount": 12
          },
          "MLT": {
              "storycount": 3
          },
          "LKA": {
              "storycount": 15
          },
          "MNG": {
              "storycount": 1
          },
          "GIN": {
              "storycount": 2
          },
          "EGY": {
              "storycount": 11
          },
          "LUX": {
              "storycount": 1
          },
          "CYP": {
              "storycount": 3
          },
          "NRU": {
              "storycount": 219
          },
          "OMN": {
              "storycount": 1
          },
          "JAM": {
              "storycount": 37
          },
          "ROU": {
              "storycount": 4
          },
          "AFG": {
              "storycount": 29
          },
          "NPL": {
              "storycount": 12
          },
          "BLR": {
              "storycount": 30
          },
          "NOR": {
              "storycount": 6
          },
          "MRT": {
              "storycount": 1
          },
          "SLE": {
              "storycount": 6
          },
          "CUB": {
              "storycount": 24
          },
          "IRL": {
              "storycount": 1312
          },
          "ESP": {
              "storycount": 15
          },
          "HRV": {
              "storycount": 2
          },
          "AUT": {
              "storycount": 22
          },
          "ZAF": {
              "storycount": 381
          },
          "SYR": {
              "storycount": 107
          },
          "COG": {
              "storycount": 2
          },
          "MUS": {
              "storycount": 1
          },
          "SRB": {
              "storycount": 5
          },
          "CHN": {
              "storycount": 1120
          },
          "THA": {
              "storycount": 20
          },
          "UGA": {
              "storycount": 2
          },
          "LBN": {
              "storycount": 8
          },
          "GIB": {
              "storycount": 1
          },
          "BFA": {
              "storycount": 1
          },
          "GUY": {
              "storycount": 28
          },
          "GRC": {
              "storycount": 23
          },
          "SGP": {
              "storycount": 1880
          },
          "UKR": {
              "storycount": 61
          },
          "POL": {
              "storycount": 44
          },
          "AZE": {
              "storycount": 61
          },
          "CZE": {
              "storycount": 8
          },
          "HKG": {
              "storycount": 7
          },
          "TWN": {
              "storycount": 185
          },
          "DZA": {
              "storycount": 1
          },
          "VNM": {
              "storycount": 38
          },
          "PRT": {
              "storycount": 29
          },
          "CAN": {
              "storycount": 2937
          },
          "TCD": {
              "storycount": 1
          },
          "SWE": {
              "storycount": 6
          },
          "BEL": {
              "storycount": 71
          },
          "PRK": {
              "storycount": 26
          },
          "TZA": {
              "storycount": 154
          },
          "FRA": {
              "storycount": 62
          },
          "BRA": {
              "storycount": 81
          },
          "NGA": {
              "storycount": 460
          },
          "BWA": {
              "storycount": 1853
          },
          "NIC": {
              "storycount": 3
          },
          "BHR": {
              "storycount": 1
          },
          "PER": {
              "storycount": 13
          },
          "HUN": {
              "storycount": 5
          },
          "IRN": {
              "storycount": 92
          },
          "FJI": {
              "storycount": 1
          },
          "AGO": {
              "storycount": 1
          },
          "BLZ": {
              "storycount": 1
          },
          "BGD": {
              "storycount": 35
          },
          "SYC": {
              "storycount": 2
          },
          "PHL": {
              "storycount": 405
          },
          "IOT": {
              "storycount": 3
          }
      }
  }
   
  var [newsCountPerCountry, setNewsCountPerCountry] = useState([]);
  // const [UUIDList, setUUIDList] = useState([]);
  // const [nameList, setNameList] = useState([]);

  // const [selectedOption, setSelectedOption] = useState("null");
  var [rerender, setRerender] = useState(true);
  
  // var counterUUID=0;
  // var counterName=0;
  
  // props.newsCountReturn.map(( {uuid,name} ) => {
  // return <p>
  //  {UUIDList[counterUUID++] = {uuid}}
  //  {nameList[counterName++] = {name}}
  // </p>
  // });
   
  // useEffect(() => {
  //   var temp;
  //   temp=UUIDList[0];
  //   fetch("https://api.alrt.ai/api/v1/viz/globedata", {
  //   method: 'POST',
  //   headers: new Headers({
  //     'Content-Type': 'application/json', // <-- Specifying the Content-Type
  //   }),
  //   body: {
  //   "scenario": temp,
  //   "timedelta": 7
  //   } 
  //   })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     setNewsCountPerCountry(res.data);
  //   })
  //   .catch((error) => {
  //   console.error(error);
  //   });

  // }, [UUIDList]);
  
  useEffect(() => {
    if(rerender === true)
    {
      setRerender(false);
      setNewsCountPerCountry(c.data); //delete this
    }
  }, []); //put rerender in list

  // function handleChange(selectedOption) {
  // setSelectedOption({ selectedOption });
  // setRerender(!rerender);
    
  //   fetch("https://api.alrt.ai/api/v1/viz/globedata", {
  //   method: 'POST',
  //   headers: new Headers({
  //     'Content-Type': 'application/json',
  //   }),
  //   body: {
  //   "scenario": "a8563fe4-f348-4a53-9c1c-07f47a5f7660",
  //   "timedelta": 7
  //   } 
  //   })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     setNewsCountPerCountry(res.data);
  //   })
  //   .catch((error) => {
  //   console.error(error);
  //   });  
  // }

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     color: 'white',
  //     padding: 0,
  //     margin:0,
  //   }),
  //   container: () => ({
  //     position: "relative",
  //     textAlign: "left",
  //     padding: 0,
  //     margin:0,
  //     backgroundColor:'transparent',
  //     border: '1px solid white',
  //   }),
  //   placeholder: () => ({
  //     color: "black",
  //     textAlign: "center",
  //   }),
  //   menu: () => ({
  //     backgroundColor: '#1e021e',
  //   }),
  
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = 'opacity 300ms';
  //     return { ...provided, opacity, transition };
  //   }
  // }

  return (
    <div className="transition1">

      <Navbar/>

      <div className="content">

            <h1>
            Tell me something I don't know
            </h1>
    
            <p>
            If you talk to any senior business leader, head of sales, traders or risk managers, they'll all say they're fed up with data overload. What they need are insights, and we can bring them to you.  We use Artificial Intelligence to analyse global news feeds to find news that’s immediately important to you.        
            </p>

            <div className="two_buttons">

            <div className="login">
            <a href="https://dash.alrt.ai">
            <button className="button button1 button_anim1">
            Log In
            </button>
            </a>
            <a href="https://dash.alrt.ai" className="have_account">Already have an account?</a>
            </div>

            <div className="learn_more">
            <button className="button button2 button_anim2">
            <HLink className='white-text' style={{'margin':'5vh 0', 'textAlign':'center'}}
                  to="/#moreinfo" >Learn More</HLink>
            </button>
            </div>

            </div>
            
      </div>

    <div className="component first-component globe unfocus">
      {/* {!rerender &&  */}
        <Globe newsCountReturn={props.newsCountReturn} newsCountPerCountry={newsCountPerCountry} className="unfocus"/>
      {/* }  also add rerender={rerender} in list*/} 
      
      {/* <div className="usecase">
        <Select options={options} placeholder={"Oil"} styles={customStyles} className="usecase" onChange={handleChange}/>
      </div> */}
    </div>

  </div>
           
  );
};

export default Fullpage