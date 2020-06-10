import React, {useState, useEffect} from "react";
import Globe from "../../components/transition1/globe/globe.js"
//import "../css/sections.css";
import Navbar from "../../components/transition1/navbar/navbar.js"

import "./transition1.css"

import Loading from "../loading/loading.js"

import { HashLink as HLink } from 'react-router-hash-link';

//Tracker
import ReactGA from 'react-ga';
function initializeTracking(){
ReactGA.initialize('UA-154689535-1');
ReactGA.pageview(window.location.pathname + window.location.search);
}

const options = [
  { value: '0', label: 'Oil' },
  { value: '1', label: 'Risk' },
  { value: '2', label: 'Sustainable Finance' }
]

 const Fullpage = props => {
   
  initializeTracking();

  var [newsCountPerCountry, setNewsCountPerCountry] = useState([]);
//   const [UUIDList, setUUIDList] = useState([]);
//   const [nameList, setNameList] = useState([]);

  
//   const [selectedOption, setSelectedOption] = useState("null");
//   var [rerender, setRerender] = useState(true);
  
//   var counterUUID=0;
//   var counterName=0;
  
// props.newsCountReturn.map(( {uuid,name} ) => {
//  return <p>
//  {UUIDList[counterUUID++] = {uuid}}
//  {nameList[counterName++] = {name}}
//  </p>
//    });

//     var temp;
//     temp=UUIDList[0];
    //console.log(UUIDList[0])
    useEffect(() => {
      
      fetch("https://api.alrt.ai/api/v1/viz/globedata", {
      method: 'POST',
      headers: new Headers({
       'Content-Type': 'application/json', // <-- Specifying the Content-Type
      }),
      body: {
      // "scenario": temp,
      // "timedelta": 7
      } 
      })
      .then((res) => res.json())
      .then((res) => {
        setNewsCountPerCountry(res.data);
      })
      .catch((error) => {
      console.error(error);
      });
  
    }, []);


  //  function handleChange(selectedOption) {
  //   setSelectedOption({ selectedOption });
  //   setRerender(!rerender);

  //   console.log(selectedOption.value)
      
  //       //var temp=UUIDList[selectedOption.value].uuid;
  //       console.log(UUIDList)
  //       fetch("https://api.alrt.ai/api/v1/viz/globedata", {
  //       method: 'POST',
  //       headers: new Headers({
  //        'Content-Type': 'application/json', // <-- Specifying the Content-Type
  //       }),
  //       body: {
  //       // "scenario": "a8563fe4-f348-4a53-9c1c-07f47a5f7660",
  //       // "timedelta": 7
  //       } 
  //       })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setNewsCountPerCountry(res.data);
  //         // console.log(res.data)
  //       })
  //       .catch((error) => {
  //       console.error(error);
  //       });

    
    
  // }

  // useEffect(() => {
  //   if(rerender === true)
  //   {
  //     setRerender(!rerender);
  //   }
  // }, [rerender]);

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     border: '1px solid white',
  //     color: 'white',
  //     padding: 0,
  //     margin:0,
  //   }),
  //   container: () => ({
  //     position: "relative",
  //     textAlign: "left",
  //     padding: 0,
  //     margin:0,
  //   }),
  //   placeholder: () => ({
  //     color: "white",
  //     textAlign: "center",
  //   }),
  //   menu: () => ({
  //     backgroundColor: '#1e021e',
     
  //   }),
  //   indicatorsContainer: () => ({
  //     backgroundColor:'#1e021e',
  //     width: '20vw',
  //   }),
  //   menuPortal: () => ({
  //     backgroundColor:'black',
  //     width: '20vw',
  //   }),
  //   indicatorSeparator: () => ({
  //     backgroundColor:'black',
  //     width: '20vw',
  //   }),
  //   dropdownIndicator: () => ({
  //     backgroundColor:'pink',
  //     width: '2vw',
  //   }),


  //   control: () => ({
  //     // none of react-select's styles are passed to <Control />
  //     maxWidth:'100vw',
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
            <HLink className='white-text' style={{'margin':'5vh 0', 'text-align':'center'}}
                  to="/#moreinfo" >Learn More</HLink>
            </button>
            </div>

            </div>

    
    </div>

    <div className="component first-component globe unfocus">
    {/* {!rerender && // rerender={rerender} */}
<Globe newsCountReturn={props.newsCountReturn} newsCountPerCountry={newsCountPerCountry} className="unfocus"/>
    {/* } */}
    {/* <div className="usecase">
              <Select options={options} placeholder={"Oil"} styles={customStyles} className="usecase" onChange={handleChange}/>
            </div> */}
      {/* <div className="MenuClassName">
      <Dropdown style={{'background-color':'pink'}}  className='myClassName Dropdown-control' menuClassName='myMenuClassName' options={options} onChange={null} value={defaultOption} placeholder="Select an option" />;
        </div> */}
    </div>

    </div>
           
  );
};

export default Fullpage