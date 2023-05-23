import React, { useState } from 'react';


const Titlelist = ()=>{
    const [texts , settext] = useState([]);
    const addtitle = (title) =>{
        settext([...texts,{title}]);
    }
    return(
        <ul>
            
        </ul>
    )
}


 
export default Titlelist;