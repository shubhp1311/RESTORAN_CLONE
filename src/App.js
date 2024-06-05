import "./RestoranCSS.css"
import React from 'react'
import RestoranNav from "./RestoranNav.js"
import RestoranFlex from "./RestoranFlex.js"
import RestoranAbout from "./RestoranAbout.js"
import RestoranFood from "./RestoranFood.js"
import RestoranArray from "./RestoranArray.js"
import RestoranReservation from "./RestoranReservation.js"
import RestoranTeam from "./RestoranTeam.js"
import RestoranTestinominal from "./RestoranTestinominal.js"
import RestoranFooter from "./RestoranFooter.js"

export default function App() {
  return (
    <div className='container'>
        <RestoranNav/>
        <RestoranFlex/>
        <RestoranAbout/>
        <RestoranFood img={RestoranArray[0].a} name={RestoranArray[0].b} para={RestoranArray[0].c} price={RestoranArray[0].d} btn={RestoranArray[0].e}/>
        
        {/* <RestoranFood img={RestoranArray[1].a} name={RestoranArray[1].b} para={RestoranArray[1].c} price={RestoranArray[1].d} btn={RestoranArray[1].e}/>
        
        <RestoranFood img={RestoranArray[2].a} name={RestoranArray[2].b} para={RestoranArray[2].c} price={RestoranArray[2].d} btn={RestoranArray[2].e}/>
        
        <RestoranFood img={RestoranArray[3].a} name={RestoranArray[3].b} para={RestoranArray[3].c} price={RestoranArray[3].d} btn={RestoranArray[3].e}/>
        
        <RestoranFood img={RestoranArray[4].a} name={RestoranArray[4].b} para={RestoranArray[4].c} price={RestoranArray[4].d} btn={RestoranArray[4].e}/>
        
        <RestoranFood img={RestoranArray[5].a} name={RestoranArray[5].b} para={RestoranArray[5].c} price={RestoranArray[5].d} btn={RestoranArray[5].e}/>
        
        <RestoranFood img={RestoranArray[6].a} name={RestoranArray[6].b} para={RestoranArray[6].c} price={RestoranArray[6].d} btn={RestoranArray[6].e}/>
        
        <RestoranFood img={RestoranArray[7].a} name={RestoranArray[7].b} para={RestoranArray[7].c} price={RestoranArray[7].d} btn={RestoranArray[7].e}/> */}

        <RestoranReservation/>        
        <RestoranTeam/>
        <RestoranTestinominal/>
        <RestoranFooter/>
    </div>
  )
}
