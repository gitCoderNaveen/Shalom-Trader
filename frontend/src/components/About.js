import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import customerSupport from '../images/customerSupport.webp'
import cs1 from '../images/cs1.png'
import cs2 from '../images/cs2.webp'
import dd from '../images/dd.webp'




export default function About() {
  return (
    <div>
      <div className='container row-cols-2 aboutDiv'>
        <div className='row aboutSubMainDiv'>
          <div className='col aboutSubDiv'><img src={customerSupport} class="img-thumbnail imgProperty" alt='myImage'/></div>          
        </div><br></br>
        <div className='row aboutSubMainDiv'>
          <div className='col aboutSubDiv'><img src={cs1} class="img-thumbnail imgProperty" alt='myImage'/></div>
        </div><br></br>
        <div className='row aboutSubMainDiv'>
          <div className='col aboutSubDiv'><img src={cs2} class="img-thumbnail imgProperty" alt='myImage'/></div>
        </div><br></br>
        <div className='row aboutSubMainDiv'>
          <div className='col aboutSubDiv'><img src={dd} class="img-thumbnail imgProperty" alt='myImage'/></div>
        </div>

      </div>
    </div>
  )
}
