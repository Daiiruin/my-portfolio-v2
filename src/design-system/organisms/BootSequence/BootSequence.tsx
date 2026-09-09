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

const MIN_VISIBLE_MS = 4500
const WIPE_DURATION_MS = 550
const LINE_DELAY_NEXUS_MS = 1000
const LINE_DELAY_PROFILE_MS = 2000
const LINE_DELAY_ASSETS_MS = 3000

function dotLine(label: string, value: string, width = 40) {
  const dots = Math.max(3, width - label.length - value.length)
  return `${label}${'.'.repeat(dots)}${value}`
}

const lineEnter = {
  initial: { opacity: 0, y: 4 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: 'easeOut' as const },
}

export function BootSequence() {
  const { booting, finishBoot } = useBootState()
  const { fontsReady, assetsLoaded, assetsTotal, progress, ready } = useBootProgress()
  const [revealing, setRevealing] = useState(false)
  const [mountedAt] = useState(() => Date.now())
  const [nexusDue, setNexusDue] = useState(false)
  const [profileDue, setProfileDue] = useState(false)
  const [assetsDue, setAssetsDue] = useState(false)

  useEffect(() => {
    if (!booting || !ready || revealing) return
    const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - mountedAt))
    const hold = setTimeout(() => setRevealing(true), remaining)
    return () => clearTimeout(hold)
  }, [booting, ready, revealing, mountedAt])

  useEffect(() => {
    if (!booting) return
    const timers = [
      setTimeout(() => setNexusDue(true), LINE_DELAY_NEXUS_MS),
      setTimeout(() => setProfileDue(true), LINE_DELAY_PROFILE_MS),
      setTimeout(() => setAssetsDue(true), LINE_DELAY_ASSETS_MS),
    ]
    return () => timers.forEach(clearTimeout)
  }, [booting])

  useEffect(() => {
    if (!revealing) return
    const wipe = setTimeout(finishBoot, WIPE_DURATION_MS)
    return () => clearTimeout(wipe)
  }, [revealing, finishBoot])

  useEffect(() => {
    if (!booting || revealing) return
    const skip = (e: KeyboardEvent) => {
      e.preventDefault()
      setRevealing(true)
    }
    window.addEventListener('keydown', skip)
    return () => window.removeEventListener('keydown', skip)
  }, [booting, revealing])

  if (!booting) return null

  return (
    <Wrapper $revealing={revealing} onClick={() => setRevealing(true)} aria-hidden="true">
      <Panel>
        <Log>
          {nexusDue && <Line {...lineEnter}>{dotLine('NEXUS_LINK', 'ok')}</Line>}
          {fontsReady && profileDue && (
            <Line {...lineEnter}>{dotLine('PROFILE / A.DOBROVOLSKYY', 'loaded')}</Line>
          )}
          {assetsLoaded > 0 && assetsDue && (
            <Line {...lineEnter}>{dotLine('ASSETS', `${assetsLoaded}/${assetsTotal}`)}</Line>
          )}
          {ready && assetsDue && <ReadyLine {...lineEnter}>{'> READY'}</ReadyLine>}
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
