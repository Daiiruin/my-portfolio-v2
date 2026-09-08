import { useEffect, useState } from 'react'
import { useBootState } from '../../../hooks/useBootState'
import { useBootProgress } from '../../../hooks/useBootProgress'
import {
  Wrapper,
  Panel,
  Log,
  Line,
  ReadyLine,
  ProgressRow,
  ProgressBar,
  ProgressFill,
  Percent,
  HintText,
} from './BootSequence.styles'

const MIN_VISIBLE_MS = 2000
const WIPE_DURATION_MS = 550

function dotLine(label: string, value: string, width = 40) {
  const dots = Math.max(3, width - label.length - value.length)
  return `${label}${'.'.repeat(dots)}${value}`
}

// A boot screen tied to real work — fonts.ready plus the project screenshots preloading
// (see useBootProgress) — not a fake timer pretending to load something. Skippable,
// plays once per session (BootProvider), and never mounts at all under reduced-motion.
export function BootSequence() {
  const { booting, finishBoot } = useBootState()
  const { fontsReady, assetsLoaded, assetsTotal, progress, ready } = useBootProgress()
  const [revealing, setRevealing] = useState(false)
  const [mountedAt] = useState(() => Date.now())

  useEffect(() => {
    if (!booting || !ready || revealing) return
    const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - mountedAt))
    const hold = setTimeout(() => setRevealing(true), remaining)
    return () => clearTimeout(hold)
  }, [booting, ready, revealing, mountedAt])

  useEffect(() => {
    if (!revealing) return
    const wipe = setTimeout(finishBoot, WIPE_DURATION_MS)
    return () => clearTimeout(wipe)
  }, [revealing, finishBoot])

  useEffect(() => {
    if (!booting || revealing) return
    const skip = () => setRevealing(true)
    window.addEventListener('keydown', skip)
    return () => window.removeEventListener('keydown', skip)
  }, [booting, revealing])

  if (!booting) return null

  return (
    <Wrapper $revealing={revealing} onClick={() => setRevealing(true)} aria-hidden="true">
      <Panel>
        <Log>
          <Line>{dotLine('NEXUS_LINK', 'ok')}</Line>
          {fontsReady && <Line>{dotLine('PROFILE / A.DOBROVOLSKYY', 'loaded')}</Line>}
          {assetsLoaded > 0 && (
            <Line>{dotLine('ASSETS', `${assetsLoaded}/${assetsTotal}`)}</Line>
          )}
          {ready && <ReadyLine>{'> READY'}</ReadyLine>}
        </Log>

        <ProgressRow>
          <ProgressBar>
            <ProgressFill style={{ width: `${progress}%` }} />
          </ProgressBar>
          <Percent>[ {String(progress).padStart(3, ' ')} ]</Percent>
        </ProgressRow>

        <HintText>press any key to skip</HintText>
      </Panel>
    </Wrapper>
  )
}
