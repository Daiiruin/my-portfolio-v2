import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { useLocaleData } from '../../../hooks/useLocaleData'
import { NAV_SECTION_IDS } from '../../../hooks/useScrollSpy'
import profileFr from '../../../data/profile.fr.json'
import profileEn from '../../../data/profile.en.json'
import projects from '../../../data/projects.fr.json'
import {
  Overlay,
  Panel,
  Transcript,
  Line,
  PromptLine,
  PromptSymbol,
  Input,
  Hint,
} from './CommandPrompt.styles'

type LogLine = { kind: 'input' | 'output' | 'error'; text: string }

const PROJECT_SLUGS = projects.map((p) => p.slug)

export function CommandPrompt() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [log, setLog] = useState<LogLine[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const lenis = useLenis()
  const profile = useLocaleData({ fr: profileFr, en: profileEn })

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    const onToggleEvent = () => setOpen((o) => !o)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('command-prompt:toggle', onToggleEvent)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('command-prompt:toggle', onToggleEvent)
    }
  }, [])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' })
  }, [log])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return false
    if (lenis) lenis.scrollTo(el)
    else el.scrollIntoView({ behavior: 'smooth' })
    return true
  }

  const run = (raw: string) => {
    const trimmed = raw.trim()
    if (!trimmed) return
    const [cmd, ...rest] = trimmed.toLowerCase().split(/\s+/)
    const arg = rest.join(' ')
    const output: LogLine[] = [{ kind: 'input', text: raw }]

    switch (cmd) {
      case 'help':
        output.push({
          kind: 'output',
          text: 'ls · cd <section> · open <project> · whoami · contact · clear',
        })
        break
      case 'ls':
        output.push({ kind: 'output', text: `sections: ${NAV_SECTION_IDS.join(' ')}` })
        output.push({ kind: 'output', text: `projects: ${PROJECT_SLUGS.join(' ')}` })
        break
      case 'cd':
      case 'contact': {
        const target = cmd === 'contact' ? 'contact' : arg
        const id = NAV_SECTION_IDS.find((s) => s === target)
        if (id && scrollToSection(id)) {
          output.push({ kind: 'output', text: `→ ${id}` })
        } else {
          output.push({ kind: 'error', text: `no such section: ${target || '(empty)'}` })
        }
        break
      }
      case 'open': {
        const slug = PROJECT_SLUGS.find((s) => s === arg)
        if (slug) {
          output.push({ kind: 'output', text: `→ /projects/${slug}` })
          setLog((prev) => [...prev, ...output])
          setValue('')
          setOpen(false)
          navigate(`/projects/${slug}`)
          return
        }
        output.push({ kind: 'error', text: `no such project: ${arg || '(empty)'}` })
        break
      }
      case 'whoami':
        output.push({ kind: 'output', text: profile.bio })
        break
      case 'clear':
        setLog([])
        return
      default:
        output.push({ kind: 'error', text: `command not found: ${cmd} — try 'help'` })
    }

    setLog((prev) => [...prev, ...output])
  }

  if (!open) return null

  return (
    <Overlay onClick={() => setOpen(false)} aria-hidden="true">
      <Panel onClick={(e) => e.stopPropagation()}>
        <Transcript>
          {log.map((line, i) => (
            <Line key={i} $kind={line.kind}>
              {line.kind === 'input' ? `> ${line.text}` : line.text}
            </Line>
          ))}
          <div ref={endRef} />
        </Transcript>
        <PromptLine>
          <PromptSymbol>&gt;</PromptSymbol>
          <Input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                run(value)
                setValue('')
              }
            }}
            spellCheck={false}
            autoComplete="off"
          />
        </PromptLine>
        <Hint>esc to close · try &apos;help&apos;</Hint>
      </Panel>
    </Overlay>
  )
}
