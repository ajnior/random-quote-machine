import {useState, useEffect} from 'react';

function useFetch(url, options) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    console.log('refetch data');
    // 1. fetch data
    // 2. update data with new data
    setData({ sinister: 'sinister' })
  }

  useEffect(function() {
    // 1. fetchData once on first render
    fetchData();
  }, [])
  
  return [data, isLoading, fetchData];
}

export { useFetch };