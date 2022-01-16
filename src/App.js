 import { SettingsPowerRounded } from '@material-ui/icons';
import React, { useRef, useState } from 'react';
 import ReactPlayer from 'react-player';
 import Bs from './BottomSheet';
 import Tools from './react-sketch/src/tools';
 import Picker from './Colorpicker';
//  import  from 'react-spring-bottom-sheet';
 import './App.css';
 import './Styles.css';
 import { SketchField } from './react-sketch/src/components/SketchField/index';
import picker from './Colorpicker';
import CanvasDraw from "react-canvas-draw";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
function App() {
   const [open,setOpen]=useState(false);
  const onDismiss=()=>{
    setOpen(false);
  }
  const [state,setState]=useState( {
    lineWidth: 10,
    lineColor: 'black',
    fillColor: '#ccffcc',
    backgroundColor: '#ffcccc',
    shadowWidth: 0,
    shadowOffset: 0,
    tool: Tools.Pencil,
    enableRemoveSelected: false,
    fillWithColor: false,
    fillWithBackgroundColor: false,
    drawings:[],
    canUndo: true,
    canRedo: false,
    undoSteps:15,
    controlledSize: false,
    sketchWidth: 1500,
    sketchHeight: 300,
    stretched: true,
    stretchedX: false,
    stretchedY: false,
    originX: 'left',
    originY: 'top',
    imageUrl: 'https://files.gamebanana.com/img/ico/sprays/4ea2f4dad8d6f.png',
    expandTools: false,
    expandControls: false,
    expandColors: false,
    expandBack: false,
    expandImages: false,
    expandControlled: false,
    enableCopyPaste: false
  }
)
  const handle=(col)=>
  {
    console.log(col,'color');
   
     setState({...state,
       lineColor:col.hex,
      //  fillColor:col.hex
     }  
     )
    setOpen(false);
  }
 
  const handleClick=(val)=>{
     setOpen(false);
     setState({...state,
      tool:Tools[val],
      enableRemoveSelected: Tools[val] === Tools?.Select,
      enableCopyPaste: Tools[val] === Tools?.Select
    })
   }
  return(
    <div className="parent"  >
      <ReactPlayer
       width='100%'
       height='100%'
      controls 
      url='https://www.youtube.com/watch?v=7sDY4m8KNLc'/>
      <div className="child" >
      <button className='Bottom' onClick={()=>setOpen(true)}>Open</button>
      <Bs
      open={open}
      onDismiss={onDismiss}
      handleClick={handleClick}
      handle={handle}
      state={state}
      />
      
      </div>
    </div>
  );
}
export default App;
