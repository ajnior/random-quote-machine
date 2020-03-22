import React from "react";
import { useFetch } from "../../hooks/useFetch";

import TwitterButton from "../../components/TwitterButton";
import NewQuoteButton from "../../components/NewQuoteButton";

import { Wrapper, Box } from "./styles";

function QuoteBox() {
  const { data, fetchData } = useFetch("https://api.quotable.io/random");
  const { author, content } = data;

  return (
    <Wrapper id="quote-box">
      <Box className="box">
        <div className="text-container">
          <h1 id="text">{`"${content}"`}</h1>
          <h2 id="author">{`- ${author}`}</h2>
        </div>
        <div className="buttons-container">
          <div className="buttons-container__quote">
            <NewQuoteButton onClick={fetchData} label={"New quote"} />
          </div>
          <div className="buttons-container__social">
            <TwitterButton textIntent={`"${content}" - ${author}`} />
          </div>
        </div>
      </Box>
    </Wrapper>
  );
}

export default QuoteBox;
