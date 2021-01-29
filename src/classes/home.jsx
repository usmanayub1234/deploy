import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../css/home.css';
import fighter from "../images/orange-min.jpg";
import Svntyjazba from "../images/70cc Jazba Plus Red.png"; 
import SvntyjHD from "../images/70cc HD Plus Red-min.png";
import onetofv from "../images/125cc Red.png";
import hundred from "../images/100CC Red-min.png";
// import history from '../classes/history';

import { withRouter } from "react-router-dom";


import Banner1 from "../images/Diavel-1260-S-MY19-01-Configuratore-Banner-Full.jpg"; 
import fighterred from "../images/Red-&-Black-min.png"; 




class Home extends Component {
     
  
        render() {
 
                return (
                        <div id="homepage">

                                <section id="section1" className="home-banner">
                                        <div className="col-lg-12 home_banner_css">
                                                <h3>FIT 150 </h3>
                                                <h1 className="my-3">Fresh vibes. Sporty soul.</h1>
                                                <div className="mt-3"> <NavLink to="/" className="readmore">{this.props.btn}</NavLink> </div>
                                                <div className="mt-3"> <NavLink to="/" className="buynow">{this.props.shop}</NavLink> </div>
                                        </div>
                                </section>


                                


<section id="section2" className="portfolio_home_css">
<div className="container-fluid">
<div className="row">
<div className="col-lg-12">
<div>
<h1>Crown 2021 Model Range</h1>
</div>
<div className="row">



<div className="col-lg-4">    
<img src={fighter} onClick={()=> this.props.history.push('/fighter')} className="img-fluid animated" alt="portfolio-img-1" />
<h3>Crown Fighter 150</h3>
<div className="content">
<span>Top Speed:</span> 125 km/hr <br />
<span>Fuel Economy:</span> 30 KM/l <br />
<span>Acceleration:</span> 6 Sec<br />
<span>Seat height:</span> 780 mm (30.7 in)
</div>
</div>

<div className="col-lg-4">
<img src={onetofv} onClick={()=> this.props.history.push('/cr125')} className="img-fluid animated" alt="portfolio-img-1" />
<h3>Crown 125 cc </h3>
<div className="content">
<span>Top Speed:</span> 125 km/hr <br />
<span>Fuel Economy:</span> 30 KM/l <br />
<span>Acceleration:</span> 6 Sec<br />
<span>Seat height:</span> 780 mm (30.7 in)
</div>
</div>

<div className="col-lg-4">
<img src={hundred} onClick={()=> this.props.history.push('/cr100')} className="img-fluid animated" alt="portfolio-img-1" />
<h3>Crown 100 CC</h3>
<div className="content">
<span>Top Speed:</span> 125 km/hr <br />
<span>Fuel Economy:</span> 30 KM/l <br />
<span>Acceleration:</span> 6 Sec<br />
<span>Seat height:</span> 780 mm (30.7 in)
</div>
</div>


<div className="col-lg-4">
<img src={Svntyjazba} onClick={()=> this.props.history.push('/cr70')} className="img-fluid animated" alt="portfolio-img-1" />

<h3>CR70 Jazba</h3>
<div className="content">
<span>Top Speed:</span> 125 km/hr <br />
<span>Fuel Economy:</span> 30 KM/l <br />
<span>Acceleration:</span> 6 Sec<br />
<span>Seat height:</span> 780 mm (30.7 in)
</div>

</div>

<div className="col-lg-4">
<img src={SvntyjHD} onClick={()=> this.props.history.push('/cr70')} className="img-fluid animated" alt="portfolio-img-1" />
<h3>CR70 HD Plus </h3>
<div className="content">
<span>Top Speed:</span> 125 km/hr <br />
<span>Fuel Economy:</span> 30 KM/l <br />
<span>Acceleration:</span> 6 Sec<br />
<span>Seat height:</span> 780 mm (30.7 in)
</div>
</div>

<div className="col-lg-4">
<img src={fighter} onClick={()=> this.props.history.push('/cr70')} className="img-fluid animated" alt="portfolio-img-1" />
<h3>Crown 70 CC Jazba</h3>
<div className="content">
<span>Top Speed:</span> 125 km/hr <br />
<span>Fuel Economy:</span> 30 KM/l <br />
<span>Acceleration:</span> 6 Sec<br />
<span>Seat height:</span> 780 mm (30.7 in)
</div>
</div>


<div className="col-lg-4">
<img src={fighter} className="img-fluid animated" alt="portfolio-img-1" />
<h3>Crown 70 CC Jazba</h3>
<div className="content">
<span>Top Speed:</span> 125 km/hr <br />
<span>Fuel Economy:</span> 30 KM/l <br />
<span>Acceleration:</span> 6 Sec<br />
<span>Seat height:</span> 780 mm (30.7 in)
</div>
</div>


<div className="col-lg-4">
<img src={fighter} className="img-fluid animated" alt="portfolio-img-1" />
<h3>Crown 70 CC Jazba</h3>
<div className="content">
<span>Top Speed:</span> 125 km/hr <br />
<span>Fuel Economy:</span> 30 KM/l <br />
<span>Acceleration:</span> 6 Sec<br />
<span>Seat height:</span> 780 mm (30.7 in)
</div>
</div>


<div className="col-lg-4">
<img src={fighter} className="img-fluid animated" alt="portfolio-img-1" />
<h3>Crown 70 CC Jazba</h3>
<div className="content">
<span>Top Speed:</span> 125 km/hr <br />
<span>Fuel Economy:</span> 30 KM/l <br />
<span>Acceleration:</span> 6 Sec<br />
<span>Seat height:</span> 780 mm (30.7 in)
</div>
</div>

</div>

</div>
</div>
</div>
</section>


<section id="section3" className="banner3_css">
<div className="container">
<div className="row">
<div className="col-lg-12">
<div className="row">

<img src={Banner1} className="img-fluid animated" alt="portfolio-img-1" />
<div className="content">
<h2 className="title">
TRUE DEFINITION OF SPEED
</h2>
<p>
FIGHTER 150 is manufactured with keeping one thing in focus, true performance.
</p>
<div className="d-link"  title="Fighter 150cc" >
<span>Read More</span>
</div>
</div>


</div>
</div>
</div>
</div>

</section>

<section className="textstartfig my-5">
<div className= "container">
<div className="row">
<div className="col-12 mx-auto">
<div className="row">
<div className="col-md-6 mx-auto section4th">
<div className="text">
<span className="category">Travels</span>
<h1 className="title">The Way Out | New York beyond Manhattan</h1>
<span className="description">The soul of New York is narrated through the faces 
and stories of those who experience the city beyond Manhattan riding a Diavel 1260!</span>
<span className="d-link">
<p>Start your journey</p>
</span>
</div>
</div>
<div className="col-md-6 mx-auto">
<img src={fighterred} className="img-fluid animated" alt="home-img" />
</div>
</div>
</div>
</div>
</div>
</section> 



</div>


);
}
}

export default withRouter(Home);





