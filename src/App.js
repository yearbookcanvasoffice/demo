import React from "react";

function App() {
  return (
    <>
    <div onContextMenu={(e)=>{
      alert("hello sir this not fair")
      e.preventDefault()
    }} className="App">
      hello
    </div>
    </>
  );
}

export default App;
