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

   let handleClick = () => {
      if (!num1) {
         seterror1(true);
      } else if (!Number(num1)) {
         seterror1(false);
         seterror2(true);
      }
      console.log(num1);
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
                  onChange={(e) => e.target.value}
                  className="font-manrope border border-solid py-[11px] px-[28px] focus:outline-0 text-center mr-[20px]"
                  value={num1}
               />
            )}
            {input2 && (
               <input
                  onChange={(e) => e.target.value}
                  className="font-manrope border border-solid py-[11px] px-[28px] focus:outline-0 text-center mr-[20px]"
                  value={num2}
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
         </div>
      </div>
   );
}

export default App;
