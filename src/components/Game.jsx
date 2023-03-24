/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

const Game = ({myChoice,setScore}) => {
  const [house,setHouse]=useState("");
  const [playerWin,setPlayerWin]=useState("");
 


  const newHousePick=()=>{
    const choices=["rock","paper","scissors"];
    setHouse(choices[Math.floor(Math.random()*3)]);
  }
  const Result=()=>{
    if(myChoice==='rock' && house==="scissors"){
      setPlayerWin("win");
      setScore((prev)=>prev+1);
    }else if(myChoice==='rock' && house==="paper"){
      setPlayerWin("loose");
      setScore((prev)=>prev-1);
    }else if(myChoice==='paper' && house==="rock"){
      setPlayerWin("win");
      setScore((prev)=>prev+1);
    }
    else if(myChoice==='paper' && house==="scissors"){
      setPlayerWin("loose");
      setScore((prev)=>prev-1);
    }else if(myChoice==='scissors' && house==="paper"){
      setPlayerWin("win");
      setScore((prev)=>prev+1);
    }else if(myChoice==='scissors' && house==="rock"){
      setPlayerWin("loose");
      setScore((prev)=>prev-1);
    }else{
      setPlayerWin("draw");
    }
  }
  useEffect(()=>{
    setTimeout(()=>{newHousePick()},300)
  },[])
  useEffect(()=>{
    Result();
  },[house]) //react-hooks/exhaustive-deps
  return (
    <div className='game'>
      <div className='game__you'>
      <h1 className='text'>You Picked </h1>
      <img className={`icon icon--${myChoice}`} alt=''/>
      </div>
      <div className='game__play'>
      {playerWin==="win"&& <h2 className='text'>You Win</h2>}
      {playerWin==="loose"&& <h2 className='text'>You Lose</h2>}
      {playerWin==="draw"&& <h2 className='text'>Draw</h2> }
      <Link className='play-again'to={'/'}>Play Again</Link>
      </div>
      <div className='game__house'>
      <h1 className='text'>House Picked </h1>
      <img className={`icon icon--${house}`} alt=''/>
      </div>
    </div>
  )
}

export default Game