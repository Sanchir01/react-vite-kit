import { z } from 'zod'
import { baseApi } from '~/shared/store/api/getallscripts'
import {
	IScript,
	ZScript,
	ZScriptsArray
} from '~/shared/types/scripts.interface'

const getAllScripts = baseApi.injectEndpoints({
	endpoints: builder => ({
		getAllScripts: builder.query<IScript[], string | void>({
			query: id => (id ? `/scripts?id=${id}` : '/scripts'),
			transformResponse: (res: unknown) => {
				try {
					return ZScriptsArray.parse(res)
				} catch (error) {
					if (error instanceof z.ZodError) {
						console.error('Validation errors:', error.errors)
					}
					throw error
				}
			},
			providesTags: () => [{ type: 'scripts' }]
		}),
		createScript: builder.mutation<IScript, IScript>({
			query: script => ({
				body: script,
				url: '/scripts',
				method: 'POST'
			}),
			transformResponse: (res: unknown) => {
				try {
					return ZScript.parse(res)
				} catch (error) {
					if (error instanceof z.ZodError) {
						console.error('Validation errors:', error.errors)
					}
					throw error
				}
			},
			invalidatesTags: () => [{ type: 'scripts' }]
		}),
		updateNameScript: builder.mutation<IScript, string>({
			query: name => ({
				body: name,
				url: `/scripts/${name}`,
				method: 'PATCH'
			}),
			transformResponse: (res: unknown) => {
				try {
					return ZScript.parse(res)
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
	useGetAllScriptsQuery,
	useCreateScriptMutation,
	useUpdateNameScriptMutation
} = getAllScripts
