import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LeftPart = ({getData}) => {

     // Error handling
     const [error, setError] = useState({});
    // Form data
    const [data, setData] = useState({
     category: "Expenses",
     categorytype: "",
  });


   // use reducer for rerender the component again
   const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

    // Form validation
    const validateForm = () => {

        const { category, categorytype} = data;
        const newErrors = {};
    
        
        if (!categorytype || categorytype === "") {
          newErrors.categorytype = "Please enter category type";
        }
        if (!category || category === "") {
          newErrors.category = "Please Select any one from drop down";
        }
    
        return newErrors;
      };

  // Handle Form submit action
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataErrors = validateForm();

    // if else for the data is not filled the dont push data to db show error message then push to db
    if (Object.keys(dataErrors).length > 0) {
      setError(dataErrors);
    } else {
      const postData = await axios.post(
        "https://transaction-sbie.onrender.com/api/category",
        {
          category: data.category,
          categorytype: data.categorytype
        }
      );

      forceUpdate();
      setData({
        category: "Expenses",
        categorytype: ""
      });
      setError("");
      toast("Data added successfully")
    }
    // console.log("Submit button is clicked")
  
  };

  // Handle change function to grap form input data in data variable
  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData)

    if (!!error[e.target.id]) {
      setError({
        ...error,
        [e.target.id]: null,
      });
    }
  };


// render componet 
  useEffect(() => {
    getData();
  }, [reducerValue]);


  return (
    <div className='col-span-2 min-h-[30vh]   border-r border-feay-200 items-start justify-start flex flex-col w-full' >
    <div className="w-full items-start justify-start flex flex-col  px-12 pt-8 pb-6  ">
        <div className="py-8 px-1">
          <h2 className="text-2xl font-thin xl:font-medium mb-4 items-center justify-center">
            ADD CATEGORY TYPE
          </h2>
          <p className="text-md text-gray-400 pb-2 mr-2 xl:text-xl ">
            Enter Your Category Type
          </p>

          {/* Form  */}
          <form onSubmit={handleSubmit}>
            <div className="text-red-500 h-[50px] flex items-center justify-center">
              {!!error.categorytype ? error.categorytype : ""} 
            </div>
            <div className="w-full flex flex-col items-start justify-start mb-2 ">
              <label
                htmlFor="country"
                className="block text-xl pb-2 pt-2 font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="country"
                value={data.category}
                onChange={(e) => handle(e)}
                autoComplete="country-name"
                className=" block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-gray-400"
              >
                <option>Expenses</option>
                <option>Cost of Goods Sold</option>
                <option>Revenue</option>
              </select>
            </div>
           
            <div className="w-full flex flex-col items-start justify-start mb-2 ">
              <label
                htmlFor="first-name"
                className="block text-xl font-medium text-gray-700"
              >
                Category Type
              </label>
              <input
                type="text"
                name="categorytype"
                id="categorytype"
                value={data.categorytype}
                onChange={(e) => handle(e)}
                placeholder="Category type"
                autoComplete="given-name"
                className="my-1 block w-full outline:none border rounded-md py-1 px-3 xl:py-2 xl:px-4  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button className="w-full border px-2 py-2 text-white bg-black">
              Add Category Type
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default LeftPart