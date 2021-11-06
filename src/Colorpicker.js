import React, { useState } from "react";
import { ChromePicker } from "react-color";
 
const Picker=({handle})=>{
const [color,setColor]=useState('black');
    return(
        <ChromePicker
        color={color}
        onChange={updatedColor=>{handle(updatedColor);setColor(updatedColor)}}
        />
    )
}
export default Picker;