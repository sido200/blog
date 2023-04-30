import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
 
const {data:blogs,isPanding,error}=useFetch('')
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
        {isPanding&&<div>loading...</div> }
         {blogs &&<BlogList blogs={blogs} titel="All Blogs!" />}
         
         
        </div>
     );
}
 
export default Home;