import React from 'react';
import CallDetails from './CallDetails';
import CallList from './CallList';
import Message from './../generic/Message';

function ArchivedCalls({ calls, changeArchivedStatus }) {
	const archivedCalls = calls.filter(call => call.is_archived);
	if (archivedCalls.length === 0) return <Message type="normal" text="No archived calls" />;
	return (
		<CallList>
			{archivedCalls.map(call => (
				<CallDetails key={call.id} call={call} changeArchivedStatus={changeArchivedStatus} />
			))}
		</CallList>
	);
}

export default ArchivedCalls;
