import React from "react";
import FontAwesome from "react-fontawesome";
import { Anchor } from "./styles";

function TwitterButton({ textIntent }) {
  return (
    <Anchor
      id="tweet-quote"
      target="_blank"
      rel="noopener noreferrer"
      href={`https://twitter.com/intent/tweet?text=${textIntent}`}
    >
      <FontAwesome className="fab fa-twitter" size="2x" name="twitter-button" />
    </Anchor>
  );
}

export default TwitterButton;
