import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Tabs from '../tabs/Tabs';
import useFetch from './../../hooks/useFetch';
import AllCalls from './AllCalls';

const tabs = [
	{
		text: 'All calls',
		path: 'all',
		basePath: '/calls',
	},

	{
		text: 'Incoming',
		path: 'incoming',
		basePath: '/calls',
	},

	{
		text: 'Archived',
		path: 'archived',
		basePath: '/calls',
	},
];

function Calls() {
	const { data, isLoading, error } = useFetch('https://aircall-job.herokuapp.com/activities');
	return (
		<div>
			<Tabs tabs={tabs} />
			<Routes>
				<Route path="all" element={<AllCalls calls={data} />} />
			</Routes>
		</div>
	);
}

export default Calls;
