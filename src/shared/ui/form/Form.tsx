import { useState } from 'react'
import { Input, Button } from 'antd'
import style from './Form.module.scss'
import { useCreateScriptMutation } from '~/shared/service/scripts.service'
import { getRandomNumber } from '~/shared/utils/utils'
import { useCreateLessonMutation } from '~/shared/service/lessons.service'
const script_id = getRandomNumber(1, 9999999999)
const Form: React.FC = () => {
	const [script, setScript] = useState<{ id: string; title: string }>({
		id: String(script_id),
		title: ''
	})
	const [lesson, setLessons] = useState<{
		id: string
		title: string
		script_id: string
	}>({
		id: String(getRandomNumber(1, 9999999999)),
		title: '',
		script_id: String(script_id)
	})
	const [createScript] = useCreateScriptMutation()
	const [createLesson] = useCreateLessonMutation()
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { toast } = await import('react-toastify')

		try {
			await createScript({ id: script.id, title: script.title })
			await createLesson({
				id: lesson.id,
				title: lesson.title,
				script_id: lesson.script_id
			})
			setScript({
				id: '',
				title: ''
			})
			setLessons({
				id: '',
				title: '',
				script_id: ''
			})
			toast.success('Удачное создание сценария')
		} catch (error) {
			console.error(error)
			toast.error('Ошибка создания сценария')
		}
	}

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<div className={style.form__wrapper}>
				<h2 className={style.form__title}>Создание сценария</h2>
				<div className={style.form__fields}>
					<Input
						className={style.form__fields__input}
						type='text'
						placeholder='Название сценария'
						value={script.title}
						onChange={e => setScript({ ...script, title: e.target.value })}
					/>
					<Input
						className={style.form__fields__input}
						type='text'
						placeholder='Название урока'
						value={lesson.title}
						onChange={e => setLessons({ ...lesson, title: e.target.value })}
					/>
				</div>

				<Button className={style.form__submit} htmlType='submit'>
					Создать
				</Button>
			</div>
		</form>
	)
}

export default Form
