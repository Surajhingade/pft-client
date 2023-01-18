import React,{useState,useEffect} from 'react'
import axios from 'axios'
import LeftPart from '../components/leftPart/LeftPart' 
import BarCharts from '../components/chart/BarCharts'
 
const Dashbord = () => {


  
   // Fetch data
   const [data,setData]=useState([]);
   const getData=async()=>{
       const res = await axios.get("https://transaction-sbie.onrender.com/api/transaction");
       setData(res.data);
   }

   useEffect(()=>{
       getData();
   },[])

  //  console.log(data);

  return (
    <div className='grid grid-cols-1 xl:grid-cols-5 w-full col-span-10' >
     <LeftPart transactions={data} />
     <BarCharts transactions={data} />
     </div>
  )
}

export default Dashbord