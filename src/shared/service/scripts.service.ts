import { z } from 'zod'
import { baseApi } from '~/shared/store/api/getallscripts'
import { IScript, ZScriptsArray } from '~/shared/types/scripts.interface'

const getAllScripts = baseApi.injectEndpoints({
	endpoints: builder => ({
		getAllScripts: builder.query<IScript[], void>({
			query: () => '/scripts',
			transformResponse: (res: unknown) => {
				try {
					return ZScriptsArray.parse(res)
				} catch (error) {
					if (error instanceof z.ZodError) {
						console.error('Validation errors:', error.errors)
					}
					throw error
				}
			}
		})
	}),
	overrideExisting: true
})

export const { useGetAllScriptsQuery } = getAllScripts
