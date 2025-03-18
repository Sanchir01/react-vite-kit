import { Button } from 'antd'

import { Container } from '../../ui/container'
import style from './Header.module.scss'

const Header = () => {
	return (
		<header className={style.header}>
			<Container>
				<div className={style.header__wrapper}>
					<div className={style.header__buttons}>
						<Button
							color='cyan'
							variant='outlined'
							style={{ borderRadius: 15 }}
						>
							Главный сценарий
						</Button>
						<Button color='purple' variant='solid' style={{ borderRadius: 15 }}>
							Пройти тест
						</Button>
						<Button color='purple' variant='solid' style={{ borderRadius: 15 }}>
							Пройти тренинг
						</Button>
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
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
