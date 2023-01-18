import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from './Pagination';


const TransactionList = () => {
       // get Data

   const [data,setData]=useState([]);
    
   const [currentPage,setCurrentPage]=useState(1);
   const [postsPerPage,setPostsPerPage]= useState(17);

   const getData=async()=>{
       const res = await axios.get("https://transaction-sbie.onrender.com/api/transaction");
       toast("Data is Fetching");
       setData(res.data);
   }

   useEffect(()=>{
       getData();
   },[])

//   console.log(data);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost -  postsPerPage;
const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost);


// paginate function change page 
const paginate = (pageNumber) => setCurrentPage(pageNumber);
const previous = (pageNumber) => setCurrentPage(currentPage - 1);
const next = (pageNumber) => setCurrentPage(currentPage + 1);

  return (
   
    <>
    
    <div className='grid gird-cols-2 col-span-10  w-full  overflow-auto' >
     <div className="col-span-5  items-start justify-start  flex flex-col w-full pt-0 xl:pt-4 pb-6">
           <div className="xl:m-6 pl-4 " >
    <h1 className="text-xl pl-0 mb-3 font-medium xl:text-2xl ">Transaction</h1>
              <table className="w-full  "  >
                <thead className="bg-gray-300 border-b-2 border-gray-200 items-center justify-center " >
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap w-[200px] " >Category</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap w-[250px] "  >Category Type</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap w-[300px] "  >Description</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap w-[100px] "  >Amount</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap w-[100px] "  >Date</th>
                    </tr>
                </thead>
                <tbody className="border ">
                 
                        {currentPosts?.map((x)=>{
                            return(
                                <tr className="bg-white border-b">
                                     <td className="p-1 text-sm text-gray-700">{x.category}</td>
                                     <td className="p-1 text-sm text-gray-700">{x.categorytype}</td>
                                     <td className="p-1 text-sm text-gray-700">{x.description}</td>
                                     <td className="p-1 text-sm text-gray-700">{x.amount}</td>
                                     <td className="p-1 text-sm text-gray-700">{x.date}</td> 
                                </tr>
                            )
                        })} 
                          
                </tbody>
              </table> 
              <Pagination postPerPage={postsPerPage} totalPost={data.length} paginate={paginate} previous={previous} next={next} />  
           </div>
      </div>
      </div>
      <ToastContainer />
      </>
  )
}

export default TransactionList