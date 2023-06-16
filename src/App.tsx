import LoadingOrError from 'components/Common/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getConfig } from './config'

const Home = lazy(async () => import('pages/Home'))

export default function App(): ReactElement {
	return (
		<BrowserRouter basename={getConfig().basename}>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
