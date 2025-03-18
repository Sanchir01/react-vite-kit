import { Avatar } from 'antd'

import Screenplay from '../screenplay/Screenplay'
import style from './Message.module.scss'
const Message = () => {
	return (
		<div className={style.message}>
			<div className={style.message__wrapper}>
				<Avatar size={50} icon='C' />
				<div className={style.message__content}>
					{Array(3)
						.fill(null)
						.map((_, index) => (
							<Screenplay key={index} title='title' scenario='scenario' />
						))}
				</div>
			</div>
		</div>
	)
}

export default Message
