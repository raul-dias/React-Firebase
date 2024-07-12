import './App.css'
import { useEffect, useState } from "react";
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" }
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  useEffect(() => {
    if (choiceOne && choiceTwo){
      if (choiceOne.src === choiceTwo.src ){
        console.log({choiceOne, choiceTwo, "cards":"match"})
        resetAfterTurn()
      }
      else {
        console.log({choiceOne, choiceTwo, "cards":"dont match"})
        resetAfterTurn()
      }
    }
    console.log("USEEFFECT")
  }, [choiceOne, choiceTwo])

  // shuffel the cards
  const shuffelCards = () => {
    const shuffeledCards = [...cardImages, ...cardImages]
      .sort(() => (Math.random() - 0.5))
      .map((card, index) => ({ ...card, "id": index }))

    setCards(shuffeledCards);
    setTurns(0);
  }

  // handel the choice
  const handleChoice = ( card ) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // reset state after turns
  const resetAfterTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null)
    setTurns(turns+1)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffelCards}>New Game</button>
      <div className='card-grid'>
        {cards && cards.map((card) => (
            <SingleCard key={card.id} card={card} handleChoice={handleChoice}/>
          )
        )}
      </div>
    </div>
  );
}

export default App