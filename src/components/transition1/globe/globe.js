
    import React from 'react';
    import {useState, useRef, useEffect} from 'react'
    // import ReactDOM from 'react-dom'
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
        fetch('../datasets/ne_110m_admin_0_countries.geojson').then(res => res.json())
          .then(countries=> {
            setCountries(countries);

            setTimeout(() => {
                setTransitionDuration(2000);
                setAltitude(() => feat =>
                Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 1e-5)
                );
              }, 3000);
            });
        }, []);
  
        const { width } = useWindowDimensions();
  
        useEffect(() => {
         if( globeEl.current !== null )
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
          <div className="container display_none" style={{'margin':'0'}}>
            <div className="main " >
              <div className="">
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
    
              </div>            
            </div>
            
            </div>
        )
      };
  

// ReactDOM.render(<World />, document.getElementById('root'));

export default World;