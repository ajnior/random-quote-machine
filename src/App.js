import React from 'react';
import {useFetch} from './hooks/useFetch';

function App() {
  const [data, isLoading, fetchData] = useFetch('https://api.quotable.io/random');

  console.log('data', data);
  console.log('loading', isLoading);
  
  return (
    <div className="App">
      <header className="App-header"></header>
      <button onClick={fetchData}>CHANGE DATA</button>
    </div>
  );
}

export default App;
