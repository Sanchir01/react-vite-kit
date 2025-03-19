import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { ToastContainer, Bounce } from 'react-toastify'
import { router } from '~/app/routes/route'
import { store } from '~/shared/store/store'

const App = () => {
	return (
		<Provider store={store}>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
				transition={Bounce}
			/>
			<RouterProvider router={router} />
		</Provider>
	)
}

export default App
