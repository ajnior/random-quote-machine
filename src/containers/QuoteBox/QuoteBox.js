import React from 'react';
import {useFetch} from '../../hooks/useFetch';
import FontAwesome from 'react-fontawesome';
import { Wrapper } from './styles';

function QuoteBox() {
  const [data, _, fetchData] = useFetch('https://api.quotable.io/random');
  const {author, content} = data;
  return (
    <Wrapper id="quote-box">
      <div className='text-container'>
        <h1 id="text">{`"${content}"`}</h1>
        <h2 id="author">{`- ${author}`}</h2>
      </div>
      <div className='buttons-container'>
        <div className='buttons-container__social'>
        <button>
          <FontAwesome className="fab fa-twitter" size='2x' />
        </button>
        </div>
        <div className='buttons-container__quote'>
          <button id="new-quote" onClick={fetchData}>New quote</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default QuoteBox;