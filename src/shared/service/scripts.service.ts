import { z } from 'zod'
import { baseApi } from '~/shared/store/api/getallscripts'
import { IScript, ZScriptsArray } from '~/shared/types/scripts.interface'

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

		createScript: builder.mutation({
			query: script => ({
				body: script,
				url: '/scripts',
				method: 'POST'
			}),
			invalidatesTags: () => [{ type: 'scripts' }]
		})
	}),
	overrideExisting: true
})

export const { useGetAllScriptsQuery, useCreateScriptMutation } = getAllScripts
