import React from 'react'

export default function Game() {
    let computer_sc = 0
    let player_sc = 0
    const computer_moves = ["ROCK", "PAPER", "SCISSOR"]
    const computerMove = (array) => {
        let random_index = Math.floor(Math.random()*array.length)
        return array[random_index]
    }


    const [computer, setComputer] = React.useState({ move: "ROCK", score: 0 });

    const [player, setPlayer] = React.useState({move: "PAPER", score:0})

    function onRockPressed(){
        let move = computerMove(computer_moves)
        setPlayer(prevPlayer => ({...prevPlayer, move:"ROCK"}))
        setComputer(prevComputer => ({...prevComputer,move:String(move)}))

        if (move === "SCISSOR") {
            setPlayer(prevPlayer => ({ ...prevPlayer, score: prevPlayer.score + 1 }));
            
          }
        if (move==="PAPER"){
            setComputer(prevComputer => ({...prevComputer, score:prevComputer.score+1}))
            
        }

    }
    function onPaperPressed(){
        let move = computerMove(computer_moves)
        setPlayer(prevPlayer => ({...prevPlayer, move:"PAPER"}))
        setComputer(prevComputer => ({...prevComputer,move:String(move)}))

        if (move === "ROCK") {
            setPlayer(prevPlayer => ({ ...prevPlayer, score: prevPlayer.score + 1 }));
            
          }
        if (move==="SCISSOR"){
            setComputer(prevComputer => ({...prevComputer, score:prevComputer.score+1}))
            
        }
    }

    function onScissorPressed(){
        let move = computerMove(computer_moves)
        setPlayer(prevPlayer => ({...prevPlayer, move: "SCISSOR"}))
        setComputer(prevComputer => ({...prevComputer,move:String(move)}))

        if (move === "PAPER") {
            setPlayer(prevPlayer => ({ ...prevPlayer, score: prevPlayer.score + 1 }));
            
          }
        if (move==="ROCK"){
            setComputer(prevComputer => ({...prevComputer, score:prevComputer.score+1}))
            
        }
    }


  return (
    <div className='GAME'>
      <main className='game--box'>

       <section className='GAMEAREA'>
       <h2 className='game--name'>ROCK PAPER SCISSOR</h2>
        <div className='computer--move move'>
            <h3>{computer.move}</h3>
            <p className='score'>Computer - ({computer.score})</p>
        </div>
        <div className='versus'>
            <h5>Vs</h5>
        </div>
        <div className='player--move move'>
            <p className='score'>Player - ({player.score})</p>
            <h3>{player.move}</h3>
        </div>
       </section>

       <section className='BUTTONS'>
        <div className='buttons--1'>
            <button onClick={onRockPressed}>ROCK</button>
            <button onClick={onPaperPressed}>PAPER</button>
        </div>
        <div className='buttons--2'>
            <button onClick={onScissorPressed}>SCISSOR</button>
        </div>
       </section>
      </main>
    </div>
  )
}
