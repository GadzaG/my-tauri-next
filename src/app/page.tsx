"use client"

import { useState } from "react"
import {  invoke } from "@tauri-apps/api/core"

type User = {
  id: number
  name: string
  email: string
}

export default function HomePage() {
  const [userId, setUserId] = useState<number>(1)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUser = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await invoke<User>("get_user", { id: userId })
      setUser(response)
    } catch (err) {
      console.error(err)
      setError("Ошибка при получении пользователя")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Tauri + Next.js</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          style={{ padding: 8, marginRight: 10 }}
        />

        <button onClick={fetchUser} style={{ padding: "8px 16px" }}>
          Получить пользователя
        </button>
      </div>

      {loading && <p>Загрузка...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{ border: "1px solid #ccc", padding: 16 }}>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </main>
  )
}


// 'use client'
// import { useEffect, useState } from 'react'
// import { greet, getPlatform } from '@/lib/tauri'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// export default function Home() {
//   const [greeting, setGreeting] = useState('Загрузка...')
//   const [platform, setPlatform] = useState('Неизвестно')
//   const [loading, setLoading] = useState(false)

//   const loadData = async () => {
//     setLoading(true)
//     try {
//       const [greetMsg, plat] = await Promise.all([
//         greet('Мир'),
//         getPlatform()
//       ])
//       setGreeting(greetMsg)
//       setPlatform(plat)
//     } catch (error) {
//       console.error('Tauri error:', error)
//       setGreeting('Ошибка вызова Rust')
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     loadData()
//   }, [])

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24">
//       <Card className="w-[500px]">
//         <CardHeader>
//           <CardTitle>Tauri + Next.js + Rust + Shadcn</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div>
//             <p><strong>Rust говорит:</strong> {greeting}</p>
//             <p><strong>Платформа:</strong> {platform}</p>
//           </div>
//           <Button onClick={loadData} disabled={loading}>
//             {loading ? 'Загрузка...' : 'Вызвать Rust снова'}
//           </Button>
//         </CardContent>
//       </Card>
//     </main>
//   )
// }
