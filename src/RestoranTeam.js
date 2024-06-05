import React, { useState } from 'react'
import RestoranArray from './RestoranArray'

export default function RestoranTeam() {
  const[r,setabc]=useState(0)
  const[p,setpqr]=useState(0)

  let xyz=()=>{
  setabc(r+1)
  }
  let def=()=>{
    setpqr(p+1)
  }

  return (
    <div className='food'>
        <div className='food1'>
            <br/><br/><br/><br/><h4 style={{color:'orange'}}>---Team Members---</h4>
            <h1>Our Master Chefs</h1><br/>
            <div className='chefs'>
                <div className='chef1'>
                  <div className='c1'>
                    <br/><img src={RestoranArray[8].a} alt='' height={200} width={200} style={{borderRadius:"100%"}}></img>
                    <h4>{RestoranArray[8].b}</h4>
                    <span>{RestoranArray[8].c}</span>
                  </div>


                  <div className='c2'>
                    <span><i class="fa fa-thumbs-up" aria-hidden="true" style={{color:"blue",fontSize:"25px",paddingRight:'150px'}} onClick={xyz}></i></span>
                    <span> <i class="fa fa-thumbs-down" aria-hidden="true" style={{color:"blue",fontSize:"25px"}} onClick={def}></i></span>

                    <span style={{paddingRight:'150px',fontSize:"25px"}}>{r}</span>
                    <span style={{fontSize:"25px"}}>{p}</span>

                  </div>
                </div>
                <div className='chef1'>
                <div className='c1'>
                    <br/><img src={RestoranArray[10].a} alt='' height={200} width={200} style={{borderRadius:"100%"}}></img>
                    <h4>{RestoranArray[9].b}</h4>
                    <span>{RestoranArray[9].c}</span>
                  </div>
                  <div className='c2'>
                  <span><i class="fa fa-thumbs-up" aria-hidden="true" style={{color:"blue",fontSize:"25px",paddingRight:'150px'}} onClick={xyz}></i></span>
                    <span> <i class="fa fa-thumbs-down" aria-hidden="true" style={{color:"blue",fontSize:"25px"}} onClick={def}></i></span>

                    <span style={{paddingRight:'150px',fontSize:"25px"}}>{r}</span>
                    <span style={{fontSize:"25px"}}>{p}</span>
                  </div>
                </div>
                <div className='chef1'>
                <div className='c1'>
                    <br/><img src={RestoranArray[9].a} alt='' height={200} width={200} style={{borderRadius:"100%"}}></img>
                    <h4>{RestoranArray[10].b}</h4>
                    <span>{RestoranArray[10].c}</span>
                  </div>
                  <div className='c2'>
                  <span><i class="fa fa-thumbs-up" aria-hidden="true" style={{color:"blue",fontSize:"25px",paddingRight:'150px'}} onClick={xyz}></i></span>
                    <span> <i class="fa fa-thumbs-down" aria-hidden="true" style={{color:"blue",fontSize:"25px"}} onClick={def}></i></span>

                    <span style={{paddingRight:'150px',fontSize:"25px"}}>{r}</span>
                    <span style={{fontSize:"25px"}}>{p}</span>
                  </div>
                </div>
                <div className='chef1'>
                <div className='c1'>
                    <br/><img src={RestoranArray[11].a} alt='' height={200} width={200} style={{borderRadius:"100%"}}></img>
                    <h4>{RestoranArray[11].b}</h4>
                    <span>{RestoranArray[11].c}</span>
                  </div>
                  <div className='c2'>
                  <span><i class="fa fa-thumbs-up" aria-hidden="true" style={{color:"blue",fontSize:"25px",paddingRight:'150px'}} onClick={xyz}></i></span>
                    <span> <i class="fa fa-thumbs-down" aria-hidden="true" style={{color:"blue",fontSize:"25px"}} onClick={def}></i></span>

                    <span style={{paddingRight:'150px',fontSize:"25px"}}>{r}</span>
                    <span style={{fontSize:"25px"}}>{p}</span>
                  </div>
                </div>

            </div>
        </div>
    </div>
  )
}
