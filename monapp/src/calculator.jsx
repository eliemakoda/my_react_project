import './calc.css'
import React, { useState } from 'react';

function Frame()
{
    const [etat_actuel , etat_final]=useState('');
    const clicker= (event)=>{
        etat_final(etat_actuel+""+event.target.value)
    };
    const clean= ()=>
    {
        etat_final("");
    }
    const egalite=()=>{
        etat_final(eval(etat_actuel));
    }
    return (
        <div className="calculatrice">
            <input type="text" name="" placeholder="0" id="reponse" value={etat_actuel}/>
            <input type="button" value="1" className="button" onClick={clicker}/>
            <input type="button" value="2" className="button" onClick={clicker}/>
            <input type="button" value="3" className="button" onClick={clicker}/>
            <input type="button" value="4" className="button" onClick={clicker}/>
            <input type="button" value="5" className="button" onClick={clicker}/>
            <input type="button" value="6" className="button" onClick={clicker}/>
            <input type="button" value="7" className="button" onClick={clicker}/>
            <input type="button" value="8" className="button" onClick={clicker}/>
            <input type="button" value="9" className="button" onClick={clicker}/>
            <input type="button" value="0" className="button" onClick={clicker}/>
            <input type="button" value="+" className="button" onClick={clicker}/>
            <input type="button" value="-" className="button" onClick={clicker}/>
            <input type="button" value="/" className="button" onClick={clicker}/>
            <input type="button" value="%" className="button" onClick={clicker}/>
            <input type="button" value="*" className="button" onClick={clicker}/>
            <input type="button" value="." className="button" onClick={clicker}/>

            <input type="button" value="clear" className="button btn" onClick={clean}/>
            <input type="button" value="=" className="button btn" onClick={egalite} />

        </div>
    )
}
export default Frame;