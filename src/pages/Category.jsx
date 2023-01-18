import React,{useState,useEffect} from 'react'
import axios from 'axios'
 
import LeftPart from '../components/category/leftPart/LeftPart'
import RightPart from '../components/category/rightPart/RightPart'

const Category = () => {
    
   // fetch data from api and pass as a props
    const [data,setData]=useState([]);

    const getData=async()=>{
        const res = await axios.get("https://transaction-sbie.onrender.com/api/category");
        setData(res.data);
    }
 
    useEffect(()=>{
        getData();
    },[])
 
    // console.log(data);
  return (
    <div className='grid grid-cols-1 xl:grid-cols-5 w-full col-span-10' >
         <LeftPart getData={getData}  />
         <RightPart data={data} />
        </div>
  )
}

export default Category