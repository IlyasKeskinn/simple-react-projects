import './App.css';
import { useEffect, useState } from 'react';
import MemoryCard from './component/MemoryCard';


const cardList = [
  { "path": "/img/1.jpeg", "matched": false },
  { "path": "/img/2.jpeg", "matched": false },
  { "path": "/img/3.jpeg", "matched": false },
  { "path": "/img/4.jpeg", "matched": false },
  { "path": "/img/5.jpeg", "matched": false },
  { "path": "/img/6.jpeg", "matched": false }
]

function App() {

  const [cards, setCards] = useState([]);
  const [selectedCardOne, setSelecetedCardOne] = useState(null);
  const [selectedCardTwo, setSelecetedCardTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);





  const prepareCards = () => {
    const sortedCards = [...cardList, ...cardList].sort(() => 0.5 - Math.random()).map((card) => ({ ...card, "id": Math.random() }))
    setCards(sortedCards);
    setSelecetedCardOne(null);
    setSelecetedCardTwo(null);
  }
  useEffect(() => {
    prepareCards();
  }, []);

  useEffect(() => {
    if (selectedCardOne && selectedCardTwo) {
      setDisabled(true);
      if (selectedCardOne.path === selectedCardTwo.path) {
        setCards(preveCards => {
          return preveCards.map(card => {
            if (card.path === selectedCardOne.path) {
              return { ...card, "matched": true }
            }
            else {
              return card;
            }
          })
        });
        setScore(score + 1);
        resetState();
      }
      else {
        setTimeout(() => {
          resetState();
        }, 1000);
      }
    }

  }, [selectedCardOne, selectedCardTwo]);

  const resetState = () => {
    setDisabled(false);
    setSelecetedCardOne(null);
    setSelecetedCardTwo(null);
    setScore(0);
  }

  const selectedCardHandle = (card) => {
    selectedCardOne ? setSelecetedCardTwo(card) : setSelecetedCardOne(card);
  };

  return (
    <div className="container">

      <button onClick={prepareCards} className='btn btn-primary replay-btn'>Replay Game!</button>
      <p className='lead'>Your Score : {score}</p>
      <div className="card-grid">
        {cards.map(card => (
          <MemoryCard card={card} selectedCardHandle={selectedCardHandle} disabled={disabled} rotated={card === selectedCardOne || card === selectedCardTwo || card.matched} />
        ))}
      </div>
    </div>
  );
}

export default App;
