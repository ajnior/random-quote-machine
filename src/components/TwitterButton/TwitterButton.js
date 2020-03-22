import React from "react";
import FontAwesome from "react-fontawesome";

function TwitterButton({ textIntent }) {
  return (
    <a
      id="tweet-quote"
      target="_blank"
      rel="noopener noreferrer"
      href={`https://twitter.com/intent/tweet?text=${textIntent}`}
    >
      <FontAwesome className="fab fa-twitter" size="2x" />
    </a>
  );
}

export default TwitterButton;
