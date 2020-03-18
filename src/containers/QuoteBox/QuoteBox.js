import React from 'react';
import {useFetch} from '../../hooks/useFetch';
import { Wrapper } from './styles';

function QuoteBox() {
  const [data, _, fetchData] = useFetch('https://api.quotable.io/random');
  const {author, content} = data;
  return (
    <Wrapper id="quote-box">
      <div className='text-container'>
        <h1 id="text">{content}</h1>
        <h2 id="author">{`- ${author}`}</h2>
      </div>
      <div className='buttons-container'>
        <div className='buttons-container__social'>

        </div>
        <div className='buttons-container__quote'>
          <button id="new-quote" onClick={fetchData}>New quote</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default QuoteBox;