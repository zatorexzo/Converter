import React from 'react'
import './main.css'
import { Arrow } from '../arrow/arrow';

export const Main = () => {
  return (
    <div className='main'>
       
        <h1>Convert</h1>
        <div className='select'>
          <select className='selecter'>
            <option>kilómetros → millas</option>
            <option>millas → kilómetros</option>
            <option>pies → metros</option>
            <option>metros → pies</option>
            <option>centimetros → pulgadas</option>
            <option>pulgadas → centimetros</option>
          </select>
          <Arrow/>

        </div>
        <div className='input'>
          <input type="text" placeholder='Input'/>
          <button className='save'/>
        </div>
        

    </div>
  )
}
