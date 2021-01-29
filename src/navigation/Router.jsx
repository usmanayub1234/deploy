import Logo from '../images/logo.png';
import  "../App.css";
// import history from '../classNamees/history';
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import  '../css/navbar.css';




const Header = ({ history }) => (

    <div className="Header">
        <div className="topheader">
<ul>
    <li><div >Store</div></li>
    <li><div>Shop</div></li>
    <li><div>Policy</div></li>
    </ul>

        </div>

          <div>
          <nav>
        <div id="logo"><img src={Logo} className="App-logo" alt="logo" /></div>

        <label htmlFor="drop" className="toggle">Menu</label>
        <input type="checkbox" id="drop" />
            <ul className="menu">
                <li>
                   <div onClick={()=> history.push('/')}>Home</div>
                 </li>
                <li>
               
                    <label htmlFor="drop-1" className="toggle">Bikes +</label>
                   
                   <div>Bikes +</div>
              
                    <input type="checkbox" id="drop-1"/>
                    <ul className="bikedropcss">
                        <li><div onClick={()=> history.push('/cr70')} >70cc</div></li>
                        <li><div onClick={()=> history.push('/cr100')} >100cc</div></li>
                        <li><div onClick={()=> history.push('/cr125')} >125cc</div></li>
                        <li><div onClick={()=> history.push('/fighter')} >Fighter</div></li>
                    </ul> 

                </li>
                <li>

                
                <label htmlFor="drop-2" className="toggle">Loaders +</label>
                 <div>Loaders +</div>
                <input type="checkbox" id="drop-2"/>
                <ul>
                    <li><div onClick={()=> history.push('/bike')} >Loader 100cc</div></li>
                    <li><div onClick={()=> history.push('/bike')} >Loader 125cc</div></li>
                    <li><div onClick={()=> history.push('/bike')} >Loader 150cc</div></li>
                    <li><div onClick={()=> history.push('/bike')} >Loader 200cc</div></li>

                    {/* <li>
                        <label htmlFor="drop-3" className="toggle">Loader +</label>
                    <a href="#">Electric Loaders</a>         
                    <input type="checkbox" id="drop-3"/>

                    <ul>
                        <li><a href="#">HTML/CSS</a></li>
                        <li><a href="#">jQuery</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
                    </li> */}

                </ul>
                </li>
                <li>
                   <div onClick={()=> history.push('/about')}>About</div>
                 </li>
                 <li>
                   <div onClick={()=> history.push('/contact')}>Contact</div>
                 </li>
            </ul>
        </nav>



{/* 
          <nav>
              <ul>
               <li>
                   <div>Home</div>
                </li> 
                 <li>
                   <div onClick={()=> history.push('/about')}>About</div>
                 </li>
                 <li>
                   <div onClick={()=> history.push('/contact')}>Contact</div>
                 </li>
                 <li>
                   <div onClick={()=> history.push('/fighter')}>Fighter</div>
                 
                 </li>
               </ul>
             </nav> */}
    
    
           </div>
     </div>
    
    
    );
    
    export default withRouter(Header);




// className Navigation extends Component{

//  HomeButton = () => {
//     history.push({pathname:'/about'});
    
//   }

//  contactButton = () => {
// history.push({pathname:'/contact'});
//   }

//   bikesbutton = () => {
//  history.push({pathname:'/fighter'});
//   }


//     render(){
//   return (
//     <div classNameName="Header">
//       <p><img src={Logo} classNameName="App-logo" alt="logo" /></p>

//       <div>
//         <nav>
//           <ul>
//             <li>
//               <div>Home</div>
//             </li> 
//             <li>
//               <div onClick={ ()=> history.push('/about')}>About</div>
//             </li>
//             <li>
//               <div onClick={this.contactButton}>Contact</div>
//             </li>
//             <li>
//               <div onClick={this.bikesbutton}>Fighter</div>
             
//             </li>
//           </ul>
//         </nav>


//       </div>
 


//     </div>
//   );
// }
// }

// export default withRouter(Navigation);


