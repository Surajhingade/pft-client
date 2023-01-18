// Chart for Revenue month wise total 
// step filter data on category with revenue then  calclulate total month wise
import React,{useState,useEffect} from 'react';
import {  LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,BarChart, Bar,  Legend } from 'recharts';

const BarCharts = ({transactions}) => {

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   // console.log(transactions)
   // Filter transactions by category first Cost of Goods Sold change category for further category 

   const filteredTransactions = transactions.filter(transaction => {
    return transaction.category === 'Revenue';
  });
   // console.log(filteredTransactions)

  const filteredTransactions1 = transactions.filter(transaction => {
    return transaction.category === 'Expenses';
  });
 


  // Group transactions by month for Revenue
  const groupedByMonth = filteredTransactions.reduce((acc, curr) => {
    const month = new Date(curr.date).getMonth();
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(curr);
    return acc;
  }, {});


// Group transactions by month for Expenses
  const groupedByMonthExpenses = filteredTransactions1.reduce((acc, curr) => {
    const month = new Date(curr.date).getMonth();
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(curr);
    return acc;
  }, {});


    // console.log(groupedByMonth) 

    // Compute total for each month for Revenue
    const totalsByMonth = Object.entries(groupedByMonth).map(([month, transactions]) => {
      return {
        month: monthNames[month],
        total: transactions.reduce((acc, curr) => acc + parseFloat(curr.amount), 0)
      };
    });


     // Compute total for each month for Expenses
     const totalsByMonthExpenses = Object.entries(groupedByMonthExpenses).map(([month, transactions]) => {
      return {
        month: monthNames[month],
        total: transactions.reduce((acc, curr) => acc + parseFloat(curr.amount), 0)
      };
    });
 
    // console.log(totalsByMonthExpenses);

   

 
  return (
 <div> 
{/* Revenue chart mobile and desktop view */}
   <div className=" hidden sm:block items-center justify-center m-3 p-2">
    <h2 className="text-xl font-medium text-blue-700  " >Total Revenue</h2>
    <LineChart width={600} height={300} data={totalsByMonth}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <Line type="monotone" dataKey="category" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    </LineChart>
    </div>
  
    <div className=" block xl:hidden items-center justify-center m-3 p-2">
    <h2 className="text-xl font-medium text-blue-700  " >Total Revenue </h2>
    <LineChart width={300} height={300} data={totalsByMonth}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <Line type="monotone" dataKey="student" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    </LineChart>
    </div>
  
 {/* Expenses chart mobile and desktop view */} 
    <div className=" hidden sm:block items-center justify-center m-3 p-2">
    <h2 className="text-xl font-medium text-blue-700 " >Total Expenses</h2>
    <BarChart width={600} height={300} data={totalsByMonthExpenses}>
    <XAxis dataKey="month" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="total" fill="#8884d8" barSize={30} />
    </BarChart>
    </div>

    <div className="block xl:hidden items-center justify-center m-3 p-2">
    <h2 className="text-xl font-medium text-blue-700 " >Total Expenses</h2>
    <BarChart width={300} height={300} data={totalsByMonthExpenses}>
    <XAxis dataKey="month" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="total" fill="#8884d8" barSize={30} />
    </BarChart>
    </div>  
</div>




  )
}

export default BarCharts



