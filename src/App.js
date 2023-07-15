import React, { useEffect, useRef, useState } from "react";
import Start from "./startcompo/Start";
import Poster from './poster/Poster.jsx'
import Pos from "./po/Pos";


function App() {

  const [start, SetStart] = useState(true);
  const [dataarr, Setdataarr] = useState([]);
  const Data=["puma","tiger","lion","car","developer","bold","sex","poco","apple","bolding","bomb"];
  const InpTag=useRef();

  
   
   

  // useEffect(() => {

  //   setTimeout(() => {
  //     SetStart(!start);
  //   }, 4000)
  // }, [])

     
     


  function DataSearch(tag)
  {
       console.log(tag.value.length);
    if(tag.value.length!=0)
    {
      const NewArray =  Data.filter((e,i,arr)=>{
        return(e.startsWith(tag.value))
      })
      Setdataarr([...NewArray])

    }
    else
    {
      Setdataarr([])
    }
   
  }



  return (
    <>
      <div className="App">

        {/* {
          start ? <Start /> : null
        } */}
        <div className="com">
          {/* <Poster /> */}

       
         {/* <Pos/> */}
         {/* Search  */}
          
         <input ref={InpTag} onChange={(e)=>{
             DataSearch(e.target)
         }}  type="search" />

         {/* data render */}

         { dataarr.length!=0 ? (<div className="pad12" style={{background:"white",height:"200px",width:"49.99vw",overflowY:"Scroll"}}>
          {
            dataarr.map((e,i,arr)=>{
              return(<div  key={i} onClick={(e)=>{
                InpTag.current.value=e.target.innerText;
              }} style={{textAlign:'center',cursor:"pointer"}}>{e}</div>)
            })
          }
         </div>) : null}

        </div>
      </div>
    </>
  );
}

export default App;


