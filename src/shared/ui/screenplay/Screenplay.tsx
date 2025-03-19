import { Button } from 'antd'
import {
	CheckOutlined,
	ArrowRightOutlined,
	DeleteOutlined
} from '@ant-design/icons'

import style from './Screenplay.module.scss'
import ModalWin from '../modal/Modal'

interface IScreenplayPProps {
	title: string
	scenario_id: string
}

const Screenplay: React.FC<IScreenplayPProps> = ({ title, scenario_id }) => {
	console.log(title)
	return (
		<div className={style.screenplay}>
			<div className={style.screenplay__wrapper}>
				<div className={style.screenplay__head}>
					<div className={style.screenplay__title}>
						<CheckOutlined style={{ color: 'green' }} />
						<ModalWin lesson_id={scenario_id} title={title} />
					</div>
					<Button className={style.screenplay__delete}>
						<DeleteOutlined />
					</Button>
				</div>

				<div className={style.screenplay__scenario}>
					<ArrowRightOutlined />
					{scenario_id}
				</div>
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
