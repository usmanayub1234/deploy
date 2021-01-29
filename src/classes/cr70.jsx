import React, { Component } from "react";
import section4 from "../images/Diavel-NY-01-banner-Wide-663x249.jpg";

import tab1 from "../images/70-Self-Start-min.jpg";
import tab4 from "../images/70 Self Start Black-min.jpg";

import tab2 from "../images/Jazba Red-min.jpg";
import tab5 from "../images/Jazba Black-min.jpg";

import tab3 from "../images/HDPLUISREDangle.png";

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
class Sventycc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "1",
          key: "1",
          title: "HD PLUS",
          text: "Designed with a combination of luxury and economy for everyday use. The stunning graphics, tough grip and 06 Months warranty (or 6,000 km) is the perfect choice for an upgraded 70cc motorcycle..",
          img: "../assets/images/1.jpg"
        },
        {
          id: "2",
          key: "2",
          title: "Jabza Plus",
          text: "Designed for economy and efficiency at the same time for everyday short and long range rides. The motorcycle’s shock absorbing mechanism is backed with premium quality parts which defies intermittent breaks. The product comes with 06 months warranty (or 6,000 km).",
          img: "../assets/images/Jazba-Red-min.jpg"
        },
        {
          id: "3",
          key: "3",
          title: "JAZBA PLUS ALLOY RIM",
          text: "Designed for economy and efficiency at the same time for everyday short and long range rides. The motorcycle’s shock absorbing mechanism is backed with premium quality parts which defies intermittent breaks. The product comes with 06 months warranty (or 6,000 km).",
          img: "../assets/images/Jazba-Red-min.jpg"
        },
        {
          id: "4",
          key: "4",
          title: "SELFSTART SPOKES",
          text: "CR-70 SELF START is capable of electric ignition. So now you can sit back and easily start your bike with the push of a button instead of kick start. The product is backed with 6 months (or 6,000 km) product warranty.",
          img: "../assets/images/70-Self-Start-min.jpg"
        },
        {
          id: "5",
          key: "5",
          title: "SELFSTART ALLOY RIM",
          text: "CR-70 SELF START is capable of electric ignition. So now you can sit back and easily start your bike with the push of a button instead of kick start. The product is backed with 6 months (or 6,000 km) product warranty.",
          img: "../assets/images/70-Self-Start-min.jpg"
        }
      ],
      toggle: false,
      visible: false,
      image: "../assets/images/70-Self-Start-min.jpg",


    };
  }

  render() {
    var { data, toggle, visible } = this.state;

    return (<>

      <section id="sventypage" className="header-banner d-flex align-items-center">
        <div className="container-fluid" >
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                </div>
                <div className="col-lg-6  order-lg-2 svnty-css mt-25">
                  <h3>Crown CR70 </h3>
                  <h1 className="my-3">Fresh vibes. Sporty soul.</h1>
                  {/* <div className="mt-3"> <NavLink to="/" className="readmore">Read More</NavLink> </div> */}
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
                  <span className="desc">CR70</span>
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
                    <li className="active"><div href="#firsttab" data-toggle="tab">HD Plus</div></li>
                    <li><div href="#secondtab" data-toggle="tab" onClick={() => this.setState({ image: tab1 })}>JAZBA PLUS</div></li>
                    <li><div href="#thirdtab" data-toggle="tab" onClick={() => this.setState({ image: tab1 })}>JAZBA PLUS ALLOY RIM</div></li>
                    <li><div href="#fourthtab" data-toggle="tab" onClick={() => this.setState({ image: tab2 })}>SELFSTART SPOKES</div></li>
                    <li><div href="#fifthtab" data-toggle="tab" onClick={() => this.setState({ image: tab2 })}>SELFSTART ALLOY RIM</div></li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane active" id="firsttab">
                      <div className="col-12 mx-auto">
                        <div className="row">
                          <div className="col-md-6 tabimg">
                            <img src={tab3} className="img-fluid animated" alt="home-img" />
                          </div>

                          <div className="col-md-6 mx-auto designtext">
                            <h1>DESIGNED WITH A COMBINATION OF LUXURY AND ECONOMY</h1>
                            <p>
                              Designed with a combination of luxury and economy for everyday use.
                              The stunning graphics, tough grip and 06 Months warranty (or 6,000 km) is the perfect choice for an upgraded 70cc motorcycle.
                          </p>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="tab-pane" id="secondtab" >
                      <div className="col-12 mx-auto">
                        <div className="row">
                          <div className="col-md-6 tabimg">
                            <img src={this.state.image} className="img-fluid animated" alt="home-img" />
                          </div>
                          <div className="col-md-6 mx-auto designtext">
                            <h1>DESIGNED FOR ECONOMY AND EFFICIENCY</h1>
                            <p>Designed for economy and efficiency at the same time for everyday short and long range rides.
                            The motorcycle’s shock absorbing mechanism is backed with premium quality parts which defies intermittent breaks.
                              The product comes with 06 months warranty (or 6,000 km).</p>
                            <div className="colorimg">
                              <ul>
                                <li><img onClick={() => this.setState({ image: tab1 })} src={Red} alt='red' /> </li>
                                <li><img onClick={() => this.setState({ image: tab4 })} src={Black} alt='black' /> </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="tab-pane" id="thirdtab">
                      <div className="col-12 mx-auto">
                        <div className="row">
                          <div className="col-md-6 tabimg">
                            <img src={this.state.image} className="img-fluid animated" alt="home-img" />
                          </div>

                          <div className="col-md-6 mx-auto designtext">
                            <h1>DESIGNED FOR ECONOMY AND EFFICIENCY </h1>
                            <p>
                              Designed for economy and efficiency at the same time for everyday short and long range rides.
                              The motorcycle’s shock absorbing mechanism is backed with premium quality parts which defies intermittent breaks. The product comes with 06 months warranty (or 6,000 km).
                            </p>
                            <div className="colorimg">
                              <ul>
                                <li><img onClick={() => this.setState({ image: tab2 })} src={Red} alt='red' /> </li>
                                <li><img onClick={() => this.setState({ image: tab5 })} src={Black} alt='black' /> </li>
                              </ul>
                            </div>
                          </div>


                        </div>
                      </div>

                    </div>

                    <div className="tab-pane" id="fourthtab">
                      <div className="col-12 mx-auto">
                        <div className="row">
                          <div className="col-md-6 tabimg">
                            <img src={this.state.image} className="img-fluid animated" alt="home-img" />
                          </div>

                          <div className="col-md-6 mx-auto designtext">
                            <h1>DESIGNED FOR AUTOMATION</h1>
                            <p>
                              CR-70 SELF START is capable of electric ignition.
                              So now you can sit back and easily start your bike with the push of a button instead of kick start. The product is backed with 6 months (or 6,000 km) product warranty.
                            </p>
                            <div className="colorimg">
                              <ul>
                                <li><img onClick={() => this.setState({ image: tab1 })} src={Red} alt='red' /> </li>
                                <li><img onClick={() => this.setState({ image: tab4 })} src={Black} alt='black' /> </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="technical_css">
                          <h1>TECHNICAL SPECIFICATIONS</h1>
                        </div>

                      </div>

                    </div>


                    <div className="tab-pane" id="fifthhtab">
                      <div className="col-12 mx-auto">
                        <div className="row">
                          <div className="col-md-6 tabimg">
                            <img src={tab1} className="img-fluid animated" alt="home-img" />
                          </div>

                          <div className="col-md-6 mx-auto designtext">
                            <h1>DESIGNED FOR AUTOMATION</h1>
                            <p>
                              CR-70 SELF START is capable of electric ignition. So now you can sit back and easily start
                              your bike with the push of a button instead of kick start. The product is backed with 6 months (or 6,000 km) product warranty.
                            </p>
                          </div>
                        </div>
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

      <section id="section6" className="sectio6 my-5 d-flex align-items-center">
        <div className="container">
          <h1>Fighter 150</h1>
          <a href="#">Fighter 150</a>
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row">


              </div>
            </div>
          </div>
        </div>

      </section>





    </>)
  }
}
export default Sventycc;