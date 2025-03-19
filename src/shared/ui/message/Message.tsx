import { Avatar } from 'antd'

import Screenplay from '../screenplay/Screenplay'
import style from './Message.module.scss'
import { useGetAllScriptsQuery } from '~/shared/service/scripts.service'
const Message = ({ id }: { id: string }) => {
	const {
		data: scripts,
		isLoading,
		isSuccess,
		isError
	} = useGetAllScriptsQuery(id)
	console.log(scripts)
	if (isLoading) {
		return <div>Loading...</div>
	}
	if (isError) {
		return <div>Loading data error</div>
	}
	return (
		<div className={style.message}>
			<div className={style.message__wrapper}>
				<Avatar size={50} icon='C' />
				<div className={style.message__content}>
					{isSuccess &&
						scripts[0].lessons.map(item => (
							<Screenplay
								script_id={item.script_id}
								key={item.id}
								title={item.title}
								scenario_id={item.script_id}
							/>
						))}
				</div>
			</div>
		</div>
	)
}

export default Message
