export const categories = [
	{ name: 'Flowers' },
	{ name: 'Weddings' },
	{ name: 'Hampers & Gifts' }
]

export const subCategories = [
	{ name: 'By flowers', categoryId: 1 },
	{ name: 'By type', categoryId: 1 },
	{ name: 'Occasions', categoryId: 1 },
	{ name: 'Gifts', categoryId: 3 }
]

export const productTypes = [
	{ name: 'Tulips', subCategoryId: 1 },
	{ name: 'Roses', subCategoryId: 1 },
	{ name: 'Peonies', subCategoryId: 1 },

	{ name: 'Bouquets in hat boxes', subCategoryId: 2 },
	{ name: 'Flowers in a basket', subCategoryId: 2 },
	{ name: 'Giant bouquets', subCategoryId: 2 },
	{ name: 'Mix bouquets', subCategoryId: 2 },
	{ name: 'Mono bouquets', subCategoryId: 2 },

	{ name: 'Thank You', subCategoryId: 4 },
	{ name: 'Congratulations', subCategoryId: 4 },
	{ name: 'I Love You', subCategoryId: 4 },
	{ name: 'Valentines Day', subCategoryId: 4 },

	{ name: 'Baloons', subCategoryId: 4 },
	{ name: 'Soft toys', subCategoryId: 4 }
]

export const productTypeRelations = [
	{ productId: 1, productTypeId: 1 },
	{ productId: 1, productTypeId: 8 },
	{ productId: 2, productTypeId: 1 },
	{ productId: 1, productTypeId: 9 },
	{ productId: 3, productTypeId: 1 },
	{ productId: 3, productTypeId: 8 },
	{ productId: 4, productTypeId: 1 },
	{ productId: 4, productTypeId: 8 },
	{ productId: 4, productTypeId: 11 },
	{ productId: 5, productTypeId: 1 },
	{ productId: 5, productTypeId: 8 },
	{ productId: 6, productTypeId: 1 },
	{ productId: 6, productTypeId: 8 },
	{ productId: 7, productTypeId: 1 },
	{ productId: 7, productTypeId: 8 },
	{ productId: 8, productTypeId: 1 },
	{ productId: 8, productTypeId: 8 },
	{ productId: 9, productTypeId: 1 },
	{ productId: 9, productTypeId: 8 },
	{ productId: 10, productTypeId: 1 },
	{ productId: 10, productTypeId: 8 },
	{ productId: 11, productTypeId: 1 },
	{ productId: 11, productTypeId: 8 },
	{ productId: 11, productTypeId: 12 },
	{ productId: 12, productTypeId: 1 },
	{ productId: 12, productTypeId: 8 },
	{ productId: 13, productTypeId: 2 },
	{ productId: 13, productTypeId: 8 },
	{ productId: 13, productTypeId: 10 },
	{ productId: 14, productTypeId: 2 },
	{ productId: 14, productTypeId: 8 },
	{ productId: 15, productTypeId: 2 },
	{ productId: 15, productTypeId: 6 },
	{ productId: 15, productTypeId: 7 },
	{ productId: 15, productTypeId: 12 },
	{ productId: 16, productTypeId: 2 },
	{ productId: 16, productTypeId: 4 },
	{ productId: 17, productTypeId: 2 },
	{ productId: 17, productTypeId: 6 },
	{ productId: 17, productTypeId: 7 },
	{ productId: 18, productTypeId: 2 },
	{ productId: 18, productTypeId: 6 },
	{ productId: 18, productTypeId: 11 },
	{ productId: 19, productTypeId: 2 },
	{ productId: 19, productTypeId: 8 },
	{ productId: 20, productTypeId: 2 },
	{ productId: 20, productTypeId: 7 },
	{ productId: 21, productTypeId: 2 },
	{ productId: 21, productTypeId: 7 },
	{ productId: 22, productTypeId: 2 },
	{ productId: 22, productTypeId: 7 },
	{ productId: 22, productTypeId: 9 },
	{ productId: 23, productTypeId: 2 },
	{ productId: 23, productTypeId: 8 },
	{ productId: 23, productTypeId: 12 },
	{ productId: 24, productTypeId: 3 },
	{ productId: 24, productTypeId: 6 },
	{ productId: 24, productTypeId: 7 },
	{ productId: 24, productTypeId: 8 },
	{ productId: 25, productTypeId: 3 },
	{ productId: 25, productTypeId: 6 },
	{ productId: 25, productTypeId: 8 },
	{ productId: 26, productTypeId: 3 },
	{ productId: 26, productTypeId: 8 },
	{ productId: 27, productTypeId: 3 },
	{ productId: 28, productTypeId: 2 },
	{ productId: 28, productTypeId: 4 },
	{ productId: 29, productTypeId: 2 },
	{ productId: 29, productTypeId: 4 },
	{ productId: 29, productTypeId: 10 },
	{ productId: 30, productTypeId: 5 },
	{ productId: 35, productTypeId: 13 },
	{ productId: 36, productTypeId: 14 }
]

