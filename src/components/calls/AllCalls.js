import React from 'react';
import Message from '../generic/Message';
import CallDetails from './CallDetails';
import CallList from './CallList';
// This component shows inbound and outbound unarchived calls
function AllCalls({ calls, changeArchivedStatus }) {
	const unarchivedCalls = calls.filter(call => !call.is_archived);
	if (unarchivedCalls.length === 0) return <Message type="normal" text="No unarchived calls" />;
	return (
		<CallList>
			{unarchivedCalls.map(call => (
				<CallDetails key={call.id} call={call} changeArchivedStatus={changeArchivedStatus} />
			))}
		</CallList>
	);
}

export default AllCalls;
