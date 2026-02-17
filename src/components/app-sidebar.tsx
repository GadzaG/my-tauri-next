"use client"

import Link from "next/link"
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar"

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { ChevronRight, BarChart3, FileText, User } from "lucide-react"

const sidebarMenu = [
	{
		label: "Сессии",
		icon: BarChart3,
		items: [
			{ label: "Ручное создание", href: "/sessions/manual" },
			{ label: "Загрузка с устройства", href: "/sessions/upload" },
			{ label: "Список сессий", href: "/sessions" },
		],
	},
	{
		label: "Шаблоны",
		icon: FileText,
		items: [
			{ label: "Шаблоны файлов", href: "/templates/data" },
			{ label: "Шаблоны анализа", href: "/templates/analysis" },
			{ label: "Шаблоны отчетов", href: "/templates/reports" },
		],
	},
]

export function AppSidebar() {
	return (
		<Sidebar className="border-r">
			<SidebarHeader className="p-2">
				<div className="
    flex items-center gap-3
    px-2 py-2 rounded-lg
    hover:bg-muted/60
    transition-colors
    cursor-pointer
  ">
					<img
						src="https://x-tech.su/upload/CMax/d31/d31f6548e6063b247cf32bf5d5a2bbd2.png"
						alt="X-Tech"
						className="h-8 w-8 object-contain"
					/>

					<div className="flex flex-col">
						<span className="text-sm font-semibold">X-Tech</span>
						<span className="text-xs text-muted-foreground">
							Workspace
						</span>
					</div>
				</div>
			</SidebarHeader>

			<SidebarContent >

				{sidebarMenu.map((group) => (
					<Collapsible key={group.label} defaultOpen className="group">
						<SidebarGroup>

							{/* Заголовок группы */}
							<CollapsibleTrigger asChild>
								<SidebarGroupLabel
									className="
                    flex items-center gap-2
                    px-2 py-2 rounded-md
                    text-muted-foreground
                    hover:text-foreground
                    hover:bg-muted/60
                    transition-colors
                    cursor-pointer
                  "
								>
									<ChevronRight
										className="
                      h-4 w-4 shrink-0
                      transition-transform duration-200
                      group-data-[state=open]:rotate-90
                    "
									/>
									<group.icon className="h-4 w-4" />
									<span className="font-medium">{group.label}</span>
								</SidebarGroupLabel>
							</CollapsibleTrigger>

							{/* Контент группы */}
							<CollapsibleContent
								className="
                  overflow-hidden
                  data-[state=open]:animate-accordion-down
                  data-[state=closed]:animate-accordion-up
                "
							>
								<div className="ml-4 pl-4 border-l mt-1 space-y-1">
									<SidebarMenu>
										{group.items.map((item) => (
											<SidebarMenuItem key={item.href}>
												<SidebarMenuButton
													asChild
													className="
                            justify-start
                            px-2 py-1.5
                            text-sm
                            rounded-md
                            hover:bg-muted/60
                            transition-colors
                          "
												>
													<Link href={item.href}>
														{item.label}
													</Link>
												</SidebarMenuButton>
											</SidebarMenuItem>
										))}
									</SidebarMenu>
								</div>
							</CollapsibleContent>

						</SidebarGroup>
					</Collapsible>
				))}

			</SidebarContent>

			{/* Footer */}
			<SidebarFooter className="p-2 border-t">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton className="justify-start gap-2">
							<User className="h-4 w-4" />
							Аккаунт
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}


// 'use client'
// import {
// 	Sidebar,
// 	SidebarContent,
// 	SidebarGroup,
// 	SidebarGroupContent,
// 	SidebarHeader,
// 	SidebarMenu,
// 	SidebarMenuButton,
// 	SidebarMenuItem,
// 	SidebarTrigger,
// } from '@/components/ui/sidebar'
// import { ChartArea, Cpu, Home } from 'lucide-react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// const menuItems = [
// 	{ href: '/', label: 'Главная', icon: Home },
// 	{ href: '/devices', label: 'Устройства', icon: Cpu },
// 	{ href: '/sessions', label: 'Сессии', icon: ChartArea },
// ]

// export function AppSidebar() {
// 	const pathname = usePathname()

// 	return (
// 		<Sidebar collapsible='icon'>
// 			<SidebarHeader className='pl-2'>
// 				<SidebarTrigger />
// 			</SidebarHeader>
// 			<SidebarContent className='py-4'>
// 				<SidebarGroup>
// 					<SidebarGroupContent>
// 						<SidebarMenu className='space-y-1'>
// 							{menuItems.map(item => {
// 								const isActive =
// 									pathname === item.href || pathname.startsWith(item.href + '/')

// 								return (
// 									<SidebarMenuItem key={item.href}>
// 										<SidebarMenuButton
// 											asChild
// 											isActive={isActive}
// 											tooltip={item.label}
// 											className='hover:bg-gray-700 transition-colors'
// 										>
// 											<Link
// 												href={item.href}
// 												className='flex items-center gap-3'
// 											>
// 												<item.icon className='h-5 w-5' />
// 												<span>{item.label}</span>
// 											</Link>
// 										</SidebarMenuButton>
// 									</SidebarMenuItem>
// 								)
// 							})}
// 						</SidebarMenu>
// 					</SidebarGroupContent>
// 				</SidebarGroup>
// 			</SidebarContent>
// 		</Sidebar>
// 	)
// }
