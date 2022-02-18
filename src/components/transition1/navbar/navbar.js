import React, { useEffect } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import { HashLink as HLink } from 'react-router-hash-link';

import img from "../../../media/logo.svg"

import "./navbar.css"

const Navbar = () => {
   useEffect(() => {
      const sidenav = document.querySelector("#mobile-nav");
      M.Sidenav.init(sidenav, {});
   }, [])

   const links = [
      { id: 1, Name: 'Home', to: '' },
      { id: 2, Name: 'Team', to: '/team' },
      { id: 3, Name: 'Contact', to: '/contact' },
      // { id: 4, Name: 'Log In', to: 'https://dash.alrt.ai' },
   ];

   const links_mob = [
      { id: 1, Name: 'Home', to: '/#home' },
      { id: 2, Name: 'Team', to: '/team' },
      { id: 3, Name: 'Contact', to: '/contact' },
      // { id: 4, Name: 'Log In', to: 'https://dash.alrt.ai' },
   ];

   return (
      <div className="navbar">
         <div className="navbar-fixed">
            <nav className="nav-wrapper " style={{ "backgroundColor": "#1e021e" }}>
               <div className="container">
                  <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                     <i className="material-icons" style={{ color: "#dfdfdf" }}>menu</i>
                  </a>
                  <img src={img} alt="" className="logo"/>
                  <ul className="right hide-on-med-and-down menu_nav" >
                     {links.map(link => (
                        <li key={link.id}>
                           <HLink style={{'color':'#dfdfdf', 'fontSize':'1.2rem'}} to={link.to} >{link.Name}</HLink>
                        </li>
                     ))}
                     <li >
                        <button className="login_button">                        
                           <a style={{'color':'#1e021e'}} href={"https://dash.alrt.ai"} >{"Login"}</a>
                        </button>
                     </li>

                  </ul>
               </div>
            </nav>
         </div>

         <ul className="sidenav" id='mobile-nav' style={{ "backgroundColor": "#1e021e", 'paddingTop':'20vh' }}>
            {links_mob.map(link => (
               <li key={link.id} >
                  <HLink className='white-text' style={{'margin':'5vh 0', 'textAlign':'center'}}
                  to={link.to} >{link.Name}</HLink>
               </li>
            ))}
            <li >
                  <a style={{'margin':'5vh 0', 'textAlign':'center', 'color':'white'}} href={"https://dash.alrt.ai"} >{"Login"}</a>
                     </li>
         </ul>
      </div>
   )
}

export default Navbar