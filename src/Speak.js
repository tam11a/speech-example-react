import React from 'react'
import './Speak.css'
import Say from './Say';

export default function Speak({text}) {
    const chillao = () => {
        eventFire(document.querySelector(".hide-button > button"), "click")
    }

    function eventFire(el, etype){
        if (el.fireEvent) {
          el.fireEvent('on' + etype);
        } else {
          var evObj = document.createEvent('Events');
          evObj.initEvent(etype, true, false);
          el.dispatchEvent(evObj);
        }
      }

    return (
        <div>
            <p onClick={chillao}>{text}</p>
            <div className="hide-button">
                <Say text={text}/>
            </div>
        </div>
    )
}
