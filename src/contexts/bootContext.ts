import { createContext } from 'react'

export type BootContextValue = {
  /** True until the boot sequence has played (or been skipped) once this session. */
  booting: boolean
  /** Called by BootSequence once its reveal wipe finishes. */
  finishBoot: () => void
}

export const BootContext = createContext<BootContextValue>({
  booting: false,
  finishBoot: () => {},
})
