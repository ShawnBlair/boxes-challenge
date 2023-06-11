import React from "react"
import Box from "./Box"
import boxes from "./boxes"

export default function App(){
    
    const [bx, setBx] = React.useState(boxes)
    
    function toggle(id){
        setBx(bx=> {
            return bx.map(box=> box.id === id ?{...box,on: !box.on}: box)})
    }   
     
    const bxes =  bx.map(box =>    
        {return(
            <Box 
                key={box.id} 
                on={box.on} 
                handleClick={() => toggle(box.id)} 
            />)}
            
    )    
    return(
      <main> hi </main>
        // <main>{bxes}</main>        
    )    
}


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
