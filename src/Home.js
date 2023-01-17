import { useState } from "react"
const Home=()=>{
    const [name,setName]=useState("Randy");
    const handleClick=()=>{
        setName("Ranxin")
    }
    const handleClickAgain=(name)=>{
        console.log('hello',name)
    }
    const handleEvent=(name,e)=>{
        console.log('hello '+name,e.target)
    }
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>My name is {name}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=>handleClickAgain("Randy")}>Click me again</button>
            <button onClick={(e)=>handleEvent("Randy", e)}>Click for event</button>
            
        </div>
    );
}

export default Home;