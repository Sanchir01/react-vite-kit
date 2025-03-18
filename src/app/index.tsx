import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { router } from '~/app/routes/route'
import { store } from '~/shared/store/store'

const App = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	)
}

export default App
