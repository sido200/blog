import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id}=useParams();
    const {data:blog,error,isPanding}=useFetch("http://localhost:3000/blogs/"+id);
    const history=useHistory();
    const Handeldelete=()=>{
        fetch('http://localhost:3000/blogs/'+blog.id,{
            method:'DELETE'
            
        }).then(()=>{
history.push("/")
        })
    }
    return ( 
        
        <div className="blog-details">
            <h2>Blog Details </h2>
            <article>
                {isPanding && <div>loading...</div>}
                {error && <div>{error}</div>}
                {blog && <article>
                    <h2>{blog.titel}</h2>
                    <p> Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={Handeldelete}>Delete</button>
                    </article>}
            </article>
        </div>
     );
}
 
export default BlogDetails;