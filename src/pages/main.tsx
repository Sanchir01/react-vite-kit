import { useGetAllScriptsQuery } from '~/shared/service/scripts.service'

function App() {
	const {
		data: scripts,
		isLoading,
		isSuccess,
		isError
	} = useGetAllScriptsQuery()
	console.log(scripts)
	if (isLoading) {
		return <div>Loading...</div>
	}
	if (isError) {
		return <div>Loading data error</div>
	}
	return (
		<div className=''>
			<div className=''>test sanchir</div>
			{isSuccess &&
				scripts.map(item => (
					<div className='' key={item.id}>
						{item.title}
					</div>
				))}
		</div>
	)
}

export default App
