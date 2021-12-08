import React from 'react';
import CallDetails from './CallDetails';
import CallList from './CallList';

function AllCalls({ calls }) {
	return (
		<CallList>
			{calls.map(call => (
				<CallDetails key={call.id} call={call} />
			))}
		</CallList>
	);
}

export default AllCalls;
