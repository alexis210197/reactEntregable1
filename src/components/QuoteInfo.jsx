import React, { useState } from 'react'
import quotes from "../json/quotes.json";
import color from "../utils/color";
import QuoteBox from './QuoteBox';

export const QuoteInfo = () => {
  //CALCULA INDICE RANDOM
  const getIndexRandom = (arr) => Math.floor(Math.random() * arr.length);
  //EXTRAE EL ELEMENTO SEGUN EL INDICE RANDOM
  const firstQuote = quotes[getIndexRandom(quotes)];
  const firstColor = color[getIndexRandom(color)];
  const [randomQuote, setRandomQuote] = useState(firstQuote);
  const [radomColor, setRadomColor] = useState(firstColor);
  //CALCULA UN QUOTE COMO UN COLOR RANDOM
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)]);
    setRadomColor(color[getIndexRandom(color)]);
  }


  return (
    
      <main style={{ backgroundColor: radomColor }} className="quoteInfo">
      
      <QuoteBox randomQuote={randomQuote} 
      radomColor={radomColor} 
      getRandomAll={getRandomAll}
      />
      </main>
    
  )
}
