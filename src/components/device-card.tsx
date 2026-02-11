import { Card } from '@/components/ui/card'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'
import {
	Cast,
	Download,
	HardDrive,
	MoreVertical,
	Trash2,
	Wifi,
	WifiOff,
} from 'lucide-react'

interface DeviceStatsCardProps {
	serialNumber: string
	totalMemory: number
	usageMemory: number
	battery: number
	isOnline: boolean
	onDelete: () => void
	onRemoteConnect: () => void
	onDownloadSession: () => void
}

export function DeviceStatsCard({
	serialNumber,
	totalMemory,
	usageMemory,
	battery,
	isOnline,
	onDelete,
	onRemoteConnect,
	onDownloadSession,
}: DeviceStatsCardProps) {
	return (
		<Card className='w-full max-w-sm border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative group'>
			{/* Заголовок с серийным номером и меню */}
			<div className='flex items-center justify-between p-6 pb-2'>
				<h3 className='font-medium text-sm leading-tight truncate pr-8'>
					{serialNumber}
				</h3>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className='p-2 -m-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-accent transition-all duration-200'>
							<MoreVertical className='w-4 h-4' />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end' className='w-48'>
						<DropdownMenuItem onClick={() => window.open('http://10.6.66.110', '_blank')}>
							<Cast className='w-4 h-4 mr-2' />
							Удаленное подключение
						</DropdownMenuItem>
						<DropdownMenuItem onClick={onDownloadSession}>
							<Download className='w-4 h-4 mr-2' />
							Скачать сессию
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={onDelete}
							className='text-destructive focus:text-destructive'
						>
							<Trash2 className='w-4 h-4 mr-2' />
							Удалить
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{/* Статус и память */}
			<div className='px-6 pb-4 space-y-3'>
				{/* Статус - только иконка */}
				<div className='flex items-center gap-2'>
					{isOnline ? (
						<Wifi className='w-4 h-4 text-primary opacity-100' />
					) : (
						<WifiOff className='w-4 h-4 text-muted-foreground opacity-50' />
					)}

					{/* Память */}
					<div className='flex items-center gap-2 ml-auto'>
						<HardDrive className='w-4 h-4 text-muted-foreground' />
						<span className='text-xs font-medium'>
							{usageMemory.toFixed(1)}/{totalMemory} GB
						</span>
						<span className='text-xs text-muted-foreground'>
							{((usageMemory / totalMemory) * 100).toFixed(0)}%
						</span>
					</div>
				</div>
			</div>

			{/* ProgressBar батареи */}
			<div className='p-6 pt-0 pb-0'>
				<div className='flex items-center gap-2 mb-2'>
					<div className='text-xs font-medium text-muted-foreground/80 min-w-0 truncate'>
						Battery
					</div>
					<div className='text-xs font-mono font-medium ml-auto'>
						{battery}%
					</div>
				</div>
				<Progress
					value={battery}
					className='h-2 [&>div]:!bg-primary [&>div]:!rounded-full'
				/>
			</div>
		</Card>
	)
}
