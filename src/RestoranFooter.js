import React, { Component } from 'react'

export default class RestoranFooter extends Component {
  render() {
    return (
      <>
      <div className='foot'>
        <div className='foot1'>
            <h3 style={{fontFamily:'cursive',color:'orange',paddingLeft:'10px'}}>Company---</h3>
            <a style={{fontSize:'15px',lineHeight:"30px"}} class="btn btn-link" href="">About Us</a><br/>
            <a style={{fontSize:'15px',lineHeight:"-30px"}} class="btn btn-link" href="">Contact Us</a><br/>
            <a style={{fontSize:'15px',lineHeight:"-30px"}} class="btn btn-link" href="">Reservation</a><br/>
            <a style={{fontSize:'15px',lineHeight:"-30px"}} class="btn btn-link" href="">Privacy Policy</a>
            <a style={{fontSize:'15px',lineHeight:"-30px"}} class="btn btn-link" href="">Terms & Conditions</a>
        </div>
        <div className='foot1'>
            <h3 style={{fontFamily:'cursive',color:'orange',paddingLeft:'10px'}}>Contact---</h3>
            <br/>
            <p style={{fontSize:'16px',color:'white'}}><i class="fa fa-map-marker-alt me-3" style={{fontSize:'22px',color:'white'}} ></i> 123 Street, New York, USA</p>
            <p style={{fontSize:'16px',color:'white'}}><i class="fa fa-phone-alt me-3" style={{fontSize:'22px',color:'white'}} ></i> +012 345 67890</p>
            <p style={{fontSize:'16px',color:'white'}}><i class="fa fa-envelope me-3" style={{fontSize:'22px',color:'white'}} ></i> info@example.com</p>
            <span>
            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>`
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>`
            </span>
        </div>
        <div className='foot1'>
            <h3 style={{fontFamily:'cursive',color:'orange',paddingLeft:'10px'}}>Opening---</h3><br/>
            <h4 class="text-light fw-normal">Monday - Saturday</h4>
            <p style={{color:'white'}}>09AM - 09PM</p>
            <h4 class="text-light fw-normal">Sunday</h4>
            <p style={{color:'white'}}>10AM - 08PM</p>
        </div>
        <div className='foot1'>
            <h3 style={{fontFamily:'cursive',color:'orange',paddingLeft:'10px'}}>Newsletter---</h3><br/>
            <p style={{color:'white'}}>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
            <button type="button" style={{height:'50px'}} class="btn btn-warning py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
        </div>
      </div>
        <div style={{height:"70px",width:"auto",borderTop:"2px solid gray"}}  className='last'>
          
        <span style={{color:'white',marginLeft:"10px"}}>© <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
							Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br/>
                              Distributed By <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a></span>
          
          <div>
            <span style={{marginLeft:"850px",color:'white',borderRight:"2px solid gray"}}>Home&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;
            <span style={{color:'white',borderRight:"2px solid gray"}}>Cookies&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;
            <span style={{color:'white',borderRight:"2px solid gray"}}>Help&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;
            <span style={{color:'white',borderRight:"2px solid gray"}}>FAQs&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        </>
    )
  }
}
