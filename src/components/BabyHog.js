import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({name, hobby, eyeColor}) {
  const [weight, setWeight] = useState(0)
  const  imageHeight = 200
  const imageEyecolor = [eyeColor].map((color)=>{
    if(color === 'glowing'){
      return GlowingBaby
    }
    else if (color === 'blue'){
      return BlueBaby
    }
    else if(color === 'sun'){
      return SunBaby
    }
    else {
      return normalBaby
    }
  })

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    
    e.target.name === "+" ? setWeight(() =>weight+1) : setWeight(() => weight-1) 
  }

 
  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight} >Increase Weight</button>
      <button name="-" onClick={handleChangeWeight} >Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={imageEyecolor}
          style={{ height: `${imageHeight+weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
