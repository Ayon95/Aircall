import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '../tabs/Tabs';
import useFetch from './../../hooks/useFetch';
import AllCalls from './AllCalls';

const tabs = [
	{
		text: 'All Calls',
		path: '#all',
	},

	{
		text: 'Incoming',
		path: '#incoming',
	},

	{
		text: 'Archived',
		path: '#archived',
	},
];

function Calls() {
	const { data, isLoading, error } = useFetch('https://aircall-job.herokuapp.com/activities');
	// Redirect to /#all page when the Calls component is rendered for the first time
	const navigate = useNavigate();
	useEffect(() => {
		navigate('#all');
	}, [navigate]);
	return (
		<div>
			<Tabs tabs={tabs} />
			{data && <AllCalls calls={data} />}
		</div>
	);
}

export default Calls;
