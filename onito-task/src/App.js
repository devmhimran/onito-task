import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  console.log(data);
  let info = [];
  const handleForm = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const amount = e.target.amount.value;
    const payment = e.target.payment.value;
    const remark = e.target.remark.value;

    const allData = {
      date: date,
      amount: amount,
      payment: payment,
      remark: remark
    }


    const infoData = [...data, allData];
    setData(infoData);
    console.log(infoData);

  }

  return (
    <div className="container mx-auto">
      <div className='w-full h-screen flex items-center'>
        <div className="container mx-auto  w-6/12">
          <p className='font-semibold'>Receipt Details</p>
          <form onSubmit={handleForm}>
            <div className="grid grid-cols-4 grid-flow-col gap-4 mt-10">
              <div>Date</div>

              <div className='col-span-3'>
                <input className='border border-current w-6/12' type="date" name="date" placeholder='Enter Date' />
              </div>
            </div>
            <div className="grid grid-cols-4 grid-flow-col gap-4 mt-10">
              <div>Amount</div>

              <div className='col-span-3'>
                <input className='border border-current w-6/12' type="number" name="amount" placeholder='Enter Amount' />
              </div>
            </div>
            <div className="grid grid-cols-4 grid-flow-col gap-4 mt-10">
              <div>Payment Method</div>

              <div className='col-span-3'>
                <select className='border border-current w-6/12' name="payment" >
                  <option value="cash">Cash</option>
                  <option value="card">Card</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-4 grid-flow-col gap-4 mt-10">
              <div>Remark</div>

              <div className='col-span-3'>
                <input className='border border-current w-6/12' type="text" name="remark" placeholder='Enter Remark' />
                <div>
                  <input className='mt-10 py-3 px-7 bg-lime-500 text-white' type="submit" name="submit" value="submit" />
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>

      <div className="container flex justify-center py-10">
        <table class="table-auto w-96">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
         
            {
              data.map(tableData => 
                <tr>
                  <td>{tableData.date}</td>
                  <td>{tableData.amount}</td>
                  <td>{tableData.payment}</td>
                  <td>{tableData.remark}</td>
                </tr>
              )
            }
           

          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
