import React from "react";

function App() {
  return (
    <>
    <div onContextMenu={(e)=>{
      
      e.preventDefault()
    }} className="App">
      hello
    </div>
    </>
  );
}

export default App;
