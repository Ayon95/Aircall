import { useEffect, useState } from 'react';

function useFetch(url) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const abortController = new AbortController();

	async function fetchData() {
		try {
			setError('');
			setIsLoading(true);
			const response = await fetch(url, { signal: abortController.signal });
			if (!response.ok) throw new Error('Failed to fetch data');
			const data = await response.json();
			setData(data);
			setIsLoading(false);
			return data;
		} catch (error) {
			setError(error.message);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
		return () => abortController.abort();
	}, []);

	return { data, isLoading, error };
}

export default useFetch;
