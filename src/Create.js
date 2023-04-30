import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
   
    const [titel,setTitel]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState("mario")
    const [isPanding,SetIsPanding]=useState(false)
    const history=useHistory();
    const HandelSubmuit=(e)=>{
        e.preventDefault()
        const blog={titel,body,author}
        SetIsPanding(true)
        fetch('http://localhost:3000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{console.log("added")})
        SetIsPanding(false)
        history.push("/")
    }
    return ( 
  <div className="create">
    <h2>add new blog </h2>
  <form  onSubmit={HandelSubmuit}>
  
   <label>blog titel:</label>
   <input type="text" 
   value={titel}
   onChange={(e)=>setTitel(e.target.value)}
    required/>
   <label>blog body:</label>
    <textarea  required
     value={body}
     onChange={(e)=>setBody(e.target.value)}></textarea>
   <label>author:</label>
    <select  value={author}
   onChange={(e)=>setAuthor(e.target.value)} >
        <option value="mario">mario</option>
        <option value="yoshi">yoshi</option>
       
    </select> 
    {!isPanding&&<button>Add blog</button>}
    {isPanding&&<button disabled>Adding blog ...</button>}
  
    
  </form>
   
  </div>
     );
}
 
export default Create;