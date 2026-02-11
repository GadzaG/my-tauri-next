'use client'

import { useEffect, useState } from 'react'
import { DeviceStatsCard } from '@/components/device-card'
import { Device } from '@/types'
import { invoke } from '@tauri-apps/api/core'

export default function DevicesGrid() {
  const [devices, setDevices] = useState<Device[]>([])

  useEffect(() => {
    async function loadDevices() {
      try {
        const result = await invoke<Device[]>('get_devices1')
        setDevices(result)
      } catch (err) {
        console.error('Failed to load devices', err)
      }
    }

    loadDevices()
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      {devices.map(device => (
        <DeviceStatsCard
          key={device.serialNumber}
          serialNumber={device.serialNumber}
          totalMemory={device.totalMemory}
          usageMemory={device.usageMemory}
          battery={device.battery}
          isOnline={device.isOnline}
          onDelete={() => console.log('Delete', device.serialNumber)}
          onRemoteConnect={() =>
            console.log('Remote connect', device.serialNumber)
          }
          onDownloadSession={() =>
            console.log('Download session', device.serialNumber)
          }
        />
      ))}
    </div>
  )
}
