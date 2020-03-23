import React from "react";
import { useFetch } from "../../hooks/useFetch";

import TwitterButton from "../../components/TwitterButton";
import NewQuoteButton from "../../components/NewQuoteButton";

import { Wrapper, Box } from "./styles";

function QuoteBox() {
  const { data, fetchData, error } = useFetch("https://api.quotable.io/random");
  const { author, content } = data;

  return (
    <Wrapper id="quote-box">
      <Box className="box">
        <div className="text-container">
          {error ? (
            <h1 id="text">
              An error has ocurred while getting a quote for you.
              <br />
              Please try again.
            </h1>
          ) : (
            <>
              <h1 id="text">{`"${content || ""}"`}</h1>
              <h2 id="author">{`- ${author || ""}`}</h2>
            </>
          )}
        </div>
        <div className="buttons-container">
          <div className="buttons-container__quote">
            <NewQuoteButton
              onClick={fetchData}
              label={error ? "Try again" : "New quote"}
            />
          </div>
          {!error && (
            <div className="buttons-container__social">
              <TwitterButton textIntent={`"${content}" - ${author}`} />
            </div>
          )}
        </div>
      </Box>
    </Wrapper>
  );
}

export default QuoteBox;
