import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const BankPage = () => {
    const [balance, setBalance]=useState(100)
    const balanceInt=parseInt(balance);

    const [depositShow, setDepositShow]=useState(0);
    const [deposit, setDeposit]=useState(0);

    const depositData = () =>{
        const depositShows=parseInt(depositShow);
        const deposits=parseInt(deposit);
        const depositTotal=depositShows + deposits;
        setDepositShow(depositTotal)
        
        const balanceTotal=balanceInt + deposits;
        setBalance(balanceTotal);
        toast.success('Your Deposit success')
    }


    const [withdrawShow, setWithdrawShow]=useState(0);
    const [withdraw, setWithdraw]=useState(0);

    const withdrawData = () =>{
        const withdrawShows=parseInt(withdrawShow);
        const withdraws=parseInt(withdraw);
        if(balanceInt >=  withdraws){
        const withdrawTotal=withdrawShows + withdraws;
        setWithdrawShow(withdrawTotal);

        const balanceWithdraw= balanceInt - withdraws;
        setBalance(balanceWithdraw);
        toast.success('Your withdraw success')
        }else{
          toast.error('Your current balance not available')
       }
    }
    
    return (
        <div>
            <section >
      <h1 className="text-[#E75C1D] text-4xl font-semibold text-center mt-10">
        Bank
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] lg:w-[70%] mx-auto my-7 text-white">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-lg p-5">
          <h4>Deposit: {depositShow}</h4>
          <h6 className="text-4xl font-semibold">
          </h6>
        </div>
        <div className="bg-gradient-to-r from-red-600 to-red-400 rounded-lg p-5">
          <h4>Withdraw: {withdrawShow}</h4>
          <h6 className="text-4xl font-semibold">
          </h6>
        </div>
        <div className="bg-gradient-to-r from-orange-400 to-orange-300 rounded-lg p-5">
          <h4>Balance: {balance}</h4>
          <h6 className="text-4xl font-semibold">
          </h6>
        </div>
      </div>

      <div className="w-[90%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 text-white">
        <div className="bg-gradient-to-r from-violet-500 to-violet-400 rounded-lg p-5">
          <h4 className="text-lg font-normal mb-2">Please Deposit</h4>
          <input
            type="number"
            onChange={(e)=>setDeposit(e.target.value)}
            className="block text-[#000] py-2 px-4 w-[100%] mb-4 rounded-md"
            placeholder="$ Amount you want to deposit..."
          />
          <button
            onClick={depositData}
            className="bg-[#E85B0B] text-white text-lg font-normal py-2 px-6 rounded-xl"
          >
            Deposit
          </button>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-teal-400 rounded-lg p-5">
          <h4 className="text-lg font-normal mb-2">Please Withdraw</h4>
          <input
            type="number"
            onChange={(w)=>setWithdraw(w.target.value)}
            className="block py-2 px-4 w-[100%] text-[#000] mb-4 rounded-md"
            placeholder="$ Amount you want to Withdraw..."
          />
          <button
            onClick={withdrawData}
            className="bg-[#E85B0B] text-white text-lg font-normal py-2 px-6 rounded-xl"
          >
            Withdraw
          </button>
          <ToastContainer />
        </div>
      </div>
    </section>
        </div>
    );
};

export default BankPage;