import {useState, useEffect} from 'react';

function useFetch(url, options) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  function refetch() {
    console.log('refetch data');
  }

  useEffect(function() {
    setData({ sinister: 'sinister' })
  }, [])
  
  return [data, isLoading, refetch];
}

export { useFetch };