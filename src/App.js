import facts from './models/facts'; // import facts 
import Card from './components/Card';
import Button from './components/Button';
import { useState } from 'react';
import './App.css';

function App() {
  let [ count, setCount ] = useState(0);
  let [currentCard, setCurrentCard ] = useState(facts[count]);

  const moveForward = () => {
    setCount((prev) => (prev + 1) % facts.length);
    console.log(`Count inside moveForward after update: ${count}`);
    setCurrentCard(facts[count]);
    console.log(`Current card title: ${currentCard.title}`);
  };

  const moveBackward = () => {
    setCount((prev) => (prev - 1 + facts.length) % facts.length);
    console.log(`Count inside moveBackward after update: ${count}`);
    setCurrentCard(facts[count]);
  }

    return (
      <div className='App'>

        <Card title={currentCard.title} text={currentCard.text} picture={currentCard.picture} url={currentCard.url} />

       {/* buttons container */}
         <div className="buttons-container">
           <Button action={moveForward} type={">"} />
           <Button action={moveBackward} type={"<"} />
        </div>

      </div>
    );
  } 

export default App;
