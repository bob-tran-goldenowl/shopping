import React, { Suspense } from 'react'
import { Router } from 'react-router'
import './App.css'
import { history, renderRouteConfigs, Routes } from './Router'
import AppLoading from './components/loading/AppLoading'

const App: React.FC = () => (
	<div className='App'>
		<Suspense fallback={<AppLoading />}>
			<Router history={history}>{renderRouteConfigs(Routes)}</Router>
		</Suspense>
	</div>
)

export default App
