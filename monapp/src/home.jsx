import React from 'react';
import { useState } from 'react';
import './home.css'
function Home (){
    const cpt=0

   const  [etat_actuel, etat_final]= useState(cpt)
        function clicker()
        {
            etat_final(etat_actuel+1)
        }
        function reset()
        {
            etat_final(0)
        }
    return (
        <div>
        <section>
            <p id="label">
                Compteur 
            </p>
            <p id="btn">
                <button id='bt' onClick={clicker}>
                {etat_actuel} 
                </button>
            </p>
           
        </section>
        <button onClick={reset}>
                reset
                </button>
        </div>
    )
    }
    export default Home;