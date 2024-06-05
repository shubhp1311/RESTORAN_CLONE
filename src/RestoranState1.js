import React, { useState } from 'react'

export default function RestoranState1() {
    const[y,abc]=useState('fa fa-3x fa-user-tie')
  return (
    <div>
        <i class={y} style={{fontSize:'40px',marginTop:'30px',color:'orange',marginLeft:'20px'}}></i>
        <p style={{fontWeight:'bolder',marginLeft:'10px'}}>Master Chefs</p>
        <p style={{marginLeft:'10px'}}>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
    </div>
  )
}
