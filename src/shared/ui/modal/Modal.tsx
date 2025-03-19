import React, { useState } from 'react'
import { Button, Modal, Input } from 'antd'

interface IModalWinProps {
	title: string
}

const ModalWin: React.FC<IModalWinProps> = ({ title }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleOk = () => {
		setIsModalOpen(false)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<>
			<Button type='primary' onClick={showModal}>
				{title}
			</Button>
			<Modal
				title='Изменить название'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<form action='' onSubmit={handleSubmit}>
					<Input placeholder='Изменить назавание' type='text' />
					<Button htmlType='submit' style={{ marginTop: '10px' }}>
						Изменить
					</Button>
				</form>
			</Modal>
		</>
	)
}

export default ModalWin
