import { Container } from '../../ui/container'
import Message from '../message/Message'

import style from './Main.module.scss'

const Main = () => {
	return (
		<main className={style.main}>
			<Container>
				<div className={style.main__wrapper}>
					<Message />
				</div>
			</Container>
		</main>
	)
}

export default Main
