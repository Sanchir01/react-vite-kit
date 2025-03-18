// src/app/routes/route.ts
import Main from '~/pages/main/main.page'
import { createBrowserRouter } from 'react-router'
import Wrapper from '../Wrapper'
import NotFoundPage from '~/pages/notfound/notfound.page'
import ScriptsPage from '~/pages/scripts/scripts.page'
import CreateScriptPage from '~/pages/createscript/createscript.page'
import GraphPage from '~/pages/graph/graph.page'
export const router = createBrowserRouter([
	{
		path: '/',
		Component: Wrapper,

		children: [
			{
				path: '/',
				Component: Main,
				index: true
			},
			{
				path: '/create',
				Component: CreateScriptPage
			},
			{
				path: '/script/:id',
				Component: ScriptsPage
			},
			{
				path: '*', // Этот маршрут должен быть последним
				Component: NotFoundPage
			},
			{
				path: '/graph',
				Component: GraphPage
			}
		]
	}
])
