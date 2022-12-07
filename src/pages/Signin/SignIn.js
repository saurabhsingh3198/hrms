import React, {  } from 'react'

import ahom from "./ahom.mp4"
import classes from './SignIn.module.css'
import SignInForm from './SignInForm';


function SignIn(props) {
  // const [loggedIn,SetLoggedIn]=useState(false);
  return  (
 <div>
{/* <div> */}
{/* <nav className="navbar navbar-expand-lg bg-light">
<div className="container-fluid">
  <b>Ahom Technology</b><span></span>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="/">Home</a>
      </li>
     
      
    </ul>
  </div>
</div>
</nav> */}
      <div className='App' style={{display: 'flex'}}>
        <div className={classes.appAside} >
          <div style={{ color:"black",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  marginTop:" 133px"}}>
  
          {/* <h1 style={{}}>Welcome<br/>&nbsp;&nbsp;&nbsp;&nbsp;To<br/> &nbsp;Ahom</h1> */}
           {/* <div>
        <img alt='img' src="https://images.yourstory.com/cs/images/companies/Ahom-Logo-512-px-square-01-1651739151181.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"/>
        </div> */}
        <div >
      <video style={{width: '45vw',marginTop: '80px'}} autoPlay loop muted >
        <source src={ahom} type="video/mp4" />
      </video>
      </div>
          </div>
        </div>
       
      {/* </div> */}
        <div className={classes.appForm}>
          {/* <div className={classes.pageSwitcher}>
            <NavLink
       
              
              className={classes.pageSwitcherItem}
              onClick={()=>{SetLoggedIn(true)}}
            >
              Sign In
            </NavLink>
            <NavLink
              exact
           
              className={classes.pageSwitcherItem}
              onClick={()=>{SetLoggedIn(false)}}
            >
              Sign Up
            </NavLink>
           </div>

          <div className={classes.formTitle}>
            <p
        
              className={classes.formTitleLink}
              onClick={()=>{SetLoggedIn(true)}}
            >
              Sign In
            </p>{" "}
            or{" "}
            <p
              exact
              className={classes.formTitleLink}
              onClick={()=>{SetLoggedIn(false)}}
            >
              Sign Up
            </p>
          </div> */}
          { <SignInForm handler={props.handler}/>}
          {/* {!loggedIn && <SignUpForm/>}          */}
</div>
        </div>
      </div>
    
  );
  
}

export default SignIn