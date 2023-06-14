import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { AppRouter } from './providers/router';

const App = () => {
	return (
		<div className="app">
			<Analytics />
			<AppRouter />
		</div>
	);
};

export default App;
