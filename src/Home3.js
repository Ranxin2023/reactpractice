import { useEffect, useState } from "react"
import BlogList from "./BlogList"
const Home3=()=>{
    const [blogs, setBlogs]=useState([
        {title:"Titanic", body:"a movie first exhibited in 1997", author:"James Cameron", id:1},
        {title:"Avenger4", body:"a movie first exhibited in 2019", author:"Joss Whedon", id:2},
        {title:"Avendar", body:"a movie first exhibited in 2009", author:"James Cameron", id:3}
        
    ])
    const handleDelete=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log("use effect ran");
    })
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
        </div>
    )
    
}

export default Home3;