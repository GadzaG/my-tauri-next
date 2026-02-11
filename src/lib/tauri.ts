// src/lib/tauri.ts — ИСПРАВЛЕННАЯ версия для Tauri v2
export async function invoke(cmd: string, args?: any): Promise<any> {
  if (typeof window === 'undefined') {
    return { mock: true, result: `Mock: ${cmd}` }
  }

  try {
    // Tauri v2 использует CORE API
    const { invoke } = await import('@tauri-apps/api/core')
    return await invoke(cmd, args)
  } catch (error) {
    console.error('Tauri invoke error:', error)
    throw error
  }
}

export async function greet(name: string): Promise<string> {
  try {
    const result = await invoke('greet', { name })
    return result
  } catch {
    return 'Rust недоступен'
  }
}

export async function getPlatform(): Promise<string> {
  try {
    return await invoke('get_platform', {})
  } catch {
    return 'Tauri не запущен'
  }
}
