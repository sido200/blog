import { useEffect,useState } from "react";
const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isPanding,setIsPanding]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
     const abortCont=new AbortController();
setTimeout(() => {
    fetch(url,{signal:abortCont.signal})
    .then(res=>{
     
        if(!res.ok){
         throw Error('err');
        }
     return res.json()
    })
    .then((data)=>{
   setData(data);
   setIsPanding(false);
   setError(null)

    })
    .catch(err=>{
        if(err.name==="AbortError"){
            console.log(" Fetch Abort");
        }
        setIsPanding(false);
setError(err.message);


    })
 return()=>abortCont.abort();
}, 1000);
    },[url])
    return {data,isPanding,error}
}
export default useFetch;