export const products = [
	{
		name: 'Tulips',
		imageUrl: 'https://i.ibb.co/kMbmCQY/IMG-0034.webp',
		categoryId: 1
	},
	{
		name: 'Imogen tulips',
		imageUrl: 'https://i.ibb.co/C6ymH4z/IMG-0185.webp',
		categoryId: 1
	},
	{
		name: 'Elsie tulips',
		imageUrl: 'https://i.ibb.co/dWSShhM/IMG-1810.webp',
		categoryId: 1
	},
	{
		name: 'Leatrice tulips',
		imageUrl: 'https://i.ibb.co/42xkrYj/IMG-9034.webp',
		categoryId: 1
	},
	{
		name: 'Vanessa tulips',
		imageUrl: 'https://i.ibb.co/mB9Gftb/IMG-4856.webp',
		categoryId: 1
	},
	{
		name: 'Sadie tulips',
		imageUrl: 'https://i.ibb.co/JKGyW6n/IMG-1544.webp',
		categoryId: 1
	},
	{
		name: 'Renita tulips',
		imageUrl: 'https://i.ibb.co/t4WS4tj/IMG-7262.webp',
		categoryId: 1
	},
	{
		name: 'Tina tulips',
		imageUrl: 'https://i.ibb.co/tJQC0zx/IMG-7575.webp',
		categoryId: 1
	},
	{
		name: 'Tiana tulips',
		imageUrl: 'https://i.ibb.co/h8QMMsh/IMG-0816.webp',
		categoryId: 1
	},
	{
		name: 'Brielle tulips',
		imageUrl: 'https://i.ibb.co/SXT8KZh/IMG-46562.webp',
		categoryId: 1
	},
	{
		name: 'Nellie tulips',
		imageUrl: 'https://i.ibb.co/DgMDY2g/IMG-1541.webp',
		categoryId: 1
	},
	{
		name: 'Fiona tulips',
		imageUrl: 'https://i.ibb.co/wMRFV4N/IMG-0399.webp',
		categoryId: 1
	},
	{
		name: 'Agata roses',
		imageUrl: 'https://i.ibb.co/pvDwKTT/IMG-3227.webp',
		categoryId: 1
	},
	{
		name: 'Grace roses',
		imageUrl: 'https://i.ibb.co/hdQWLkf/IMG-3212.webp',
		categoryId: 1
	},
	{
		name: 'Kaia roses',
		imageUrl: 'https://i.ibb.co/ZhSZTSw/IMG-9843.webp',
		categoryId: 1
	},
	{
		name: 'Missy roses',
		imageUrl: 'https://i.ibb.co/pW57kSm/IMG-0889.webp',
		categoryId: 1
	},
	{
		name: 'Leah roses',
		imageUrl: 'https://i.ibb.co/60vjqfB/IMG-6576.webp',
		categoryId: 1
	},
	{
		name: 'Sierra roses',
		imageUrl: 'https://i.ibb.co/TqxScMd/IMG-3808.webp',
		categoryId: 1
	},
	{
		name: 'Jane roses',
		imageUrl: 'https://i.ibb.co/D4Z68jM/IMG-3173.webp',
		categoryId: 1
	},
	{
		name: 'Musa roses',
		imageUrl: 'https://i.ibb.co/hgbKwts/IMG-7227.webp',
		categoryId: 1
	},
	{
		name: 'Amina roses',
		imageUrl: 'https://i.ibb.co/bLV3Vqm/IMG-8604.webp',
		categoryId: 1
	},
	{
		name: 'Iria roses',
		imageUrl: 'https://i.ibb.co/HTzdvh1/IMG-2768.webp',
		categoryId: 1
	},
	{
		name: 'Isla roses',
		imageUrl:
			'https://i.ibb.co/8DTCvxD/6-D6227-D5-5-FA0-4-F83-9-F1-E-7-BF43585837-B.webp',
		categoryId: 1
	},
	{
		name: 'Madison roses',
		imageUrl: 'https://i.ibb.co/yB6rrWt/IMG-2955.webp',
		categoryId: 1
	},
	{
		name: 'Ceren peonies',
		imageUrl: 'https://i.ibb.co/pyD0fgb/photo-2024-04-2422-06-49.webp',
		categoryId: 1
	},
	{
		name: 'Top peonies',
		imageUrl: 'https://i.ibb.co/p3M0xJs/IMG-9311.webp',
		categoryId: 1
	},
	{
		name: 'Aylin peonies',
		imageUrl: 'https://i.ibb.co/Wgf1SvQ/photo-2024-04-2421-50-43.webp',
		categoryId: 1
	},
	{
		name: 'Asli peonies',
		imageUrl: 'https://i.ibb.co/84LsW8n/photo-2024-04-2421-39-50.webp',
		categoryId: 1
	},
	{
		name: 'Bella',
		imageUrl: 'https://i.ibb.co/mFY2d37/IMG-51302.webp',
		categoryId: 1
	},
	{
		name: 'Fanny',
		imageUrl: 'https://i.ibb.co/pLNXdwZ/IMG-8832.webp',
		categoryId: 1
	},
	{
		name: 'Leyla',
		imageUrl: 'https://i.ibb.co/G0TbYGf/IMG-3257.webp',
		categoryId: 1
	},
	{
		name: 'Grace',
		imageUrl: 'https://i.ibb.co/fkc3mYY/IMG-8956.webp',
		categoryId: 1
	},
	{
		name: 'Tatiana',
		imageUrl: 'https://i.ibb.co/8B532jz/Screenshot2024-05-31at13-36-04.webp',
		categoryId: 2
	},
	{
		name: 'Elif',
		imageUrl: 'https://i.ibb.co/wz83GL0/Screenshot2024-05-31at12-56-17.webp',
		categoryId: 2
	},
	{
		name: 'Millie',
		imageUrl: 'https://i.ibb.co/rc9ytYh/IMG-0324.webp',
		categoryId: 3
	},
	{
		name: 'Polar bear',
		imageUrl: 'https://i.ibb.co/Lt7jHYh/IMG-0293.webp',
		categoryId: 3
	}
]

