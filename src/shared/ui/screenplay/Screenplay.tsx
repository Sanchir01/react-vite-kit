import { Button } from 'antd'
import {
	CheckOutlined,
	ArrowRightOutlined,
	DeleteOutlined
} from '@ant-design/icons'

import style from './Screenplay.module.scss'

interface IScreenplayPProps {
	title: string
	scenario_id: string
}

const Screenplay: React.FC<IScreenplayPProps> = ({ title, scenario_id }) => {
	return (
		<div className={style.screenplay}>
			<div className={style.screenplay__wrapper}>
				<div className={style.screenplay__head}>
					<div className={style.screenplay__title}>
						<CheckOutlined style={{ color: 'green' }} />
						{/* <CloseOutlined style={{ color: 'red' }} /> */}
						<div className={style.screenplay__title__headline}>{title}</div>
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
