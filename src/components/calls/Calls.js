import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from '../generic/LoadingSpinner';
import Message from '../generic/Message';
import Tabs from '../tabs/Tabs';
import useFetch from './../../hooks/useFetch';
import AllCalls from './AllCalls';
import ArchivedCalls from './ArchivedCalls';
import IncomingCalls from './IncomingCalls';

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
	const [calls, setCalls] = useState(data);
	const archivedCallsCount = calls?.filter(call => call.is_archived).length;

	// initially data will be null, so we have to update the value of calls when data is no longer null
	useEffect(() => setCalls(data), [data]);

	async function changeArchivedStatus(callId, callIsArchived) {
		const updatedCallsList = calls.map(call => {
			if (call.id === callId) return { ...call, is_archived: !callIsArchived };
			return call;
		});

		setCalls(updatedCallsList);

		try {
			const response = await fetch(`https://aircall-job.herokuapp.com/activities/${callId}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ is_archived: !callIsArchived }),
			});

			if (!response.ok) throw new Error('Failed to update call');
		} catch (error) {
			console.error(error.message);
		}
	}
	return (
		<div>
			<Tabs tabs={tabs} archivedCallsCount={archivedCallsCount} />
			{isLoading && <LoadingSpinner />}
			{!isLoading && error && <Message type="error" text={error} />}
			<Routes>
				<Route
					path="all"
					element={calls && <AllCalls calls={calls} changeArchivedStatus={changeArchivedStatus} />}
				/>
				<Route
					path="incoming"
					element={
						calls && <IncomingCalls calls={calls} changeArchivedStatus={changeArchivedStatus} />
					}
				/>
				<Route
					path="archived"
					element={
						calls && <ArchivedCalls calls={calls} changeArchivedStatus={changeArchivedStatus} />
					}
				/>
			</Routes>
		</div>
	);
}

export default Calls;
