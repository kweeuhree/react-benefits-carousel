import facts from './models/facts'; // import facts 
import Card from './components/Card';
import Button from './components/Button';
import Dot from './components/Dot';
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

        <Card title={currentCard.title} text={currentCard.text} picture={currentCard.picture} url={currentCard.url}  shortcut={currentCard.shortcut} />

       {/* dots container */}
       <div className='dot-container'>
        {facts.map((item, index) => (
          <Dot key={index} current={index === count} />
        ))}
      </div>

       {/* buttons container */}
         <div className="buttons-container">
           <Button action={moveBackward} type={"<"} />
           <Button action={moveForward} type={">"} />

        </div>

      </div>
    );
  } 

export default App;