export const variants = [
	{
		productId: 1,
		currentPrice: 89.0,
		size: 'Classic',
		color: 'Red',
		descr:
			'- 40 tulips. paper To stay fresh, the bouquet goes with aqua bag and a flower food'
	},
	{
		productId: 1,
		currentPrice: 99.0,
		size: 'Deluxe',
		color: 'Red',
		descr:
			'- 40 tulips. paper To stay fresh, the bouquet goes with aqua bag and a flower food'
	},
	{
		productId: 2,
		currentPrice: 59.0,
		size: 'Classic',
		color: 'Mix',
		descr:
			'- 30 tulips. Our beautiful tulips are a springtime blend of vibrant colors and delicate petals. '
	},
	{
		productId: 2,
		currentPrice: 89.0,
		size: 'Luxe',
		color: 'White',
		descr:
			'- 50 tulips. Our beautiful tulips are a springtime blend of vibrant colors and delicate petals. '
	},
	{
		productId: 3,
		currentPrice: 49.0,
		size: 'Classic',
		color: 'White',
		descr:
			'- 20 white tulips - greenery - paper. To stay fresh, the bouquet goes with aqua bag and a flower food. '
	},
	{
		productId: 3,
		currentPrice: 69.0,
		size: 'Deluxe',
		color: 'Purple',
		descr:
			'- 20 white tulips - greenery - paper. To stay fresh, the bouquet goes with aqua bag and a flower food. '
	},
	{
		productId: 3,
		currentPrice: 69.0,
		size: 'Deluxe',
		color: 'White',
		descr:
			'- 20 white tulips - greenery - paper. To stay fresh, the bouquet goes with aqua bag and a flower food. '
	},
	{
		productId: 3,
		currentPrice: 79.0,
		size: 'Luxe',
		color: 'Pink',
		descr:
			'- 20 white tulips - greenery - paper. To stay fresh, the bouquet goes with aqua bag and a flower food. '
	},
	{
		productId: 4,
		currentPrice: 69.0,
		size: 'Classic',
		color: 'Mix',
		descr:
			'- 30 mix tulips. Brighten your home with this mix of beautiful tulips!'
	},
	{
		productId: 4,
		currentPrice: 89.0,
		size: 'Luxe',
		color: 'Mix',
		descr:
			'- 30 mix tulips. Brighten your home with this mix of beautiful tulips!'
	},
	{
		productId: 5,
		currentPrice: 49.0,
		size: 'Classic',
		color: 'Pink',
		descr:
			'- 20 pink tulips. This beautiful bouquet pink tulips is perfect for expressing your love and appreciation.'
	},
	{
		productId: 6,
		currentPrice: 99.0,
		size: 'Classic',
		color: 'Violet',
		descr:
			'- 50 tulips - paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 6,
		currentPrice: 149.0,
		size: 'Deluxe',
		color: 'Violet',
		descr:
			'- 50 tulips - paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 6,
		currentPrice: 199.0,
		size: 'Luxe',
		color: 'Violet',
		descr:
			'- 50 tulips - paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 7,
		currentPrice: 99.0,
		size: 'Classic',
		color: 'Red',
		descr:
			'- 50 peony tulips. Enjoy a stunning summer bouquet with these fresh tulips.'
	},
	{
		productId: 8,
		currentPrice: 99.0,
		size: 'Classic',
		color: 'Violet',
		descr:
			'- 50 tulips. Celebrate spring holidays with these beautiful purple tulips, perfect for adding a touch of elegance to your home.'
	},
	{
		productId: 9,
		currentPrice: 199.0,
		size: 'Classic',
		color: 'Pink',
		descr:
			'- 100 tulips - wrapping. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 9,
		currentPrice: 299.0,
		size: 'Deluxe',
		color: 'Pink',
		descr:
			'- 100 tulips - wrapping. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 9,
		currentPrice: 399.0,
		size: 'Luxe',
		color: 'Pink',
		descr:
			'- 100 tulips - wrapping. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 9,
		currentPrice: 299.0,
		size: 'Deluxe',
		color: 'White',
		descr:
			'- 100 tulips - wrapping. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 10,
		currentPrice: 149.0,
		size: 'Deluxe',
		color: 'Red',
		descr:
			'- 50 tulips - paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 11,
		currentPrice: 69.0,
		size: 'Classic',
		color: 'White',
		descr:
			'- 30 tulips - paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 11,
		currentPrice: 69.0,
		size: 'Classic',
		color: 'Purple',
		descr:
			'- 30 tulips - paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 12,
		currentPrice: 99.0,
		size: 'Classic',
		color: 'White',
		descr:
			'- 50 tulips. Treat someone special to the beauty of pink and white tulips, delicately arranged in a bouquet.'
	},
	{
		productId: 12,
		currentPrice: 149.0,
		size: 'Luxe',
		color: 'White',
		descr:
			'- 50 tulips. Treat someone special to the beauty of pink and white tulips, delicately arranged in a bouquet.'
	},
	{
		productId: 13,
		currentPrice: 65.0,
		size: 'Classic',
		color: 'Pink',
		descr:
			'- 6 spray roses, - 3 limonium, - 3 pistachio, - 5 craft paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 14,
		currentPrice: 49.0,
		size: 'Classic',
		color: 'Baby Pink',
		descr:
			'- 10 spray roses, - 5 craft paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 14,
		currentPrice: 69.0,
		size: 'Deluxe',
		color: 'Baby Pink',
		descr:
			'- 10 spray roses, - 5 craft paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 15,
		currentPrice: 149.0,
		size: 'Classic',
		color: 'Mix',
		descr:
			'- 8 hydrangeas, - 8 roses, - paper, - 2 eucalyptus . To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 15,
		currentPrice: 299.0,
		size: 'Luxe',
		color: 'Mix',
		descr:
			'- 8 hydrangeas, - 8 roses, - paper, - 2 eucalyptus . To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 16,
		currentPrice: 99.0,
		size: 'Deluxe',
		color: 'Pink',
		descr:
			'- 10 spray roses, - oasis, - hat box. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 16,
		currentPrice: 119.0,
		size: 'Luxe',
		color: 'White',
		descr:
			'- 10 spray roses, - oasis, - hat box. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 17,
		currentPrice: 249.0,
		size: 'Classic',
		color: 'Mix',
		descr:
			'- 8 hydrangea, - 10 spray rose, - 12 rose, - paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 18,
		currentPrice: 49.0,
		size: 'Classic',
		color: 'Mix',
		descr:
			'- 20 spray roses. Send your loved one a stunning pink peony bouquet to brighten their day.'
	},
	{
		productId: 18,
		currentPrice: 89.0,
		size: 'Deluxe',
		color: 'Mix',
		descr:
			'- 20 spray roses. Send your loved one a stunning pink peony bouquet to brighten their day.'
	},
	{
		productId: 19,
		currentPrice: 49.0,
		size: 'Classic',
		color: 'Red',
		descr:
			'- 8 red roses, - 5 craft paper. Send your loved one a stunning pink peony bouquet to brighten their day.'
	},
	{
		productId: 20,
		currentPrice: 79.0,
		size: 'Classic',
		color: 'Mix',
		descr:
			'- 4 roses, - 4 alstroemeria, - 1 pistachio. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 20,
		currentPrice: 109.0,
		size: 'Luxe',
		color: 'Mix',
		descr:
			'- 4 roses, - 4 alstroemeria, - 1 pistachio. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 21,
		currentPrice: 99.0,
		size: 'Classic',
		color: 'White',
		descr:
			'- 6 spray roses, - 5 roses, - 6 matiola, - paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 21,
		currentPrice: 99.0,
		size: 'Classic',
		color: 'Mix',
		descr:
			'- 6 spray roses, - 5 roses, - 6 matiola, - paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 22,
		currentPrice: 149.0,
		size: 'Classic',
		color: 'Purple',
		descr:
			'- 4 hydrangea, - 10 spray roses, - 4 carnation, - 5 paper. We offer 3 different sizes: Classic (as in photo).'
	},
	{
		productId: 23,
		currentPrice: 49.0,
		size: 'Classic',
		color: 'Mix',
		descr:
			'- 2 spray rose, - 1 rose, - 4 craft paper. To stay fresh, the bouquet goes with aqua bag.'
	},
	{
		productId: 24,
		currentPrice: 89.0,
		size: 'Deluxe',
		color: 'Red',
		descr:
			'- 12 red roses, - 2 eucalyptus, - 5 craft paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 24,
		currentPrice: 119.0,
		size: 'Luxe',
		color: 'Red',
		descr:
			'- 12 red roses, - 2 eucalyptus, - 5 craft paper. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 25,
		currentPrice: 126.0,
		size: 'Luxe',
		color: 'Pink',
		descr:
			'Tender bouquet of pink peonies. We kindly ask you to keep in mind, that the availability of the peonies depends on the season.'
	},
	{
		productId: 26,
		currentPrice: 699.0,
		size: 'Deluxe',
		color: 'Pink',
		descr:
			'Incredible luxurious bouquet of pink peonies. We appreciate you choosing us, so if the peonies or tulips are out is stock.'
	},
	{
		productId: 26,
		currentPrice: 799.0,
		size: 'Luxe',
		color: 'Pink',
		descr:
			'Incredible luxurious bouquet of pink peonies. We appreciate you choosing us, so if the peonies or tulips are out is stock.'
	},
	{
		productId: 27,
		currentPrice: 120.0,
		size: 'Classic',
		color: 'White',
		descr: 'Elegant bouquet of white peonies.'
	},
	{
		productId: 28,
		currentPrice: 120.0,
		size: 'Classic',
		color: 'White',
		descr:
			'Tender bouquet of white and pink peonies. We kindly ask you to keep in mind, that the availability of the peonies and tulips depends on the season.'
	},
	{
		productId: 28,
		currentPrice: 120.0,
		size: 'Classic',
		color: 'Pink',
		descr:
			'Tender bouquet of white and pink peonies. We kindly ask you to keep in mind, that the availability of the peonies and tulips depends on the season.'
	},
	{
		productId: 29,
		currentPrice: 79.0,
		size: 'Classic',
		color: 'Pink',
		descr:
			'- 10 spray roses, - oasis, - hat box. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 30,
		currentPrice: 79.0,
		size: 'Classic',
		color: 'White',
		descr:
			'- 10 spray roses, - oasis, - hat box. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 31,
		currentPrice: 179.0,
		size: 'Classic',
		color: 'Red',
		descr:
			'- 24 roses, - eucalyptus, - hat box. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 32,
		currentPrice: 399.0,
		size: 'Classic',
		color: 'Red',
		descr:
			'- 24 roses, - eucalyptus, - hat box. To stay fresh, the bouquet goes with aqua bag and a flower food.'
	},
	{
		productId: 33,
		currentPrice: 120.0,
		descr: 'Wedding bouquet. Carnation - 8 stems. Hydrangeas - 3 stems.'
	},
	{
		productId: 34,
		currentPrice: 140.0,
		descr:
			'Wedding bouquet. Alstroemeria - 3 stems. Delphinium - 7 stems. Roses - 8 stems. Eucalyptus - 5 stems '
	},
	{
		productId: 35,
		currentPrice: 129.0,
		color: 'Mix',
		descr:
			'Treat your loved one with a thoughtful surprise - a cute teddy bear with a balloon and a beautiful flower arrangement in an elegant hat box.'
	},
	{
		productId: 36,
		currentPrice: 109.0,
		size: 'Classic',
		color: 'White',
		descr:
			'Give a smile to your loved ones with our Polar Bear toy and a set of fresh delicious berries. This unusual mix will be a pleasant surprise.'
	}
]
