
import React from "react";

const QuoteBox = ({ randomQuote, radomColor, getRandomAll }) => {
  const colorObj = {
    color: radomColor,
  };

  const backgroundObj = {
    backgroundColor: radomColor,
  };

  return (
    <article style={colorObj} className="card">
      <h1 className="card__quoteLeft">&#8220;</h1>
      <p className="card__quote">{randomQuote.quote}</p>
      <h2 className="card__author">{randomQuote.author}</h2>
      <button
        className="card__btn"
        style={backgroundObj}
        onClick={getRandomAll}
      >
        &#62;
      </button>
    </article>
  );
};

export default QuoteBox;
