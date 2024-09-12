import Amex from '@/public/images/icons/amex.svg'
import ApplePay from '@/public/images/icons/a-pay.svg'
import Mastercard from '@/public/images/icons/mastercard.svg'
import Visa from '@/public/images/icons/visa.svg'
import Paypal from '@/public/images/icons/paypal.svg'
import UnionPay from '@/public/images/icons/unionpay.svg'

export const DELIVERY = [
	{ id: 0, text: 'Same day London', link: '/london' },
	{ id: 1, text: 'Fulham and Hammersmith', link: '/fulham' },
	{ id: 2, text: 'Next day flowers UK', link: '/uk' },
	{ id: 3, text: 'Delivery all over London', link: '/uk' },
	{ id: 4, text: 'UK wide delivery', link: '/uk' }
] as const

export const SUBCRIPTION = [
	{ id: 0, text: 'Seasonal gift', link: '/seasonal' },
	{ id: 1, text: 'Subscription luxury', link: '/luxury' },
	{ id: 2, text: 'Subscription birthday', link: '/birthday' },
	{ id: 3, text: 'Gift subscription', link: '/subscription' },
	{ id: 4, text: 'Romance gift subscription', link: '/romance' },
	{ id: 5, text: 'Home subscription', link: '/home' }
] as const

export const BY_FLOWERS = [
	{ id: 0, text: 'Roses', link: '/catalogue/roses' },
	{ id: 1, text: 'Peonies', link: '/catalogue/peonies' },
	{ id: 2, text: 'Lilies', link: '/catalogue/lilies' },
	{ id: 3, text: 'Orchids', link: '/catalogue/orchids' },
	{ id: 4, text: 'Gerbera', link: '/catalogue/gerbera' },
	{ id: 5, text: 'Hydrangea', link: '/catalogue/hydrangea' }
] as const

export const OCCASIONS = [
	{ id: 0, text: 'Birthday flowers', link: '/birthday' },
	{ id: 1, text: 'Fathers day', link: '/fathers' },
	{ id: 2, text: 'Thank you', link: '/thank' },
	{ id: 3, text: 'Anniversary', link: '/anniversary' },
	{ id: 4, text: 'Congratulations', link: '/congratulations' },
	{ id: 5, text: 'Thinking of you', link: '/thinkings' },
	{ id: 6, text: 'Get well soon', link: '/soon' },
	{ id: 7, text: 'I am sorry', link: '/sorry' },
	{ id: 8, text: 'I love you', link: '/love' },
	{ id: 9, text: 'Mothers Day', link: '/mothers' },
	{ id: 10, text: 'New born', link: '/born' }
] as const

export const FOR_USER = [
	{ id: 0, text: 'Contacts', link: '/contacts' },
	{ id: 1, text: 'FAQ', link: '/faq' },
	{ id: 2, text: 'Blog', link: '/blog' }
] as const

export const LEGAL_DOCUMENTS = [
	{ id: 0, text: 'Privacy Policy', link: '/politics' },
	{ id: 1, text: 'Refund Policy', link: '/refund' },
	{ id: 2, text: 'Shipping Policy', link: '/policy' },
	{ id: 3, text: 'Terms of Service', link: '/terms' }
] as const

export const PAYMENTS_IMG = [
	{ id: 0, imgUrl: Amex },
	{ id: 1, imgUrl: ApplePay },
	{ id: 2, imgUrl: Mastercard },
	{ id: 3, imgUrl: Visa },
	{ id: 4, imgUrl: Paypal },
	{ id: 5, imgUrl: UnionPay }
] as const
