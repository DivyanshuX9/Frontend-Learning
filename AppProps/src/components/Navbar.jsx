import React, { useEffect } from "react";

const Navbar=({color})=>{

    useEffect(()=>{
        alert("Color was Chanegd")
    },[color])
    
    
  //Run on every render
  useEffect(()=>{
    alert("Hey welcome to my page")
  })

//Run on first Render
useEffect(()=>{
  alert("Hey welcome to my page. This is the first render")
},[])

useEffect(()=>{
    return(
        alert(Unmounted)
    )
})
    return (
        <div>
            I am a Navbar of {color} color hehe...
        </div>
    )
}

export default Navbar