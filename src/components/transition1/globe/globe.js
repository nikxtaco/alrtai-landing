
    import React from 'react';
    import {useState, useRef, useEffect, setState} from 'react'
    import ReactDOM from 'react-dom'
    import Globe from 'react-globe.gl';
    import globeimg from "../../../media/texture4.png"
    import "./globe.css"

    import useWindowDimensions from "./windowDimensions.js"


    const World = props => {

      const globeEl = useRef();
      const [countries, setCountries] = useState({ features: []});
      const [altitude, setAltitude] = useState(0.1);
      const [transitionDuration, setTransitionDuration] = useState(1000);
      const [autoRotate, setAutoRotate] = useState(true);

  
     
    useEffect(() => {
        // load data
        fetch('../datasets/ne_110m_admin_0_countries.geojson').then(res => res.json())
          .then(countries=> {
            setCountries(countries);

            setTimeout(() => {
                setTransitionDuration(2000);
                setAltitude(() => feat =>  //console.log(feat.properties.ISO_A3) 
                //console.log(props.newsCountPerCountry[feat.properties.ISO_A3])
                Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 1e-5)
 //               Math.max(0.1, Math.sqrt(props.newsCountPerCountry.BLR.storycount) * 1e-5)
                
                ); //Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 1e-5)
              }, 3000);
            });
        }, []);
  
        const { height, width } = useWindowDimensions();
  
        useEffect(() => {
         if(width > 750 )
          {// Auto-rotate
          if(autoRotate === true)
          globeEl.current.controls().autoRotate = true;
          else
          globeEl.current.controls().autoRotate = false;
          globeEl.current.controls().autoRotateSpeed = 2;
          //globeEl.current.onZoom = () => {};
          globeEl.current.pointOfView({ altitude: 2.5 }, 5000);
          }
        }, [autoRotate,width]);


        var place = ""

        return (
          <div className="container unfocus" style={{'margin':'0'}}>
            <div className="main " >
              <div className="">
                {/* {console.log(width, height)} */}
                {width > 750 &&
                <Globe
                  showAtmosphere={false}
                  backgroundColor={'#1e021e'} //#0a0b29 //#5B43EF
                  pointsMerge={true}
                  onPolygonClick={({properties : polygon}) => `
                    <b>${polygon.ADMIN}</b><br/>
                  `} 
                  onPolygonHover={(e) => `
                    ${setAutoRotate(true)}
                  `}
                  ref={globeEl}
                  globeImageUrl={globeimg}
                  polygonsData={countries.features}
                  polygonAltitude={altitude}
                  polygonCapColor={() => "rgba(255, 255, 255, " +  Math.max(0.5, (Math.floor(Math.random() * 10 + 1))/10).toString() + ")"}
                  polygonSideColor={() => 'rgba(255, 255, 255 ,0.01)'}
                  polygonLabel={({ properties: d }) => `
                    ${place=d.ISO_A3}
                    
                    <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
                    News Count: ${props.newsCountPerCountry[place] ? props.newsCountPerCountry[place].storycount : 0}
                  `}
                  polygonsTransitionDuration={transitionDuration}
                />
          }
    
              </div>
                {/* {console.log(props.rerender)} */}
            
            </div>
            
            </div>
        )
      };
  

ReactDOM.render(<World />, document.getElementById('root'));

//ReactDOM.render(<Globe pointsData={myData} />, document.getElementById('root'));

export default World;


//     import React from 'react';
//     import {useState, useRef, useEffect, setState} from 'react'
//     import ReactDOM from 'react-dom'
//     import Globe from 'react-globe.gl';
//     import axios from 'axios'
//     import globeimg from "../../../media/texture4.png"
// import "./globe.css"

// import Temp from "./temp.js"

    
//     const World = () => {
//       const globeEl = useRef();
//       const [countries, setCountries] = useState({ features: []});
//       const [altitude, setAltitude] = useState(0.1);
//       const [transitionDuration, setTransitionDuration] = useState(1000);
//       const [autoRotate, setAutoRotate] = useState(true);
//       const [newsCountReturn, setNewsCountReturn] = useState();
  
//   useEffect(() => { //api.alrt.ai/api/v1/viz/globedata
//     fetch("https://api.alrt.ai/api/v1/viz/globedata") //jsonplaceholder.typicode.com/todos/1
//     .then(res => res.json())
//     .then((res) => { setNewsCountReturn(res.data) ; 
//       console.log("done")
//     })

//     //.then(newsCountReturn => setNewsCountReturn(newsCountReturn)) //api.alrt.ai/api/v1/viz/globedata
// //console.log(newsCountReturn.AFG.storycount)
//    // console.log(newsCountReturn.data.IND.storycount)

//     //console.log(deet.data.AFG.storycount)
//   }, []);

//   /*
//   const display_newsCount = newsCount.map(newsCounts => {
//     return (
//       <div>
//         hey {newsCounts.name}
//       </div>
//     )
//   })*/

  
     
//     useEffect(() => {
//         // load data
//         fetch('../datasets/ne_110m_admin_0_countries.geojson').then(res => res.json())
//           .then(countries=> {
//             setCountries(countries);

//             //console.log(countries.features[2].properties.ISO_A3)

//            // countries.features[2].properties.ISO_A3_EH = countries.features[2].properties.ISO_A3;
  
//             setTimeout(() => {
//                 setTransitionDuration(2000);
//                 setAltitude(() => feat => Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 1e-5)); //7e-5
//               }, 3000);
//             });
//         }, []);
  
  
//         useEffect(() => {
//           if(0){
//           // Auto-rotate
//           if(autoRotate === true)
//           globeEl.current.controls().autoRotate = true;
//           else
//           globeEl.current.controls().autoRotate = false;
//           globeEl.current.controls().autoRotateSpeed = 1;
//           //globeEl.current.onZoom = () => {};
//           globeEl.current.pointOfView({ altitude: 2.5 }, 5000);
//           }
//         }, [autoRotate]);

//         useEffect(() => {
          
//         }, [newsCountReturn]);
            
//         return (
//           <div className="container" style={{'margin':'0'}}>
//             <div onMouseLeave={() => {setAutoRotate(true) }} className="main" >
//               <div>
//               <Temp responses={newsCountReturn}/>
//               {newsCountReturn && 
//                 <Globe
//                   showAtmosphere={false}
//                   backgroundColor={'#1e021e'} //#0a0b29 //#5B43EF
//                   pointsMerge={false}
//                   onPolygonClick={({properties : polygon}) => `
//                     <b>${polygon.ADMIN}</b><br/>
//                   `} 
//                   onPolygonHover={(e) => `
//                     ${setAutoRotate(true)}
//                   `}
//                   onMouseLeave={() => setAutoRotate(true)}
//                   ref={globeEl}
//                   globeImageUrl={globeimg}
//                   polygonsData={countries.features}
//                   polygonAltitude={altitude}
//                   polygonCapColor={() => "rgba(255, 255, 255, " +  Math.max(0.5, (Math.floor(Math.random() * 10 + 1))/10).toString() + ")"}
//                   polygonSideColor={() => 'rgba(255, 255, 255 ,0.01)'}
//                   polygonLabel={({ properties: d }) => `
//                     <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
//                     News Count: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i> 
//                     n: 
//                     ${<Temp responses={newsCountReturn}/>}
//                   `}
//                   polygonsTransitionDuration={transitionDuration}
//                 />
//               }
//               </div>
            
//             </div>
//             </div>
//         )
//       };
  

// ReactDOM.render(<World />, document.getElementById('root'));

// //ReactDOM.render(<Globe pointsData={myData} />, document.getElementById('root'));

// export default World;