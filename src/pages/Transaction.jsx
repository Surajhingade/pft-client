import React,{useState,useEffect} from 'react'
import LeftPartForm from '../components/leftPart/LeftPartForm'
import RightPart from '../components/rightPart/RightPart'
 
 
import axios from 'axios'

const Transaction = () => {


   // Fetch data
    const [data,setData]=useState([]);
    const [category,setCategory] = useState([]);

    const getData=async()=>{
        const res = await axios.get("https://transaction-sbie.onrender.com/api/transaction");
        setData(res.data);
    }

    const getCategory=async()=>{
      const res = await axios.get("https://transaction-sbie.onrender.com/api/category");
      setCategory(res.data)
    }

    useEffect(()=>{
        getData();
        getCategory()
    },[])

    // console.log(data);

     
 

  return (
    
         <div className='grid grid-cols-1 xl:grid-cols-5 w-full col-span-10' >
          <LeftPartForm getCategory={category} getData={getData} /> 
          <RightPart data={data} />
        </div>
   
  )
}

export default Transaction