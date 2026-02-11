'use client'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { ChartArea, Cpu, Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
	{ href: '/', label: 'Главная', icon: Home },
	{ href: '/devices', label: 'Устройства', icon: Cpu },
	{ href: '/sessions', label: 'Сессии', icon: ChartArea },
]

export function AppSidebar() {
	const pathname = usePathname()

	return (
		<Sidebar collapsible='icon'>
			<SidebarHeader className='pl-2'>
				<SidebarTrigger />
			</SidebarHeader>
			<SidebarContent className='py-4'>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu className='space-y-1'>
							{menuItems.map(item => {
								const isActive =
									pathname === item.href || pathname.startsWith(item.href + '/')

								return (
									<SidebarMenuItem key={item.href}>
										<SidebarMenuButton
											asChild
											isActive={isActive}
											tooltip={item.label}
											className='hover:bg-gray-700 transition-colors'
										>
											<Link
												href={item.href}
												className='flex items-center gap-3'
											>
												<item.icon className='h-5 w-5' />
												<span>{item.label}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								)
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	)
}
