import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const handleForm = (e)=>{
    e.preventDefault();
    const date = e.target.date.value;
    const amount = e.target.amount.value;
    const payment = e.target.payment.value;
    const remark = e.target.remark.value;
    console.log(amount, date, payment,remark )
  }
  return (
    <div className="w-full h-screen flex items-center">

      <div className="container mx-auto  w-6/12">
        <p className='font-semibold'>Receipt Details</p>
        <form onSubmit={handleForm}>
          <div class="grid grid-cols-4 grid-flow-col gap-4 mt-10">
            <div>Date</div>

            <div className='col-span-3'>
              <input className='border border-current w-6/12' type="date" name="date"  placeholder='Enter Date' />
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col gap-4 mt-10">
            <div>Amount</div>

            <div className='col-span-3'>
              <input className='border border-current w-6/12' type="number" name="amount" placeholder='Enter Amount' />
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col gap-4 mt-10">
            <div>Payment Method</div>

            <div className='col-span-3'>
              <select className='border border-current w-6/12' name="payment" >
                <option value="cash">Cash</option>
                <option value="card">Card</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col gap-4 mt-10">
            <div>Remark</div>

            <div className='col-span-3'>
              <input className='border border-current w-6/12' type="text" name="remark" placeholder='Enter Remark' />
            </div>
          </div>
          <input type="submit" name="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
