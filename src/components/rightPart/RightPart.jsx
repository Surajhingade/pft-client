import React from "react"; 
import TransactionTable from '../TransactionTable/TransactionTable.jsx'


const RightPart = ({data}) => {
  return (
    <>
    <TransactionTable data={data} />
    </>
  
  );
};

export default RightPart;
