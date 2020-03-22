import React from "react";

function NewQuoteButton({ onClick, label }) {
  return (
    <button id="new-quote" onClick={onClick}>
      {label}
    </button>
  );
}

export default NewQuoteButton;
