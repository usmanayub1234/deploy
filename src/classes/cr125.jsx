import React, { Component } from "react";
import section4 from "../images/Diavel-NY-01-banner-Wide-663x249.jpg";

import tab2 from "../images/125-red-curve.jpg";
import tab3 from "../images/125 Black-min.jpg";

import Red from '../images/Icon-red.jpg';
import Black from '../images/icon-black.png';

import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import slider4 from "../images/slider4.jpg";
import slider5 from "../images/slider5.jpg";
import slider6 from "../images/slider6.jpg";
import slider7 from "../images/slider7.jpg";
import slider8 from "../images/slider8.jpg";

import '../css/fightercss.css';






// const Fighter = () =>{
export default class OnetoFivecc extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: "../assets/images/125-red-curve.jpg"
    }
  }


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [
  //       {
  //         id: "1",
  //         key: "1",
  //         title: "HD PLUS",
  //         text: "Designed with a combination of luxury and economy for everyday use. The stunning graphics, tough grip and 06 Months warranty (or 6,000 km) is the perfect choice for an upgraded 70cc motorcycle..",
  //         img: "../assets/images/1.jpg"
  //       },
  //       {
  //         id: "2",
  //         key: "2",
  //         title: "Jabza Plus",
  //         text: "Designed for economy and efficiency at the same time for everyday short and long range rides. The motorcycle’s shock absorbing mechanism is backed with premium quality parts which defies intermittent breaks. The product comes with 06 months warranty (or 6,000 km).",
  //         img: "../assets/images/Jazba-Red-min.jpg"
  //       },
  //       {
  //         id: "3",
  //         key: "3",
  //         title: "JAZBA PLUS ALLOY RIM",
  //         text: "Designed for economy and efficiency at the same time for everyday short and long range rides. The motorcycle’s shock absorbing mechanism is backed with premium quality parts which defies intermittent breaks. The product comes with 06 months warranty (or 6,000 km).",
  //         img: "../assets/images/Jazba-Red-min.jpg"
  //       },
  //       {
  //         id: "4",
  //         key: "4",
  //         title: "SELFSTART SPOKES",
  //         text: "CR-70 SELF START is capable of electric ignition. So now you can sit back and easily start your bike with the push of a button instead of kick start. The product is backed with 6 months (or 6,000 km) product warranty.",
  //         img: "../assets/images/70-Self-Start-min.jpg"
  //       },
  //       {
  //         id: "5",
  //         key: "5",
  //         title: "SELFSTART ALLOY RIM",
  //         text: "CR-70 SELF START is capable of electric ignition. So now you can sit back and easily start your bike with the push of a button instead of kick start. The product is backed with 6 months (or 6,000 km) product warranty.",
  //         img: "../assets/images/70-Self-Start-min.jpg"
  //       }
  //     ],
  //     toggle: false,
  //     visible: false

  //   };
  // }

  render() {
    // var { data, toggle, visible } = this.state;

    return (<>

      <section id="onetofivepage" className="header-banner d-flex align-items-center">
        <div className="container-fluid" >
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                </div>
                <div className="col-lg-6  order-lg-2 svnty-css mt-25">
                  <h3>Crown CR125 </h3>
                  <h1 className="my-3">Ride With Style.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="container">
          <div className="col-12 mx-auto">
            <div className="row bg-infos">
              <div className="model col-md-2 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div className="items">
                  <span className="desc">CR125</span>
                  <div className="valuewrap">
                    <strong className="value-current">
                      CC
</strong>
                  </div>
                </div>
              </div>

              <div className="col-md-2 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div className="item">
                  <span className="desc">Top Speed</span>
                  <div className="valuewrap">
                    <strong className="value-current">
                      90KM/Hr From 0-60 MPH
</strong>
                  </div>
                </div>
              </div>

              <div className="col-md-2 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div className="item">
                  <span className="desc">Fuel Economy</span>
                  <div className="valuewrap">
                    <strong className="value-current">
                      50 KM / L
</strong>
                  </div>
                </div>
              </div>
              <div className="col-md-2 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div className="item">
                  <span className="desc">Acceleration</span>
                  <div className="valuewrap">
                    <strong className="value-current">
                      10 Sec
</strong>

                  </div>
                </div>
              </div>
              <div className="col-md-2 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div className="item">
                  <span className="desc">Warranty</span>
                  <div className="valuewrap">
                    <strong className="value-current">
                      6 Months
</strong>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

      </section>

      {/* 
      <section className="cr70_cc_css my-5">
        <div className="container-fluid">
          <h1>Crown CR70 Range 2021</h1>
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div className="row">


                <div className="App All_svnty_css">
                  {data.map(({ title, text, key, img }) => {

                    return (
                      <>
                        <div className="main">
                          <h4 onClick={() => {
                            this.setState({ toggle: key, visible: false });
                          }}
                          >
                            {title}{" "}
                          </h4>

                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-lg-12 mx-auto">
                                <div className="row">

                                  <div className="col-lg-6 cr70_desc_css">
                                    {toggle === key ? (

                                      <p>{text}</p>

                                    ) : null}

                                  </div>
                                  <div className="col-lg-6 cr70_img_css">
                                    <div className="img">
                                      {visible && key === "1" ? (
                                        <img src={img} key={key} className="img-fluid" />
                                      ) : null}
                                      {toggle === key ? (
                                        <>
                                          <img src={img} key={key} className="img-fluid" />
                                        </>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </>
                    );
                  })}
                </div>



              </div>

            </div>
          </div>
        </div>
      </section> */}


      <section className="textstartfig my-5">
        <div className="container All_svnty_css">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row">
                <div className="container-fluid">

                  <ul className="cr70_nav">

                    <li className="active"><div href="#firsttab" data-toggle="tab" >CR 125</div></li>
                    <li><div href="#secondtab" data-toggle="tab" onClick={() => this.setState({ image: tab2 })}>CR 125 Self Start 5 Gear</div></li>
                    </ul>

                  <div className="tab-content">

                    <div className="tab-pane active" id="firsttab">
                      <div className="col-12 mx-auto">
                        <div className="row">
                          <div className="col-md-6 tabimg order-md-12">
                            <img src={tab2} className="img-fluid animated" alt="home-img" />
                          </div>

                          <div className="col-md-6 mx-auto designtext order-md-12">
                            <h1>DESIGNED WITH A COMBINATION OF LUXURY AND ECONOMY</h1>
                            <p>
                              Designed for performance for long and short distance rides keeping top speed with intense grip in priority.
                              The premium quality chassis is built to perfection for swift transitions in rough terrain. The product is backed with 06 months (or 6,000 km) warranty.
                          </p>
                          </div>
                        </div>
                      </div>
                      <div className="technical_css">
                        <h1>TECHNICAL <span>SPECIFICATIONS</span></h1>
                        
                        <table>
                          <tbody>
            <tr><td><h2>Displacement</h2><span className="tv self"> 124 cm3</span></td>
            <td><h2> Bore &amp; Stroke	</h2><span className="tv self"> 56.5 x 49.5 mm</span></td></tr>
            <tr><td><h2> Engine type	</h2><span className="tv self"> 4-Stroke OHC single cylinder cooled by air</span></td>
            <td><h2> Compression Ratio	</h2><span className="tv self"> 9.0:1</span></td></tr>
            <tr><td><h2> Final Drive system	</h2><span className="tv self"> Roller Chain</span></td>
            <td><h2> Seat Height	</h2><span className="tv self"> 770 mm</span></td> </tr>
            <tr><td><h2> suspension front	</h2><span className="tv self"> 702 mm</span></td>
            <td><h2> suspension back	</h2><span className="tv self"> 67 mm</span></td></tr>
            <tr><td><h2> starter </h2><span className="tv self"> kick start</span></td>
            <td><h2> transmission	</h2><span className="tv self"> continuous 4 speed mash</span></td></tr>
            <tr><td><h2> Tyre at Front	</h2><span className="tv self"> 2.50 – 18 (6 PR)</span></td>
            <td><h2> Tyre at Rear	</h2><span className="tv self"> 3.00 – 17 (6 PR)</span></td></tr>
            <tr><td><h2> Dimension(Lxwxh)	</h2><span className="tv self"> 1910 x 730 x 1015 mm</span></td>
            <td><h2> Ground Clearance	</h2><span className="tv self"> 140 mm</span></td></tr>
            <tr><td><h2> Petrol Capacity	</h2><span className="tv self"> 9.2 Liter</span></td>
            <td><h2> Wheel Base	</h2><span className="tv self"> 1200 mm</span></td></tr>
            <tr><td><h2> Dry Weight	</h2><span className="tv self"> 98kg</span></td>
            <td><h2> Warranty	</h2><span className="tv self"> 6 months bike warranty or 6,000 KM</span></td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>



                    <div className="tab-pane" id="secondtab">
                      <div className="col-12 mx-auto">
                        <div className="row">
                          <div className="col-md-6 tabimg">
                            <img src={this.state.image} className="img-fluid animated" alt="home-img" />
                            <div className="colorimg">
                              <ul>
                                <li><img onClick={() => this.setState({ image: tab2 })} src={Red} alt='red' /> </li>
                                <li><img onClick={() => this.setState({ image: tab3 })} src={Black} alt='black' title="Black" /> </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6 mx-auto designtext">
                            <h1>DESIGNED FOR ECONOMY AND EFFICIENCY</h1>
                            <p>
                              Designed for performance for long and short distance rides keeping top speed with intense grip in priority.
                              The premium quality chassis is built to perfection for swift transitions in rough terrain. The product is backed with 06 months (or 6,000 km) warranty.
                            </p>
                            
                          </div>
                        </div>
                      </div>

                      <div className="technical_css">
                        <h1>TECHNICAL <span>SPECIFICATIONS</span></h1>
                        <table>
                          <tbody>
                                      <tr><td><h2>Displacement</h2><span className="tv self"> 124 cm3</span></td>
                                      <td><h2> Bore &amp; Stroke	</h2><span className="tv self"> 56.5 x 49.5 mm</span></td></tr>
                                      <tr><td><h2> Engine type	</h2><span className="tv self"> 4-Stroke OHC single cylinder cooled by air</span></td>
                                      <td><h2> Compression Ratio	</h2><span className="tv self"> 9.0:1</span></td></tr>
                                      <tr><td><h2> Final Drive system	</h2><span className="tv self"> Roller Chain</span></td>
                                      <td><h2> Seat Height	</h2><span className="tv self"> 770 mm</span></td></tr>
                                      <tr><td><h2> suspension front	</h2><span className="tv self"> 702 mm</span></td>
                                      <td><h2> suspension back	</h2><span className="tv self"> 67 mm</span></td></tr>
                                      <tr><td><h2> starter </h2><span className="tv self"> kick start</span></td>
                                      <td><h2> transmission	</h2><span className="tv self"> continuous 4 speed mash</span></td></tr>
                                      <tr><td><h2> Tyre at Front	</h2><span className="tv self"> 2.50 – 18 (6 PR)</span></td>
                                      <td><h2> Tyre at Rear	</h2><span className="tv self"> 3.00 – 17 (6 PR)</span></td></tr>
                                      <tr><td><h2> Dimension(Lxwxh)	</h2><span className="tv self"> 1910 x 730 x 1015 mm</span></td>
                                      <td><h2> Ground Clearance	</h2><span className="tv self"> 140 mm</span></td> </tr>
                                      <tr><td><h2> Petrol Capacity	</h2><span className="tv self"> 9.2 Liter</span></td>
                                      <td><h2> Wheel Base	</h2><span className="tv self"> 1200 mm</span></td></tr>
                                      <tr><td><h2> Dry Weight	</h2><span className="tv self"> 98kg</span></td>
                                      <td><h2> Warranty	</h2><span className="tv self"> 6 months bike warranty or 6,000 KM</span></td></tr>
                          </tbody>
                        </table>



                      </div>

                    </div>


                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>






      <section className="textstartfig my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row">
                <div className="col-md-6 mx-auto section4th">
                  <div className="texts">
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
                  <img src={section4} className="img-fluid animated" alt="home-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="textstartfig my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row">
                <div id="scroll" className="section horizontal">
                  <div className="scroll js-horizontal-scroll">
                    <div className="itemscroll">

                      <img src={slider1} className="img-fluid animated d" alt="home-img" /></div>
                    <div className="itemscroll"><img src={slider2} className="img-fluid animated" alt="home-img" /></div>
                    <div className="itemscroll"><img src={slider3} className="img-fluid animated" alt="home-img" /></div>
                    <div className="itemscroll"><img src={slider4} className="img-fluid animated" alt="home-img" /></div>
                    <div className="itemscroll"><img src={slider5} className="img-fluid animated" alt="home-img" /></div>
                    <div className="itemscroll"><img src={slider6} className="img-fluid animated" alt="home-img" /></div>
                    <div className="itemscroll"><img src={slider7} className="img-fluid animated" alt="home-img" /></div>
                    <div className="itemscroll"><img src={slider8} className="img-fluid animated" alt="home-img" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* 
      <section id="section6" className="sectio6 my-5 d-flex align-items-center">
        <div className="container">
          <h1>Fighter 150</h1>
          <a>Fighter 150</a>
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row">


              </div>
            </div>
          </div>
        </div>

      </section> */}





    </>)
  }
}
