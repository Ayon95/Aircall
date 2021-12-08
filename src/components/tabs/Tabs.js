import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import Tab from './Tab';

function Tabs({ tabs }) {
	return (
		<Container>
			<ul>
				{tabs.map(tab => (
					<Tab key={tab.text} tab={tab} />
				))}
			</ul>
		</Container>
	);
}

export default Tabs;

const Container = styled.nav`
	ul {
		margin-bottom: ${stylesConfig.baseMargin};
		display: flex;
		justify-content: space-between;
	}
`;
