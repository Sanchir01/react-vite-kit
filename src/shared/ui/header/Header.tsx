import { Button } from 'antd'

import { Container } from '~/shared/ui/container/container'
import style from './Header.module.scss'
import { Link } from 'react-router'
import { useGetAllScriptsQuery } from '~/shared/service/scripts.service'

const Header = () => {
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
		<header className={style.header}>
			<Container>
				<div className={style.header__wrapper}>
					<div className={style.header__buttons}>
						<Link to='/'>
							<Button
								color='cyan'
								variant='outlined'
								style={{ borderRadius: 15 }}
							>
								Главный сценарий
							</Button>
						</Link>
						{isSuccess &&
							scripts.length > 1 &&
							scripts.slice(1).map(item => (
								<Link key={item.id} to={`/script/${item.id}`}>
									<Button
										color='purple'
										variant='solid'
										style={{ borderRadius: 15 }}
									>
										{item.title}
									</Button>
								</Link>
							))}

						<Link to='/create'>
							<Button
								style={{
									backgroundColor: '#F5F5FD',
									color: '#000000',
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: 15
								}}
							>
								+ Добавить
							</Button>
						</Link>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
