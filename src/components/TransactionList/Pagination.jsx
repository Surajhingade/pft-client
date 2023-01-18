import React,{useState,useEffect} from 'react'

const Pagination = ({postPerPage,totalPost,paginate,previous,next}) => {

    const pageNumber = [];
 
    for(let i=1; i<= Math.ceil(totalPost/postPerPage); i++){
        pageNumber.push(i);
    }

    const [arrOfCurrentButton,setArrOfCurrentButton] = useState([]);
    const [currentButton,setCurrentButton]=useState(1);

    useEffect(()=>{
        let tempNumberOfPage = [...pageNumber]

        if(currentButton >= 1 && currentButton <= 2){
            tempNumberOfPage = [1,2,3,"..." ]
        }
        else if(currentButton === 4 ){
            const sliced = pageNumber.slice(0,3)
            tempNumberOfPage = [...sliced,"..."]
        }

        setArrOfCurrentButton(tempNumberOfPage)
    },[currentButton])

  return (
    <div className='flex flex-row  pt-8 items-center justify-center w-full' >
            <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
            <li>
            <a href="#" onClick={()=>previous(1)}  className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            {arrOfCurrentButton.map((number)=>{
                return(
                    <li key={number} >
            <a href="#" onClick={()=>paginate(number)} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{number}</a>
            </li>
                )
            })}
            
            <li>
            <a href="#" onClick={()=>next(1)} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
        </nav>
        </div>
  )
}

export default Pagination

