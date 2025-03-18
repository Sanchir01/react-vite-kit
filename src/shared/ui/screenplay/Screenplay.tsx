import { Button } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

import style from './Screenplay.module.scss'

interface IScreenplayPProps {
	title: string
	scenario: string
}

const Screenplay: React.FC<IScreenplayPProps> = ({ title, scenario }) => {
	return (
		<div className={style.screenplay}>
			<div className={style.screenplay__wrapper}>
				<div className={style.screenplay__title}>
					<CheckOutlined style={{ color: 'green' }} />
					{/* <CloseOutlined style={{ color: 'red' }} /> */}
					<div className={style.screenplay__title__headline}>{title}</div>
				</div>
				<div className={style.screenplay__scenario}>{scenario}</div>
				<div className={style.screenplay__buttons}>
					<Button className={style.screenplay__buttons__button}>
						+ Добавить реакцию персонажа
					</Button>
					<Button className={style.screenplay__buttons__button}>
						+ Добавить реакцию системы
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Screenplay
