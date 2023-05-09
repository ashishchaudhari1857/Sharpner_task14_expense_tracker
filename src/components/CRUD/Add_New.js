import { useState } from "react";
import { Expenseform } from "../Expenseform_user/Expenseform";
import './Add_New.css'
const Add_New = (props) => {
  // const[prevUsers ,setUsers]=useState(props.Users)
  const {setUsers} =props;
   const [isedit ,setisedit]=useState(false);
   const startEditHandler=()=>{
    
     setisedit(true);
   }
   const startCancelHandler=()=>{
    
    setisedit(false);
  }
  const addExpenseHandler = (event) => {

    event.preventDefault();
    const newExpense = {
      
      date: event.target.date.value ? new Date(event.target.date.value) : null,
      purpose: event.target.purpose.value,
      amount: event.target.price.value,
    };
    console.log("hey");
    console.log(newExpense);
    setUsers((prevUsers) => [...prevUsers, newExpense]);
    console.log(props.Users);
    event.target.reset();
    console.log(props.Users);
  };
  return (
    <>
    
      {!isedit && <button className="new-expenses" onClick={startEditHandler}>Add_New_Expenses</button>}
      {  isedit && <Expenseform add={addExpenseHandler} onCancel={startCancelHandler}></Expenseform>}
      
     </>
  );
}
export {Add_New};
