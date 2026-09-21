import { getLanguages, generateRandomCode } from '@whitep4nth3r/random-code'
import { Keyboard } from 'lucide-react'

export default function App() {
  const languages = getLanguages()
  const first = Object.keys(languages)[0]
  const snippet = generateRandomCode(first, 5)

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <h1 className="flex items-center gap-2 text-3xl font-bold text-emerald-400">
        <Keyboard /> Language Typing
      </h1>
      <pre className="mt-6 rounded-lg bg-slate-900 p-4 font-mono text-sm">
        {snippet.code}
      </pre>
    </div>
  )
}