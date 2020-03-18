import React from 'react';
import {useFetch} from './hooks/useFetch';

function App() {
  const [data, isLoading, refetch] = useFetch('https://api.quotable.io/random');

  console.log('data', data);
  console.log('loading', isLoading);
  
  return (
    <div className="App">
      <header className="App-header"></header>
      <button onClick={refetch}>CHANGE DATA</button>
    </div>
  );
}

export default App;
