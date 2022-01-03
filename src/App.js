import React, {useState} from 'react'
import Icon from './Icon/Icon'
// React toastify
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './App.css'


const App = () => {

const tiktokArray = new Array(9).fill("")
const [winMessage, setWinMessage] = useState("")
const [isCross, setIsCross] = useState(true)

// Restart tthe game  
const restartGame = () => {
    tiktokArray.fill("") 
    setWinMessage("") 
    setIsCross(true)
}

// win Logic 
const winLogic = () => {
    if(tiktokArray[0] == tiktokArray[1] && tiktokArray[0] == tiktokArray[2] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[3] == tiktokArray[4] && tiktokArray[3] == tiktokArray[5] && tiktokArray[3] !== ""){
        console.log("winner is", tiktokArray[3])
      }
      else if(tiktokArray[6] == tiktokArray[7] && tiktokArray[6] == tiktokArray[8] && tiktokArray[6] !== ""){
        console.log("winner is", tiktokArray[6])
      }
      //colums 
      else if(tiktokArray[0] == tiktokArray[3] && tiktokArray[0] == tiktokArray[6] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[1] == tiktokArray[4] && tiktokArray[1] == tiktokArray[7]  && tiktokArray[1] !== ""){
        console.log("winner is", tiktokArray[1])
      }
      else if(tiktokArray[2] == tiktokArray[5] && tiktokArray[2] == tiktokArray[8] && tiktokArray[2] !== ""){
        console.log("winner is", tiktokArray[2])
      }
      //diagnoles 
      else if(tiktokArray[0] == tiktokArray[4] && tiktokArray[0] == tiktokArray[8] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[2] == tiktokArray[4] && tiktokArray[2] == tiktokArray[6] && tiktokArray[2] !== ""){
        console.log("winner is", tiktokArray[2])
      }
}

// fill tik tok array  
const fillTiktokArray = (index) => {
    if(winMessage !== ""){
        return  toast.error('Game has already ended', {
            position: "bottom-center"
            });
    }
    if(tiktokArray[index] !== ""){
        return  toast.error('This box is already filled', {
            position: "bottom-center"
            });
    }
    else{
        tiktokArray[index] =  isCross ? "cross" : "circle"
        setIsCross(!isCross)
    }
    winLogic()
}

// design of tik tok game
// const [turn, setTurn] = useState('x')
// const [cells, setCells] = useState(Array(9).fill(''));
// const [winner, setWinner] = useState('')



// const forWinner = (squares) => {
//     let combos = {
//       across: [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9],
//       ],
//       down: [
//         [1,4,7],
//         [2,5,8],
//         [3,6,9],
//       ],
//       diagnol: [
//         [1,5,9],
//         [3,5,7],
//       ]
//     }
//     for (let combo in combos) {
//       combos[combo].forEach((pattern) =>{
//         if(
//           squares[pattern[1]]== '' || squares[pattern[2]]== '' || squares[pattern[3]]== ''
//           ){

//           }else if (
//             squares[pattern[1]]== squares[pattern[2]] && squares[pattern[2]]== squares[pattern[3]]
//           ){
//             setWinner(squares[pattern[1]])
//           }
//       })
//     }
// }


// const handleClick = (value) =>{
//   //alert(value);
//   if(cells[value] != '') {
//     alert('already clicked');
//     return;
//   }
//   let squares = [...cells];
//   if(turn == 'x'){
//     squares[value] = 'x'
//     setTurn('o');
//   }
//   else{
//     squares[value] = '0'
//     setTurn('x');
//   }
//   forWinner(squares);
//   setCells(squares);
//   console.log(squares);
// }
// const Again = () =>{
//   setWinner(null);
//   setCells(Array(9).fill(''));
// }
const Cell = () => {
  return <td></td>;
}

    return(
          
        // put some value in them  
        // lets connect it with a button 
        <div className='container'>
        <table>
          <tbody>
            <tr>
              <Cell />
              <Cell />
              <Cell />
            </tr>
            <tr>
              <Cell />
              <Cell />
              <Cell />
            </tr>
            <tr>
              <Cell />
              <Cell />
              <Cell />
            </tr>
          </tbody>
        </table>
          </div>
    )     
}
export default App