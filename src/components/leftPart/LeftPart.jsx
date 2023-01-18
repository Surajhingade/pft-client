import React from 'react'


// part of dashbord left side 

const LeftPart = ({transactions}) => {


    const filteredTransactions = transactions.filter(transaction => {
        return transaction.category === 'Revenue';
      });

      const filteredTransactionsExpenses = transactions.filter(transaction => {
        return transaction.category === 'Expenses';
      });

      const filteredTransactionsCostOfSoldGood = transactions.filter(transaction => {
        return transaction.category === 'Cost of Goods Sold';
      });
    //   console.log(filteredTransactions)

      const total = filteredTransactions.reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
      const totalExpenses = filteredTransactionsExpenses.reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
      const totalCostOfGood = filteredTransactionsCostOfSoldGood.reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
    //   console.log(total)

    // calculate profit and loss 
    const profitLoss = (total + totalCostOfGood) - totalExpenses ;


  return (
    <div className='col-span-2 min-h-[90vh] border-r border-feay-200 items-start justify-start flex flex-col w-full  ' >
        <div className='w-full items-start justify-start flex flex-col px-12 pt-6 pb-1 '>
            <h1 className='font-bold text-xl  xl:text-2xl pb-2 ' >PriFab Tyre </h1>
            <p className='text-md text-gray-800' > Here is the total revenue , expenses and cost of good sale of PriFab tyre industry. </p>
            <div className='items-start rounded-tl-3xl justify-start flex flex-col px-6 pt-4 pb-4 bg-[#8cfc75aa] mt-6 w-full ' >
                <h1 className='text-xl ' >Total Revenue</h1>
                <h1 className='text-3xl xl:text-5xl font-bold ' >Rs {total}</h1>
            </div>
        </div>

        <div className='w-full items-start justify-start flex flex-col px-12 pt-2 pb-2 '>
            <div className='items-start rounded-tl-3xl justify-start flex flex-col px-6 pt-4 pb-4 bg-[#fa8888e9] mt-6 w-full ' >
                <h1 className='text-xl text-white  ' >Total Expenses</h1>
                <h1 className='text-3xl xl:text-5xl font-bold text-white ' >Rs {totalExpenses}</h1>
            </div>
        </div>

        <div className='w-full items-start justify-start flex flex-col px-12 pt-2  '>
            <div className='items-start rounded-tl-3xl justify-start flex flex-col px-6 pt-4 pb-4 bg-[#d1f6f0aa] mt-6 w-full ' >
                <h1 className='text-xl   ' >Total Cost of good sold</h1>
                <h1 className='text-3xl xl:text-5xl font-bold  ' >Rs {totalCostOfGood}</h1>
            </div>
        </div>

        <div className='w-full items-start justify-start flex flex-col px-12 pt-2   '>
            <div className='items-start rounded-tl-3xl justify-start flex flex-col px-6 pt-4 pb-4 bg-[#000000e9] mt-6 w-full ' >
                <h1 className='text-xl text-white  ' >Total Profit(Loss)</h1>
                <h1 className='text-3xl xl:text-5xl font-bold text-white ' >Rs {profitLoss}</h1>
            </div>
        </div>
    </div>
  )
}

export default LeftPart