import React, { useState } from 'react'
import { Button, Modal, Input } from 'antd'

import style from '~/shared/ui/screenplay/Screenplay.module.scss'
import {
	useGetAllScriptsQuery,
	useUpdateNameScriptMutation
} from '~/shared/service/scripts.service'
interface IModalWinProps {
	title: string
	script_id: string
	lesson_id: string
}

const ModalWin: React.FC<IModalWinProps> = ({
	title,
	script_id,
	lesson_id
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}

	console.log(lesson_id)
	const handleOk = () => {
		setIsModalOpen(false)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	const { data, isLoading, isSuccess } = useGetAllScriptsQuery(script_id)
	const [updateName] = useUpdateNameScriptMutation()

	const onSubmit = async () => {
		const { toast } = await import('react-toastify')

		try {
			await updateName(title)
			toast.success('Удачное изменение')
		} catch (error) {
			toast.error('Ошибка при изменении имени')
			console.log(error)
			return
		}
	}
	console.log('this one script', data)
	return (
		<>
			<div className={style.screenplay__title__headline} onClick={showModal}>
				{title}
			</div>
			<Modal
				title='Изменить название'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				{isLoading ? (
					<div>loading</div>
				) : (
					isSuccess && (
						<form action='' onSubmit={onSubmit}>
							<Input placeholder='Изменить назавание' type='text' />
							<Button htmlType='submit' style={{ marginTop: '10px' }}>
								Изменить
							</Button>
						</form>
					)
				)}
			</Modal>
		</>
	)
}

export default ModalWin
