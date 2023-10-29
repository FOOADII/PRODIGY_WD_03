import React, {useCallback,useState,useRef } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data =["","","","","","","","","",];

const TicTacToe = () => 
{
       let [count,setcount] = useState(0);
       let [lock,setLock]= useState(false);

       let titleRef =useRef(null);
       let boxes1 = useRef(null);
       let boxes2 = useRef(null);
       let boxes3 = useRef(null);
       let boxes4 = useRef(null);
       let boxes5 = useRef(null);
       let boxes6 = useRef(null);
       let boxes7 = useRef(null);
       let boxes8 = useRef(null);
       let boxes9 = useRef(null); 
       
       let boxes_array = [boxes1,boxes2,boxes3,boxes4,boxes5,boxes6,boxes7,boxes8,boxes9];
       
       const Toggle =(e,num) => {
        if (lock){
          return 0;
        }
        if (count%2===0)
        {
          e.target.innerHTML = `<img src='${cross_icon}'>`;
          data[num] = "x";
          setcount(++count);
        }
       else{  
        e.target.innerHTML = `<img src='${circle_icon}'>`;
        data[num] = "o";
        setcount(++count);
       }
       checkwin();
  }

  const checkwin = ()  => {
      if(data [0] ===data[1] &&  data[1]===data[2] && data[2]!=="" )
      { 
        won (data[2]);
      }
      else if(data [3]===data[4] &&  data[4]===data[5] && data[5]!=="" )
      {
        won (data[5]); 
      }
      else if (data [6]===data[7] &&  data[7]===data[8] && data[8]!=="")
      {
        won (data[8]);
      }
      else if (data [0]===data[3] &&  data[3]===data[6] && data[6]!=="")
      {
        won (data[6]);
      }
      else if (data [1]===data[4] &&  data[4]===data[7] && data[7]!=="")
      {
        won (data[7]);
      }
       else if (data [2]===data[5] &&  data[5]===data[8] && data[8]!=="")
       {
        won (data[8]);
      }
       else if (data [0]===data[4] &&  data[4]===data[8] && data[8]!=="")
       {
        won (data[8]);
      }
       else if (data [0]===data[1] &&  data[1]===data[2] && data[2]!=="")
       {
        won (data[2]);
      }
       
  }

  const won = (winner) => {
    setLock(true);
    if(winner==="x")
    {
      titleRef.current.innerHTML =`congratulations:<img src='${cross_icon}'>`;
    }
    else
    {
      titleRef.current.innerHTML =`congratulations:<img src='${circle_icon}'>`;
    }
  }  
  const rest = () => {
    setLock(false);
    data = ["","","","","","","","",""];
    titleRef.current.innerHTML = 'Tic Tac Toe In <span>React</span>';
    boxes_array.map((e) => {
      e.current.innerHTML ="";
    })
  }
  return (
    <div className='basic'>
        <h1 className='name' ref={titleRef}>
            Tic Tac Toe Game In <span>React</span> 
            </h1>
           <h2 className='pro'> Start <span> playing</span> </h2>
           <button className='reset' onClick={()=>{rest()}}>Reset</button>
    <div className='board'> 
    <div className='row1'>
      <br/>
      <div className="boxes" ref={boxes1} onClick={(e)=>{Toggle (e,0)}}></div>
      <br />
      <div className="boxes" ref={boxes2}  onClick={(e)=>{Toggle (e,1)}}></div>
      <br />
      <div className="boxes" ref={boxes3} onClick={(e)=>{Toggle (e,2)}}></div>
      <br />
    </div>
    <div className='row2'>
     <br />
      <div className="boxes" ref={boxes4} onClick={(e)=>{Toggle (e,3)}}></div>
      <br />
      <div className="boxes" ref={boxes5} onClick={(e)=>{Toggle (e,4)}}></div>
      <br />
      <div className="boxes"ref={boxes6} onClick={(e)=>{Toggle (e,5)}}></div>
    </div>
    <div className='row3'>
      <br/>
      <div className="boxes" ref={boxes7} onClick={(e)=>{Toggle (e,6)}}></div>
      <br />
      <div className="boxes" ref={boxes8} onClick={(e)=>{Toggle (e,7)}}></div>
      <br />
      <div className="boxes" ref={boxes9} onClick={(e)=>{Toggle (e,8)}}></div>
     
     </div>
    </div>
    </div>
  )
}
export default TicTacToe
