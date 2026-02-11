'use client' // Add this if using Next.js App Router

import { Badge } from '@/components/ui/badge'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useRouter } from 'next/navigation' // or useRouter from 'react-router-dom'

export interface CardImageProps {
	imageSource: string
	title: string
	description: string
	totalCount: number
	onlineCount: number
	href?: string // Add href prop for navigation
}

export function CardImage({
	imageSource,
	title,
	description,
	totalCount,
	onlineCount,
	href,
}: CardImageProps) {
	const router = useRouter()

	const handleClick = () => {
		if (href) {
			router.push(href)
		}
	}

	return (
		<Card
			className='relative mx-auto w-full max-w-sm pt-0 rounded-xl border overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:z-40 cursor-pointer group'
			onClick={handleClick}
		>
			<div className='absolute inset-0 z-30 aspect-video bg-black/35 group-hover:bg-black/20 transition-all duration-300' />
			<img
				src={imageSource}
				alt={title}
				className='relative z-20 aspect-video w-full object-cover brightness-95 grayscale dark:brightness-80 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-300'
			/>
			<CardHeader>
				<CardTitle className='group-hover:text-primary transition-colors duration-300'>
					{title}
				</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardFooter className='flex items-center justify-between gap-2 p-6'>
				<div className='flex items-center gap-1'>
					Всего: <Badge variant='secondary'>{totalCount}</Badge>
				</div>
				<div className='flex items-center gap-1'>
					В сети: <Badge variant='default'>{onlineCount}</Badge>
				</div>
			</CardFooter>
		</Card>
	)
}
