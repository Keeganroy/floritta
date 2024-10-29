import { prisma } from './prisma-client'
import { hashSync } from 'bcrypt'
import {
	categories,
	products,
	productTypeRelations,
	productTypes,
	subCategories,
	variants
} from './constants'

async function generate() {
	await prisma.user.createMany({
		data: [
			{
				email: 'd.stepurka@mail.ru',
				login: 'Denis Stepurka',
				name: 'Denis',
				password: hashSync('111111', 10),
				phone: '+79136216422',
				role: 'ADMIN',
				verified: new Date()
			},
			{
				email: 'n.stepurka@mail.ru',
				login: 'Nikolay Stepurka',
				name: 'Nikolay',
				password: hashSync('000111', 10),
				phone: '+79136216423',
				role: 'ADMIN',
				verified: new Date()
			}
		]
	})

	await prisma.category.createMany({ data: categories })
	await prisma.subCategory.createMany({ data: subCategories })
	await prisma.productType.createMany({ data: productTypes })
	await prisma.product.createMany({ data: products })
	await prisma.productToProductType.createMany({ data: productTypeRelations })
	await prisma.variant.createMany({ data: variants })
}
async function clear() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "SubCategory" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "ProductType" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "ProductToProductType" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Variant" RESTART IDENTITY CASCADE`
}

async function main() {
	try {
		await clear()
		await generate()
	} catch (e) {
		console.error(e)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
