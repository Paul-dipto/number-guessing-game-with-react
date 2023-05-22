import { useState } from "react";
import "./index.css";
function App() {
   let [num1, setnum1] = useState("");
   let [num2, setnum2] = useState("");
   let [input1, setinput1] = useState(true);
   let [input2, setinput2] = useState(false);
   let [button1, setbutton1] = useState(true);
   let [button2, setbutton2] = useState(false);
   let [button3, setbutton3] = useState(false);
   let [player1, setplayer1] = useState(true);
   let [player2, setplayer2] = useState(false);
   let [error1, seterror1] = useState(false);
   let [error2, seterror2] = useState(false);
   let [error3, seterror3] = useState(false);
   let [winner, setwinner] = useState(false);
   let [winner2, setwinner2] = useState(false);
   let [chance, setchance] = useState(5);

   let handleChange1 = (e) => {
      setnum1(e.target.value);
   };
   let handleChange2 = (j) => {
      setnum2(j.target.value);
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
         if (Number(num1) == Number(num2)) {
            setwinner(true);
            setbutton1(false);
            setplayer1(false);
            setplayer2(false);
            setbutton3(true);
         }
      }
   };

   let handleClick2 = () => {
      if (!num2) {
         seterror1(true);
      } else if (!Number(num2)) {
         seterror1(false);
         seterror2(true);
      } else if (Number(num2)) {
         seterror2(false);
         if (!(num2 >= 1 && num2 <= 10)) {
            seterror3(true);
         } else {
            seterror3(false);
         }
         if (chance > 0) {
            setchance(chance - 1);
         } else {
            setwinner(true);
            setplayer2(false);
            setbutton2(false);
            setwinner2(false);
            setbutton3(true);
         }
         if (Number(num1) == Number(num2)) {
            setwinner2(true);
            setplayer2(false);
            setbutton2(false);
            setbutton3(true);
         }
      }
   };

   let handlereset = () => {
      setnum1("");
      setnum2("");
      setinput1(true);
      setbutton1(true);
      setinput2(false);
      setbutton2(false);
      seterror1(false);
      seterror2(false);
      seterror3(false);
      setplayer1(true);
      setplayer2(false);
      setwinner(false);
      setwinner2(false);
      setchance(5);
      setbutton3(true);
      setbutton3(false);
   };

   return (
      <div className="max-w-container mx-auto font-manrope text-center pt-[300px] pb-[205px]">
         <h1 className="font-manrope text-lg text-white font-semibold mb-[15px]">
            Number Guessing Game
         </h1>
         {player1 && (
            <h1 className="font-manrope text-base text-white font-medium mb-[10px]">
               Player 1
            </h1>
         )}
         {winner && (
            <h1 className="font-manrope text-base text-white font-medium mb-[10px]">
               Player 1 winner
            </h1>
         )}
         {player2 && (
            <h1 className="font-manrope text-base text-white font-medium mb-[10px]">
               Player 2
            </h1>
         )}
         {winner2 && (
            <h1 className="font-manrope text-base text-white font-medium mb-[10px]">
               Player 2 winner
            </h1>
         )}
         <h2 className="font-manrope text-lg text-white font-semibold mb-[10px]">
            chance : {chance}
         </h2>
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
            <button
               onClick={handleClick2}
               className=" inline-block font-manrope text-base text-white font-normal border-[2px] border-solid border-[white] py-[10px] px-[35px]"
            >
               Submit
            </button>
         )}
         {button3 && (
            <button
               type="reset"
               onClick={handlereset}
               className=" inline-block font-manrope text-base text-white font-normal border-[2px] border-solid border-[white] py-[10px] px-[35px]"
            >
               Reset
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
   );
}

export default App;
