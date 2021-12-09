import React from 'react';
import CallDetails from './CallDetails';
import CallList from './CallList';

function IncomingCalls({ calls }) {
	const incomingCalls = calls.filter(call => call.direction === 'inbound');
	return (
		<CallList>
			{incomingCalls.map(call => (
				<CallDetails key={call.id} call={call} />
			))}
		</CallList>
	);
}

export default IncomingCalls;
