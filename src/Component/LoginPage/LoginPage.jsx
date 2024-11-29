import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const bankPage= useNavigate();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    
    const loginPages= () =>{
     if(email === 'rifat@gmail.com' && password === '1234'){
         bankPage('/bankPage')
    }else{
        toast.error('Your info wrong!');
    }
   }
    return (
        <div>
            <h1 className='my-10 text-center text-3xl font-bold'>Welcome to Bap er bank!!!</h1>
            <div className="bg-[#FFECD5] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto p-7 rounded-lg mt-6">
      <div>
        <h3 className="text-[#E45A1B] text-xl font-medium my-3">Please Login</h3>
        <input
          type="text"
          onChange={(e)=> setEmail(e.target.value)}
          className="block py-2 px-4 w-full mb-4 rounded-md bg-[#E7F1FF]"
          placeholder="Type your Gmail..."
        />
        <input
          type="password"
          onChange={(p)=>setPassword(p.target.value)}
          className="block py-2 px-4 w-full mb-3 rounded-md"
          placeholder="Type your Password..."
        />
        <button
          onClick={loginPages}
          className="bg-[#F77316] text-white text-lg font-normal py-2 px-6 rounded-xl"
        >
          Login
        </button>
        <ToastContainer />
      </div>
    </div>
        </div>
    );
};

export default LoginPage;