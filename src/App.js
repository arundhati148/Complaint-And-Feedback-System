import React from 'react';
import './App.css';
//import ActiveComp from './ActiveComp';
//import Academics from './Academics';
//import Infra from './Infra';
import Sanitation from './Sanitation';
import { Nav, NavItem, NavLink } from 'reactstrap';
function App() {
  return (
    <div className="body">
    <nav class="navbar navbar-dark bg-dark fixed-top" >
      <span class="navbar-brand mb-0 h1">Complaint & Feedback System</span>
    </nav>
<div className="row mt-5">
<div className="left col-md-2">
<h6>Complaint</h6>
      <Nav vertical>
        
       
        <NavItem>
          <NavLink href="#">Academics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Infrastructure</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Sanitation</NavLink>
        </NavItem>
      </Nav>
      
      <h6>Feedback</h6>
      <Nav vertical>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>
      </Nav>
    </div>
  <div className="right col-md-10" >
      {/* <ActiveComp/> */}
      {/* <Academics/> */}
      {/* <Infra/> */}
      <Sanitation/>
  </div>
  </div>

</div>
  );
}

export default App;
