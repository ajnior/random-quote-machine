import {useState, useEffect, useCallback} from 'react';

function useFetch(url, options) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(
    function() {
      setIsLoading(true);
      fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .then(setIsLoading(false))
    },
    [url]
  )

  useEffect(fetchData, [fetchData])

  return [data, isLoading, fetchData];
}

export { useFetch };