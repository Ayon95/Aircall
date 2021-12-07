import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './style/GlobalStyles';

function App() {
	return (
		<Router>
			<GlobalStyles />
			<div className="App">
				<Container>
					<h1>Aircall</h1>
				</Container>
			</div>
		</Router>
	);
}

export default App;

const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: 38rem;
	margin: 0 auto;
	background-color: #fff;
	border-radius: 4px;
`;

const MainContent = styled.main``;
