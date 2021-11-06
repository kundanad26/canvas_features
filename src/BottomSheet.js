import React, { useState,useRef } from 'react';
import {BottomSheet} from 'react-spring-bottom-sheet';
import {BsPenFill} from 'react-icons/bs';
import {IoMdUndo,IoMdRedo} from 'react-icons/io'
import { ChromePicker } from 'react-color';
import {SketchField} from 'react-sketch';
import './Styles.css'
import Picker from './Colorpicker';
import { colors } from '@material-ui/core';
const Bs=React.forwardRef((props)=>{
    const {open,onDismiss,handleClick,handle,state}=props;
    const defaultSketchValue = {
        objects: [],
        background: '#ffffff'
      }
const sketchRef=useRef();
return(
<div>
<div className="Button">
    <button onClick={sketchRef?.current?.undo}><h3>Undo</h3></button>
    <button onClick={sketchRef?.current?.redo}><h3>Redo</h3></button>
    <button onClick={sketchRef?.current?.addText('text')}><h3>Text</h3></button> 
</div>
<BottomSheet 
open={open}
onDismiss={onDismiss}
snapPoints={({ minHeight }) => minHeight}
>
<div className='InsideBottomSheet'>
    <div className="Button">
    <button onClick={()=>{handleClick('Pencil')}}><h3>Pencil</h3></button>
    </div>
    <div className="Button">
    <button onClick={()=>{handleClick('Line')}}> <h3>Line</h3></button>
    </div>
    <div className="Button">
    <button onClick={()=>{handleClick('Rectangle')}}><h3>Rectangle</h3></button>
    </div>
    <div className="Button">
    <button onClick={()=>{handleClick('Circle')}}><h3>Circle</h3></button>
    </div> 
    <div className="Button">
    <button onClick={()=>{handleClick('Pan')}} > <h3>Pan</h3></button>
    </div>
    <div className="Button">
    <button><h3><Picker
   handle={handle}
    /></h3></button>
    </div>
</div>
</BottomSheet>
<div style={{background: '#000', padding: 10}}>
              <SketchField  
            ref={sketchRef}
            // onChange={onChangeSketch}
            width={state.sketchWidth}
            height={state.sketchHeight}
            tool={state.tool}
            lineColor={state.lineColor}
            lineWidth={state.lineWidth}
            fillColor={
              state.fillWithColor ? state.fillColor : 'transparent'
            }
            backgroundColor={state.backgroundColor}
            defaultValue={defaultSketchValue}
          />
            </div>
</div>

)})
export default Bs;