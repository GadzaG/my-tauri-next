'use client'
import { CardImage, CardImageProps } from '@/components/card-image'

const CardInfos: CardImageProps[] = [
	{
		imageSource: 'https://x-val.ru/assets/img215.jpg',
		title: 'XVal',
		description:
			'A practical talk on component APIs, accessibility, and shipping faster.',
		totalCount: 5,
		onlineCount: 6,
		href: '/devices/xvals',
	},
	{
		imageSource: 'https://x-val.ru/assets/img28.jpg',
		title: 'XVaLite',
		description:
			'Explore the future of decentralized applications and blockchain technology.',
		totalCount: 124,
		onlineCount: 23,
		href: '/devices/xvalites',
	},
	{
		imageSource: 'https://x-val.ru/assets/a2.jpg',
		title: 'XRT',
		description:
			'Latest advancements in artificial intelligence and machine learning models.',
		totalCount: 89,
		onlineCount: 45,
		href: '/devices/xrts',
	},
	{
		imageSource:
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
		title: 'Mobile Dev Summit',
		description:
			'Building responsive apps for iOS, Android, and cross-platform frameworks.',
		totalCount: 67,
		onlineCount: 12,
	},
]

// ✅ Идеально для вашего случая
export default function Devices() {
	return (
		<div className='min-h-screen grid place-items-center p-8 bg-gradient-to-br from-slate-50 to-slate-200'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl'>
				{CardInfos.map((card, index) => (
					<CardImage key={index} {...card} />
				))}
			</div>
		</div>
	)
}
