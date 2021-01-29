// //  import logo from './logo.svg';
// import './App.css';
//  import React, { Component } from 'react';
// import Navigation from './Navigation/Router';


// import {BrowserRouter as Router,Switch,Route, BrowserRouter} from "react-router-dom";
// import About from './classes/about';
// // import Header from './classes/header';



// class App extends Component {


// render() {
// return (
// <div>
// <Router history={history}>
// <Switch>
// <Route path="/" component={Navigation}/>
// <Route path="/about" component={About}/>
// </Switch> 

// </Router>




//           </div>
//         );
//       }
//     }
// export default App;


import React, { Component } from 'react';
import history from "./classes/history";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navigation from "./navigation/Router";
import About from "./classes/about";
import Contact from "./classes/contact";
import Fighter from "./classes/fighter";
import Home from './classes/home';
import Footer from './classes/footer';
import Svntycc from './classes/cr70';
import ScrollToTopBtn from "./classes/scrolltop"; 
import OnetoFivecc from './classes/cr125';
import OneHundred  from "./classes/cr100";
 class App extends Component {


  

  render() {
   return (
 
  <Router  history={history} >
    <div>
    <div ref={this.myRef}></div>
        <Navigation />
        <Switch>
          {/* <Route exact path="/" /> */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/fighter" component={Fighter} />
          <Route path="/cr70" component={Svntycc} />
          <Route path="/cr125" component={OnetoFivecc} />
          <Route path="/cr100" component={OneHundred} />
        </Switch>
        <Route path="/" render = { ( props ) => ( props.location.pathname == "/") && <Home btn="Read More" shop="Buy Now"  history /> } />
        <ScrollToTopBtn /> 
   <Footer />


    </div>
  </Router>
);

    }
}

export default App;