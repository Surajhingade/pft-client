import React,{useState,useEffect} from 'react'


const TransactionTable = ({data}) => {

    const reverseData = [...data].reverse();
    // console.log(reverseData)

 

  return (
   
        <div className="col-span-3  items-start justify-start  flex flex-col w-full pt-0 xl:pt-4 pb-6">
        <div className="xl:m-6 hidden sm:block" >
            <h1 className="text-xl pl-0 mb-3 font-medium text-2xl ">Transaction</h1>
            <table className="w-full "  >
                <thead className="bg-gray-300 border-b-2 border-gray-200 items-center justify-center " >
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap  xl:w-[100px] " >Category</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap  xl:w-[200px]"  >Category Type</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap  xl:w-[250px]"  >Description</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap "  >Amount</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap "  >Date</th>
                    </tr>
                </thead>
                <tbody className="border ">
                 
                        {reverseData?.slice(0,16).map((x)=>{
                            return(
                                <tr className="bg-white border-b" key={x.id} >
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
        </div>
      
     </div>
    
  )
}

export default TransactionTable