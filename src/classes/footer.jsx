import React from "react";
import Logo from '../images/logo.png';
import LogoeShop from '../images/E-shop-02.png'; 

const Footer = () =>{
return (<>
<footer className="w-100 text-center Footer">
<img src={Logo} className="Footerimg" alt="home-img" />
<div className="col-lg-12">  
    <ul>
       <div className="col-md-4">
       <li><div>Privacy Policy</div></li> 
           </div> 
  
           <div className="col-md-4">
           <li><div>Terms-Condition</div></li>
           </div> 

           <div className="col-md-4">
           <li><div>Contact Us</div></li>
           </div> 

   

    </ul>
</div>


<div className="container">  
<div className="col-lg-12 row">  
<p>@ 2020 Crown Motorcycle. Holding S.p.A – A Sole Shareholder Company 
    - A Company subject to the Management and Coordination activities of AUDI AG. All rights reserved. VAT 05113870967</p>
</div>
</div>

<div className="container secFooter_css">  
<div className="col-lg-12 row"> 

<div className="col-lg-4">
<img src={LogoeShop} alt="home-img" />
</div>

<div className="col-lg-4 socialcss">
<ul>
<li><a><i className="fa fa-facebook" aria-hidden="true"></i></a></li>		
<li><a><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
<li><a><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
<li><a><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
</ul>
</div>

<div className="col-lg-4">
<h2>A Project of Crown Group</h2>
</div>


</div>
</div>


</footer>

</>

)

}


export default Footer;