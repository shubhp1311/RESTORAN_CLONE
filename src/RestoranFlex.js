import React from 'react'
import RestoranState1 from './RestoranState1'
import { useState } from 'react'

export default function RestoranFlex() {
    const[a,abc]=useState('fa fa-3x fa-user-tie')
    const[e,efg]=useState('Master Chefs')
    const[i,ijk]=useState('Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam')

    let sak=()=>{
        abc('fa fa-3x fa-headset');
        efg('Best Resturant');
        ijk('Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing')
    }
    let shi=()=>{
        abc('fa fa-3x fa-user-tie')
        efg('Master Chefs')
        ijk('Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam')
    }


    const[b,pqr]=useState('fa fa-3x fa-utensils')
    const[f,fgh]=useState('Quality Food')
    const[j,jkl]=useState('Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam')

    const[n,nop]=useState()
    let smi=()=>{
        pqr('fa fa-home')
        fgh('Best Resturant')
        jkl('Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing')
    }
    let ta=()=>{
        pqr('fa fa-3x fa-utensils')
        fgh('Quality Food')
        jkl('Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam')
    }

    
    const[c,xyz]=useState('fa fa-3x fa-cart-plus')
    const[g,ghi]=useState('Online Order')
    const[k,klm]=useState('Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam')

    let shu=()=>{
        xyz('fa fa-3x fa-headset')
        ghi('Best Resturant')
        klm('Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing')
    }
    let bham=()=>{
        xyz('fa fa-3x fa-cart-plus')
        ghi('Online Order')
        klm('Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam')
    }


    const[d,stu]=useState('fa fa-3x fa-headset')
    const[h,hij]=useState('24/7 Service')
    const[l,lmn]=useState('Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam')

    let moh=()=>{
        stu('fa fa-home')
        hij('Best Resturant')
        lmn('Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing')
    }
    let hit=()=>{
        stu('fa fa-3x fa-headset')
        hij('24/7 Service')
        lmn('Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam')
    }


  return (
    <div className='flex'>
        <div className='flex1' onMouseOver={sak} onMouseOut={shi}>
            {/* <RestoranState1/> */}
            <i className={a} style={{fontSize:'40px',marginTop:'30px',color:'orange',marginLeft:'20px'}} id='icon'></i>
        <p style={{fontWeight:'bolder',marginLeft:'10px'}}>{e}</p>
        <p style={{marginLeft:'10px'}}>{i}</p>
        </div>
        <div className='flex2' onMouseOver={smi} onMouseOut={ta} >
            {/* <RestoranState1/> */}
            <i class={b} id='iconn'style={{fontSize:'40px',marginTop:'30px',color:'orange',marginLeft:'20px'}}></i>
        <p style={{fontWeight:'bolder',marginLeft:'10px'}}>{f}</p>
        <p style={{marginLeft:'10px'}}>{j}</p>
        </div>
        <div className='flex3' onMouseOver={shu} onMouseOut={bham}>
            {/* <RestoranState1/> */}
            <i class={c} style={{fontSize:'40px',marginTop:'30px',color:'orange',marginLeft:'20px'}}></i>
        <p style={{fontWeight:'bolder',marginLeft:'10px'}}>{g}</p>
        <p style={{marginLeft:'10px'}}>{k}</p>
        </div>
        <div className='flex4' onMouseOver={moh} onMouseOut={hit}>
            {/* <RestoranState1/> */}
            <i class={d} style={{fontSize:'40px',marginTop:'30px',color:'orange',marginLeft:'20px'}}></i>
        <p style={{fontWeight:'bolder',marginLeft:'10px'}}>{h}</p>
        <p style={{marginLeft:'10px'}}>{l}</p>
        </div>
    </div>
  )
}
