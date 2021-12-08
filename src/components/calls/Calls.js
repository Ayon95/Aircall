import React from 'react';
import Tabs from '../tabs/Tabs';

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
	return (
		<div>
			<Tabs tabs={tabs} />
		</div>
	);
}

export default Calls;
