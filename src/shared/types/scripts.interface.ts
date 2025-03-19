import { z } from 'zod'

export interface IScript {
	id: string
	title: string
}

export interface ILesson {
	id: string
	title: string
	script_id: string
}

export const ZLesson = z.object({
	id: z.string(),
	title: z.string(),
	script_id: z.string()
})

export const ZScript = z.object({
	id: z.string(),
	title: z.string()
})

export const ZScriptsArray = z.array(ZScript)
