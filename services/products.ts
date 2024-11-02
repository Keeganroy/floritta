import { apiInstance } from '@/services/instance'
import { Product } from '@prisma/client'
import { Routes } from '@/services/routes'

export const search = async (query: string): Promise<Product[]> => {
	const { data } = await apiInstance.get<Product[]>(Routes.SEARCH, {
		params: { query }
	})
	return data
}
