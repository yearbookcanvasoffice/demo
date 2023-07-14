import React, { useEffect, useState } from "react";
import Start from "./startcompo/Start";
import Poster from './poster/Poster.jsx'
import Pos from "./po/Pos";


function App() {



  




  const [start, SetStart] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      SetStart(!start);
    }, 4000)
  }, [])






  return (
    <>
      <div className="App">

        {
          start ? <Start /> : null
        }
        <div className="com">
          {/* <Poster /> */}

         <Pos/>

        </div>
      </div>
    </>
  );
}

export default App;


