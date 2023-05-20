import { useState } from "react";
import "./index.css";
function App() {
   let [num1, setnum1] = useState("");
   let [num2, setnum2] = useState("");
   let [input1, setinput1] = useState(true);
   let [input2, setinput2] = useState(false);
   let [button1, setbutton1] = useState(true);
   let [button2, setbutton2] = useState(false);
   let [player1, setplayer1] = useState(true);
   let [player2, setplayer2] = useState(false);
   let [error1, seterror1] = useState(false);
   let [error2, seterror2] = useState(false);
   let [error3, seterror3] = useState(false);

   let handleChange1 = (e) => {
      setnum1(e.target.value);
   };
   let handleChange2 = (j) => {
      setnum1(j.target.value);
   };

   let handleClick = () => {
      if (!num1) {
         seterror1(true);
      } else if (!Number(num1)) {
         seterror1(false);
         seterror2(true);
      } else if (Number(num1)) {
         seterror2(false);
         if (!(num1 >= 1 && num1 <= 10)) {
            seterror3(true);
         } else {
            seterror1(false);
            seterror3(false);
            setplayer1(false);
            setplayer2(true);
            setbutton1(false);
            setbutton2(true);
            setinput1(false);
            setinput2(true);
         }
      }
   };

   return (
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
         <div className="max-w-container mx-auto font-manrope text-center p-[50px]">
            <h1 className="font-manrope text-lg text-white font-semibold mb-[15px]">
               Number Guessing Game
            </h1>
            {player1 && (
               <h1 className="font-manrope text-base text-white font-medium mb-[10px]">
                  Player 1
               </h1>
            )}
            {player2 && (
               <h1 className="font-manrope text-base text-white font-medium mb-[10px]">
                  Player 2
               </h1>
            )}
            {input1 && (
               <input
                  onChange={handleChange1}
                  className="font-manrope border border-solid py-[11px] px-[28px] focus:outline-0 text-center mr-[20px]"
               />
            )}
            {input2 && (
               <input
                  onChange={handleChange2}
                  className="font-manrope border border-solid py-[11px] px-[28px] focus:outline-0 text-center mr-[20px]"
               />
            )}
            {button1 && (
               <button
                  onClick={handleClick}
                  className=" inline-block font-manrope text-base text-white font-normal border-[2px] border-solid border-[white] py-[10px] px-[35px]"
               >
                  Submit
               </button>
            )}
            {button2 && (
               <button className=" inline-block font-manrope text-base text-white font-normal border-[2px] border-solid border-[white] py-[10px] px-[35px]">
                  Submit
               </button>
            )}
            {error1 && (
               <h2 className="font-manrope text-base text-white mt-[15px]">
                  add a value
               </h2>
            )}
            {error2 && (
               <h2 className="font-manrope text-base text-white mt-[15px]">
                  number value only
               </h2>
            )}
            {error3 && (
               <h2 className="font-manrope text-base text-white mt-[15px]">
                  Use Number between 1 to 10
               </h2>
            )}
         </div>
      </div>
   );
}

export default App;
