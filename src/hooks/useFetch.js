import { useEffect, useState } from "react";

//creating custom hook - 'use' is important 
export function useFetch(fetchFn, initialValue) {

    //Managing state
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFecthedData] = useState(initialValue);

      useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFecthedData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();

      }, [fetchFn]);

    //Making values available/accessible to components
    return {
        isFetching,
        error,
        fetchedData,
        setFecthedData
    }
}