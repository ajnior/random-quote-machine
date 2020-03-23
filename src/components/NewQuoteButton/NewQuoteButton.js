import React from "react";
import { QuoteButton } from "./styles";

function NewQuoteButton({ onClick, label }) {
  return (
    <QuoteButton id="new-quote" onClick={onClick}>
      {label}
    </QuoteButton>
  );
}

export default NewQuoteButton;
