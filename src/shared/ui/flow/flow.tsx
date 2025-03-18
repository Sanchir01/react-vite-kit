import { useCallback } from 'react'
import {
	ReactFlow,
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
	BackgroundVariant
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'

const data = {
	scripts: [
		{ id: '1', title: 'Главный сценарий', lessons: ['1', '2'] },
		{ id: '2', title: 'Пройти тестирование', lessons: ['2', '3'] },
		{ id: '3', title: 'Пройти тест', lessons: ['1', '3', '4'] }
	],
	lessons: [
		{ id: '1', title: 'Газообразное состояние' },
		{ id: '2', title: 'Газообразное пресное агрегатное состояние' },
		{ id: '3', title: 'В море вода соленая' },
		{ id: '4', title: 'В реке вода соленая' },
		{ id: '5', title: 'Жидкое состояние' },
		{ id: '6', title: 'В реке вода соленая' }
	]
}

const getNodesAndEdges = () => {
	//@ts-ignore
	const nodes: any[] = []
	//@ts-ignore
	const edges: any[] = []

	const lessonConnections = new Map()

	data.scripts.forEach(script => {
		script.lessons.forEach(lessonId => {
			lessonConnections.set(
				lessonId,
				(lessonConnections.get(lessonId) || 0) + 1
			)
		})
	})

	data.scripts.forEach((script, index) => {
		nodes.push({
			id: `script-${script.id}`,
			position: { x: 200, y: index * 200 },
			data: { label: script.title },
			type: 'default'
		})

		script.lessons.forEach((lessonId, lessonIndex) => {
			const lesson = data.lessons.find(l => l.id === lessonId)
			const lessonNodeId = `lesson-${lesson!.id}`

			const isSharedLesson = lessonConnections.get(lesson!.id) > 1

			if (!nodes.some(n => n.id === lessonNodeId)) {
				nodes.push({
					id: lessonNodeId,
					position: { x: 500, y: lessonIndex * 150 },
					data: { label: lesson!.title },
					style: {
						backgroundColor: isSharedLesson ? '#FFCC00' : '#00CCFF',
						color: 'black',
						borderRadius: 10,
						padding: 5
					}
				})
			}

			edges.push({
				id: `edge-${script.id}-${lesson!.id}`,
				source: `script-${script.id}`,
				target: lessonNodeId
			})
		})
	})

	return { nodes, edges }
}

export default function Flow() {
	const { nodes: initialNodes, edges: initialEdges } = getNodesAndEdges()

	const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
	//@ts-ignore
	const onConnect = useCallback(
		(params: any) => setEdges(eds => addEdge(params, eds)),
		[setEdges]
	)

	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
			>
				<Controls />
				<MiniMap />
				<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
			</ReactFlow>
		</div>
	)
}
