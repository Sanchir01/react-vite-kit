import { Container } from '~/shared/ui/container/container'
import style from './Main.module.scss'
import Message from '~/shared/ui/message/Message'

export default function MainPage() {
	return (
		<>
			<main className={style.main}>
				<Container>
					<div className={style.main__wrapper}>
						<Message id='1' />
					</div>
				</Container>
			</main>
		</>
	)
}
