import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Quotes from "inspirational-quotes";

import "./Quote.css";

const Quote = ({ parentCb }) => {
  let newQuote = Quotes.getQuote();
  const [quote, setQuote] = useState(newQuote);
  const [bgColor, setColor] = useState("rgb(255, 105, 100)");
  // let { text, author } = quote;

  const getQuoteHandler = () => {
    setQuote({ ...Quotes.getQuote() });

    const r = Math.floor(Math.random() * 200 + 56),
      g = Math.floor(Math.random() * 150),
      b = Math.floor(Math.random() * 200);

    // console.log(quote);

    const color = { r, g, b };
    parentCb(color);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  const style1 = {
    color: bgColor
  };

  const style2 = {
    backgroundColor: bgColor
  };

  return (
    <div id="quote-box" style={style1}>
      <h4 id="text">{quote.text}</h4>
      <p id="author">{quote.author}</p>
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=\"${quote.text}\" ${quote.author}`}
        target="_blank"
        rel="noopener noreferrer"
        id="tweet-quote"
      >
        <button className="quote-button btn-tweet" style={style2}>
          <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
        </button>
      </a>
      <button
        id="new-quote"
        className="quote-button"
        onClick={getQuoteHandler}
        style={style2}
      >
        New Quote
      </button>
    </div>
  );
};

export default Quote;
