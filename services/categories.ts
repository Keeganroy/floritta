import { apiInstance } from '@/services/instance'
import { Routes } from '@/services/routes'
import { Category } from '@prisma/client'

export const getCategories = async (): Promise<Category[]> => {
	const { data } = await apiInstance.get<Category[]>(Routes.CATEGORIES)

	return data
}
