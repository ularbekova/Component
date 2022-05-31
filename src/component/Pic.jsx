import React from 'react'
import Green from '../img/Photo BG.png'
import Woman from '../img/woman.png' 
import In from '../img/in.png'
import Rectangle1 from  '../img/Rectangle (1).png'
import Rectangle2 from '../img/Rectangle (2).png'
const Pic = () => {
  return (
    <div>
      <div class="green">
    <img src= {Green}/>
 </div>

 <div class="girl">
    <img src={Woman}/>
</div>

<div class="insta">
    <img src={In}/>
    <img src={Rectangle1}/>
    <img src={Rectangle2}/>
</div>
</div>
  )
}

export default Pic