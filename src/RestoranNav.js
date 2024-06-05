import React from 'react'
// import "./RestoranCSS.css"
import a from './images/img/hero.png'

export default function RestoranNav() {
  return (
    <div className='nav'>
      
        <div className='logo'>
            <br/><h1><i class="fa fa-utensils me-3" style={{color:'white', paddingLeft:'10px'}}></i>
            <span className='rest'> Restoran</span></h1>
        </div>
        <div className='home'>
            <button className='btn' style={{paddingLeft:'120px'}}>Home</button>
            <button className='btn'>About</button>
            <button className='btn'>Service</button>
            <button className='btn'>Menu</button>
            <button className='btn'>Pages</button>
            <button className='btn'>Contact</button>
            <button className='btn' style={{backgroundColor:'orange', height:'50px',width:'150px',color:'white'}}>Book A Table</button>
        </div>
        <div className='enjoy'>
          <br/><br/><br/><br/><h1 style={{fontSize:'50px'}}>Enjoy Our Delicious Meal</h1>
          <p style={{fontSize:'20px'}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <button className='btn' style={{backgroundColor:'orange', height:'50px',width:'150px',color:'white'}}>Book A Table</button>
        </div>
        <div className='rot'>
            <img className='rotate' src={a} alt='logo' height={550} width={550}></img>
        </div>
       
    </div>
  )
}
