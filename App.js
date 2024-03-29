import React from "react"
import Box from "./Box"
import boxes from "./boxes"

export default function App(){
    
    const [bx, setBx] = React.useState(boxes)
    
    function toggle(id){
        setBx((bx)=> {
            return bx.map((box) =>  box.id === id ? {...box , on: !box.on } : box)})
           //return bx.map((box) =>  box.id !== id ? box : { ...box, on: !box.on })})
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
        <main>{bxes}</main>        
    )    
}


