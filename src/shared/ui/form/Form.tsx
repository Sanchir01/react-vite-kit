import { useState } from 'react'
import { Input, Button } from 'antd'

import style from './Form.module.scss'
import { useCreateScriptMutation } from '~/shared/service/scripts.service'

const defaultValue = {
	id: '',
	title: '',
	lessons: [
		{
			id: '',
			title: '',
			script_id: ''
		}
	]
}
const Form: React.FC = () => {
	const [script, setScript] = useState(defaultValue)
	const [createScript] = useCreateScriptMutation()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		createScript(script).then(() => {
			setScript(defaultValue)
		})
	}

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<div className={style.form__wrapper}>
				<h2 className={style.form__title}>Создание сценария</h2>

				<div className={style.form__fields}>
					<Input
						className={style.form__fields__input}
						type='text'
						placeholder='ID cценария '
						value={script.id}
						onChange={e => setScript({ ...script, id: e.target.value })}
					/>
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
						placeholder='Название действия'
						value={script.lessons[0].title}
						onChange={e =>
							setScript({
								...script,
								lessons: [{ ...script.lessons[0], title: e.target.value }]
							})
						}
					/>
					<Input
						className={style.form__fields__input}
						type='select'
						placeholder='Номер сценария'
						value={script.title}
						onChange={e => setScript({ ...script, title: e.target.value })}
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
