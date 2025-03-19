import React, { useState } from 'react'
import { Button, Modal, Input } from 'antd'
import style from '~/shared/ui/screenplay/Screenplay.module.scss'
import { useUpdateNameLessonMutation } from '~/shared/service/lessons.service'

interface IModalWinProps {
	title: string
	lesson_id: string
}

const ModalWin: React.FC<IModalWinProps> = ({ title, lesson_id }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [newTitle, setNewTitle] = useState(title)

	const [updateName, { isLoading }] = useUpdateNameLessonMutation()

	const showModal = () => setIsModalOpen(true)
	const handleCancel = () => setIsModalOpen(false)

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { toast } = await import('react-toastify')

		try {
			await updateName({ id: lesson_id, title: newTitle }).unwrap()
			toast.success('Удачное изменение')
			setIsModalOpen(false)
		} catch (error) {
			toast.error('Ошибка при изменении имени')
			console.error(error)
		}
	}

	return (
		<>
			<div className={style.screenplay__title__headline} onClick={showModal}>
				{title}
			</div>
			<Modal
				title='Изменить название'
				open={isModalOpen}
				onCancel={handleCancel}
				footer={null}
			>
				<form onSubmit={onSubmit}>
					<Input
						placeholder='Изменить название'
						type='text'
						value={newTitle}
						onChange={e => setNewTitle(e.target.value)}
					/>
					<Button
						htmlType='submit'
						style={{ marginTop: '10px' }}
						loading={isLoading}
					>
						Изменить
					</Button>
				</form>
			</Modal>
		</>
	)
}

export default ModalWin
