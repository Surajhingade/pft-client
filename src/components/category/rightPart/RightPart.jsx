import React,{useState} from 'react'
import Pagination from '../../TransactionList/Pagination'


const RightPart = ({data}) => {
    
    // pagination work
    const [postsPerPage,setPostsPerPage]=useState(17)
    const [currentPage,setCurrentPage]=useState(1);
 

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost -  postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost); 

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const previous = (pageNumber) => setCurrentPage(currentPage - 1);
    const next = (pageNumber) => setCurrentPage(currentPage + 1); 
 
  return (
    <div className="col-span-3  items-start justify-start  flex flex-col w-full overflow-auto pt-0 xl:pt-4 pb-6">
    <div className=" ml-4 xl:m-6   " >
        <h1 className="text-xl pl-0 mb-3 font-medium text-2xl ">Category Type</h1>
        <table className="w-full overflow-y-auto flex flex-col  "  >
            <thead className="bg-gray-300 border-b-2 border-gray-200 items-center justify-center " >
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap w-[100px] xl:w-[250px]  " >Category</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap w-[100px] xl:w-[400px]   "  >Category Type</th>
                    
                </tr>
            </thead>
            
            <tbody className="border ">
             
                    {currentPosts?.map((x)=>{
                        return(
                            <tr className="bg-white border-b" key={x.id} >
                                 <td className="p-1 text-sm text-gray-700 w-[100px] xl:w-[250px] ">{x.category}</td>
                                 <td className="p-1 text-sm text-gray-700 w-[100px] xl:w-[400px] ">{x.categorytype}</td>
                            </tr>
                        )
                    })} 
                      
            </tbody>
        </table>   
        <Pagination postPerPage={postsPerPage} totalPost={data.length} paginate={paginate} previous={previous} next={next} />
    </div>
 </div>
  )
}

export default RightPart