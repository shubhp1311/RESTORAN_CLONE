import React, { useState } from 'react'

export default function RestoranReservation() {
  const[p,setname]=useState("");
  const[q,setmail]=useState("");
  const[r,setdate]=useState("");
  const[s,setpeople]=useState("");
  const[t,setmsg]=useState("");

  let xyz=(e)=>{
    e.preventDefault();
    document.getElementById("a").innerHTML=`Name :- ${p}`;
    document.getElementById("b").innerHTML=`Email :- ${q}`;
    document.getElementById("c").innerHTML=`Date :- ${r}`;
    document.getElementById("y").innerHTML=`Peoples :- ${s}`;
    document.getElementById("d").innerHTML=`Message :- ${t}`;

  }

  return (
    <>
        <br/><br/><br/><br/><br/>
        <form onSubmit={xyz}>
        <div className='reserve'>
            <div className='res1'>
              <h2 id='a' style={{color:'white', marginLeft:'20px',fontFamily:"cursive",marginTop:'60px'}}></h2>
              <h2 id='b' style={{color:'white', marginLeft:'20px',fontFamily:"cursive"}}></h2>
              <h2 id='c' style={{color:'white', marginLeft:'20px',fontFamily:"cursive"}}></h2>
              <h2 id='y' style={{color:'white', marginLeft:'20px',fontFamily:"cursive"}}></h2>
              <h2 id='d' style={{color:'white', marginLeft:'20px',fontFamily:"cursive"}}></h2>

            </div>
            <div className='res2'>
                <h3 style={{color:'orange',marginLeft:'20px',lineHeight:'20px',fontFamily:'cursive'}}>Reservation---</h3>
                <h1 style={{color:'white',fontWeight:'bolder',marginLeft:'20px',fontFamily:'cursive'}}>Book A Table Online</h1>
                <input type='text' placeholder='Your Name' onChange={(e)=>setname(e.target.value)} style={{height:'50px',width:'250px',marginLeft:'20px'}}/>

                <input type='email' placeholder='Your Email' onChange={(e)=>setmail(e.target.value)} style={{height:'50px',width:'250px',marginLeft:'20px'}}/>

                <input type='date' placeholder='Date & Time' onChange={(e)=>setdate(e.target.value)} style={{height:'50px',width:'250px',marginLeft:'20px',marginTop:'20px'}}/>

                <select onChange={(y)=>setpeople(y.target.value)} style={{height:'50px',width:'250px',marginLeft:'20px',marginTop:'20px'}}>
                    <option>People 1</option>
                    <option>People 2</option>
                    <option>People 3</option>
                </select>
                
                <textarea rows="6" cols="69" style={{marginLeft:'20px',marginTop:'20px'}} onChange={(e)=>setmsg(e.target.value)}></textarea>

                <input type='Submit'className="btn btn-warning" style={{height:'50px',width:'520px',marginLeft:'20px',marginTop:'20px'}} name='Book Now' value='Book Now'/>
            </div>
        </div>
        </form>
    </>
  )
}
