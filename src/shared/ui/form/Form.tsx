import { useState } from 'react'
import { Input, Button } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import style from './Form.module.scss'
import { useCreateScriptMutation } from '~/shared/service/scripts.service'
import console from 'console'
const script_id = uuidv4()

const defaultValue = {
	id: script_id,
	title: '',
	lessons: [
		{
			id: uuidv4(),
			title: '',
			script_id: script_id
		}
	]
}
const Form: React.FC = () => {
	const [script, setScript] = useState(defaultValue)
	const [createScript] = useCreateScriptMutation()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { toast } = await import('react-toastify')

		try {
			await createScript(script)
			setScript(defaultValue)
			toast.success('Удачное создание ценария')
		} catch (error) {
			console.log(error)
			toast.error('Ошибка создания сценария')
			return
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
