import { ILesson } from './../types/scripts.interface'
import { z } from 'zod'
import { baseApi } from '../store/api/getallscripts'
import { ZLesson } from '../types/scripts.interface'
export interface IUpdateLesson {
	id: string
	title: string
}
const getAllLessons = baseApi.injectEndpoints({
	endpoints: builder => ({
		getAllLessons: builder.query<ILesson[], string | void>({
			query: id => (id ? `/lessons?script_id=${id}` : `/lessons`),
			providesTags: ['scripts'],
			transformResponse: (res: unknown) => {
				try {
					return ZLesson.array().parse(res)
				} catch (error) {
					if (error instanceof z.ZodError) {
						console.error('Validation errors:', error.errors)
					}
					throw error
				}
			}
		}),
		createLesson: builder.mutation<ILesson, ILesson>({
			query: script => ({
				body: script,
				url: '/lessons',
				method: 'POST'
			}),
			transformResponse: (res: unknown) => {
				try {
					return ZLesson.parse(res)
				} catch (error) {
					if (error instanceof z.ZodError) {
						console.error('Validation errors:', error.errors)
					}
					throw error
				}
			}
		}),
		updateNameLesson: builder.mutation<ILesson, IUpdateLesson>({
			query: ({ id, title }) => ({
				body: { title },
				url: `/lessons/${id}`,
				method: 'PATCH'
			}),
			transformResponse: (res: unknown) => {
				try {
					return ZLesson.parse(res)
				} catch (error) {
					if (error instanceof z.ZodError) {
						console.error('Validation errors:', error.errors)
					}
					throw error
				}
			},
			invalidatesTags: () => [{ type: 'scripts' }]
		})
	}),
	overrideExisting: true
})

export const {
	useGetAllLessonsQuery,
	useUpdateNameLessonMutation,
	useCreateLessonMutation
} = getAllLessons
