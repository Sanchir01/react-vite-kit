import { Outlet } from 'react-router'
import Header from '~/shared/ui/header/Header'

const Wrapper = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default Wrapper
