import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import customerSupport from '../images/customerSupport.webp'
import cs1 from '../images/cs1.png'
import cs2 from '../images/cs2.webp'
import dd from '../images/dd.webp'




export default function About() {
  return (
    <div>
      <div className='container aboutDiv'>
        <div className='row row-cols-2 aboutSubMainDiv'>
          <div className='col aboutSubDiv'><img src={customerSupport} class="img-thumbnail imgProperty" alt='myImage'/></div> 
          <div className='col aboutSubDiv'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>       
        </div><br></br>
        <div className='row aboutSubMainDiv'>
          <div className='col aboutSubDiv'><img src={cs1} class="img-thumbnail imgProperty" alt='myImage'/></div>
          <div className='col aboutSubDiv'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>               </div><br></br>
        <div className='row aboutSubMainDiv'>
          <div className='col aboutSubDiv'><img src={cs2} class="img-thumbnail imgProperty" alt='myImage'/></div>
          <div className='col aboutSubDiv'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>       
        </div><br></br>
        <div className='row aboutSubMainDiv'>
          <div className='col aboutSubDiv'><img src={dd} class="img-thumbnail imgProperty" alt='myImage'/></div>
          <div className='col aboutSubDiv'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>       
        </div>
      </div>
    </div>
  )
}
