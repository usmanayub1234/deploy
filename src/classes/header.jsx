import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import  Fighter from "./fighter";
import About from './about';
import Contact from './contact';
import Home from './home';



// class Header extends Component{
//     constructor(props) {
//         super(props);
// }
//     render(){
//   return (
//     <div className="Header">
//       <p><img src={this.imgURL} className="App-logo" alt="logo" /></p>
//  <Router>
//       <div>
//         <nav>
//           <ul>
//           <li>
//               <Link to="/fighter">Fighter</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//           <Route path="/fighter">
//             <Fighter />
//           </Route>
//         </Switch>
//       </div>
//     </Router>


//     </div>
//   );
// }
// }

class Header extends Component{
  render(){
    return (

      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/fighter">fighter</Link></li>
        </ul>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/fighter" component={Fighter} />
      </div>
    </Router>




//       <div>
// <Switch>
// <Route path="/about">
//   <About />
// </Route>
// <Route path="/contact">
//   <Contact />
// </Route>

// <Route path="/home">
//   <Home />
// </Route>

// <Route path="/fighter">
//   <Fighter />
// </Route> 
// </Switch>
// </div>

);
 }
}

export default Header;

