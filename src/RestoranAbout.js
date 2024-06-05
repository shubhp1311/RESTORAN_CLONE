import a from './images/img/about-1.jpg'
import b from './images/img/about-2.jpg'
import c from './images/img/about-3.jpg'
import d from './images/img/about-4.jpg'

import React, { Component } from 'react'

export default class RestoranAbout extends Component {
  constructor(){
    super();
    this.state={
        years:1,
        popular:5
    }
}

componentDidMount(){
  setTimeout(()=>{
    this.setState({years:2,popular:10})

},100)

    setTimeout(()=>{
        this.setState({years:3,popular:15})

    },200)

    setTimeout(()=>{
        this.setState({years:3,popular:20})
        
    },300)

    setTimeout(()=>{
        this.setState({years:4,popular:25})
       
    },400)

    setTimeout(()=>{
      this.setState({years:5,popular:30})
     
  },500)

  setTimeout(()=>{
    this.setState({years:6,popular:35})
   
},600)

setTimeout(()=>{
  this.setState({years:8})
 
},700)

setTimeout(()=>{
  this.setState({years:10,popular:40})
 
},800)

setTimeout(()=>{
  this.setState({years:13,popular:45})
 
},900)

setTimeout(()=>{
  this.setState({years:15,popular:50})
 
},1000)
}
  render() {
    return (
      <div>
         <div className='about'>
         <div className='a1'>
             <div className='adiv1'>
                 <img src={a} alt='logo' height={280} width={260}></img>
             </div>
             <div className='adiv2'>
             <img src={b} alt='logo' height={200} width={200}></img>
             </div>
             <div className='adiv3'>
             <img src={c} alt='logo' height={200} width={200}></img>
             </div>
             <div className='adiv4'>
             <img src={d} alt='logo' height={280} width={260}></img>
             </div>
         </div>
         <div className='a2'>
             <h5 style={{color:'orange',marginTop:'100px',marginLeft:'20px'}}>About Us ----</h5>
             <h1 style={{marginLeft:'20px'}}>Welcome to <i class="fa fa-utensils me-3" style={{color:'orange', paddingLeft:'10px'}}></i> Restoran</h1>
             <p style={{marginLeft:'20px'}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
             <p style={{marginLeft:'20px'}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
             <div className='div21' style={{marginLeft:'20px'}}>
               <div className='div15'>
                 <h1 style={{fontWeight:'bolder',fontSize:'55px'}}>{this.state.years}</h1>
               </div>
               <div className='year'>
                 <span style={{color:'gray'}}>Years of</span><br/>
                 <h6 style={{color:'black',lineHeight:'10px',fontWeight:'bold'}}>Experience</h6>
               </div>
             </div>
             <div className='div22'>
             <div className='div15'>
                 <h1 style={{fontWeight:'bolder',fontSize:'55px'}}>{this.state.popular}</h1>
               </div>
               <div className='year'>
                 <span style={{color:'gray'}}>Popular</span><br/>
                 <h6 style={{color:'black',lineHeight:'10px',fontWeight:'bold'}}>MASTER CHEFS</h6>
               </div>
             </div>
             <button type="button" class="btn btn-warning" style={{height:'50px',width:'150px',marginLeft:'20px'}}>Read More</button>
         </div>
     </div>

      </div>
    )
  }
}

// export default function RestoranAbout() {


    
//   return (
//     <div className='about'>
//         <div className='a1'>
//             <div className='adiv1'>
//                 <img src={a} alt='logo' height={280} width={260}></img>
//             </div>
//             <div className='adiv2'>
//             <img src={b} alt='logo' height={200} width={200}></img>
//             </div>
//             <div className='adiv3'>
//             <img src={c} alt='logo' height={200} width={200}></img>
//             </div>
//             <div className='adiv4'>
//             <img src={d} alt='logo' height={280} width={260}></img>
//             </div>
//         </div>
//         <div className='a2'>
//             <h5 style={{color:'orange',marginTop:'100px',marginLeft:'20px'}}>About Us ----</h5>
//             <h1 style={{marginLeft:'20px'}}>Welcome to <i class="fa fa-utensils me-3" style={{color:'orange', paddingLeft:'10px'}}></i> Restoran</h1>
//             <p style={{marginLeft:'20px'}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
//             <p style={{marginLeft:'20px'}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
//             <div className='div21' style={{marginLeft:'20px'}}>
//               <div className='div15'>
//                 <h1 style={{fontWeight:'bolder',fontSize:'55px'}}>15</h1>
//               </div>
//               <div className='year'>
//                 <span style={{color:'gray'}}>Years of</span><br/>
//                 <h6 style={{color:'black',lineHeight:'10px',fontWeight:'bold'}}>Experience</h6>
//               </div>
//             </div>
//             <div className='div22'>
//             <div className='div15'>
//                 <h1 style={{fontWeight:'bolder',fontSize:'55px'}}>50</h1>
//               </div>
//               <div className='year'>
//                 <span style={{color:'gray'}}>Popular</span><br/>
//                 <h6 style={{color:'black',lineHeight:'10px',fontWeight:'bold'}}>MASTER CHEFS</h6>
//               </div>
//             </div>

//             <button type="button" class="btn btn-warning" style={{height:'50px',width:'150px',marginLeft:'20px'}}>Read More</button>
//         </div>
//     </div>
//   )
// }
