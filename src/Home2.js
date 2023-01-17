import { useState } from "react"
import BlogList from "./BlogList";

const Home2=()=>{
    const [blogs, setBlogs]=useState([
        {title:"Titanic", body:"a movie first exhibited in 1997", author:"James Cameron", id:1},
        {title:"Avendar", body:"a movie first exhibited in 2009", author:"James Cameron", id:2},
        {title:"Avenger4", body:"a movie first exhibited in 2019", author:"Joss Whedon", id:3}
    ])
    return (
        <div className="home">
            
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog)=>blog.author==="James Cameron")} title="James Cameron's movie"/>
            
            
        </div>
    )
}
export default Home2;