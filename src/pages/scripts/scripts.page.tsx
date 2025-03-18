import { useParams } from 'react-router'
import { Container } from '~/shared/ui/container/container'
import Message from '~/shared/ui/message/Message'

const ScriptsPage = () => {
	const { id } = useParams<{ id: string }>()

	return (
		<div>
			<Container>
				<Message id={id!} />
			</Container>
		</div>
	)
}

export default ScriptsPage
