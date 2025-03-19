import { Avatar } from 'antd'

import style from './Message.module.scss'
import { useGetAllScriptsQuery } from '~/shared/service/scripts.service'
import { useGetAllLessonsQuery } from '~/shared/service/lessons.service'
import Screenplay from '../screenplay/Screenplay'
const Message = ({ id }: { id: string }) => {
	const {
		data: scripts,
		isLoading,
		isSuccess,
		isError
	} = useGetAllScriptsQuery(id)
	console.log(scripts)

	if (isError) {
		return <div>Loading data error</div>
	}
	const scriptId = isSuccess && scripts.length > 0 ? scripts[0].id : undefined
	const { data: lessons = [], isLoading: isLoadingLesson } =
		useGetAllLessonsQuery(scriptId, {
			skip: !scriptId
		})

	if (isLoading || isLoadingLesson) {
		return <div>Loading...</div>
	}

	return (
		<div className={style.message}>
			<div className={style.message__wrapper}>
				<Avatar size={50} icon='C' />
				<div className={style.message__content}>
					{lessons.length > 0 ? (
						lessons.map((item, i) => (
							<Screenplay
								key={i}
								title={item.title}
								scenario_id={item.script_id}
							/>
						))
					) : (
						<p>No lessons available</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default Message
