import React from 'react'
import a from './images/img/testimonial-1.jpg'
import b from './images/img/testimonial-2.jpg'
import c from './images/img/testimonial-3.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RestoranCSS.css"
export default function RestoranTestinominal() {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
      };
  return (
    <div>
        <div className='food'>
            <div className='food1'>
                <h4 style={{color:'orange'}}>---Testimonial---</h4>
                <h1>Our Clients Say!!!</h1><br/>
            </div>
           
            <div className='testflex'>
             
            <Slider {...settings} style={{display:'flex'}}> 
            <div className='test1'>
            <br/><br/>&nbsp;&nbsp;&nbsp;<i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p style={{paddingLeft:'10px'}}>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div style={{height:'70px',width:'80px',float:"left"}}>
                    <img src={a} alt='logo' style={{borderRadius:'50%',marginLeft:'10px',marginTop:'20px'}} height={60} width={60}></img>
                </div>
                <div style={{float:"left",height:'70px',width:'270px'}}>
                    <h3>Sakshi Gavali</h3>
                    <p>Web Developer</p>
                </div>
            </div>
           
            <div className='test1'>
            <br/><br/>&nbsp;&nbsp;&nbsp;<i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p style={{paddingLeft:'10px'}}>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div style={{height:'70px',width:'80px',float:"left"}}>
                    <img src={b} alt='logo' style={{borderRadius:'50%',marginLeft:'10px',marginTop:'20px'}} height={60} width={60}></img>
                </div>
                <div style={{float:"left",height:'70px',width:'270px'}}>
                    <h3>Sakshi Gavali</h3>
                    <p>Web Developer</p>
                </div>
            </div>
            <div className='test1'>
            <br/><br/>&nbsp;&nbsp;&nbsp;<i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p style={{paddingLeft:'10px'}}>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div style={{height:'70px',width:'80px',float:"left"}}>
                    <img src={c} alt='logo' style={{borderRadius:'50%',marginLeft:'10px',marginTop:'20px'}} height={60} width={60}></img>
                </div>
                <div style={{float:"left",height:'70px',width:'270px'}}>
                    <h3>Sakshi Gavali</h3>
                    <p>Web Developer</p>
                </div>
            </div>
            </Slider> 
        </div>
        
        </div>
       
    </div>
  )
}
