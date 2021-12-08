import React from 'react';
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
	return (
		<div>
			<Tabs tabs={tabs} />
			{data && <AllCalls calls={data} />}
		</div>
	);
}

export default Calls;
