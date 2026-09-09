import { useEffect, useState } from 'react'
import projects from '../data/projects.fr.json'

// Image paths are identical across locales - either file works as the asset list.
const ASSET_URLS = projects.map((p) => p.image)
const SAFETY_TIMEOUT_MS = 4000

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve() // a failed asset should never hang the boot sequence
    img.src = src
  })
}

// Real progress, not a fake timer: fonts.ready plus every project screenshot decoded,
// so the boot sequence's counter reflects work actually being done (and doubles as a
// preload for the Projects section the visitor hasn't scrolled to yet).
export function useBootProgress() {
  const [fontsReady, setFontsReady] = useState(false)
  const [assetsLoaded, setAssetsLoaded] = useState(0)
  const assetsTotal = ASSET_URLS.length

  useEffect(() => {
    let cancelled = false

    document.fonts.ready.then(() => {
      if (!cancelled) setFontsReady(true)
    })

    const assetPromises = ASSET_URLS.map((src) =>
      preloadImage(src).then(() => {
        if (!cancelled) setAssetsLoaded((n) => n + 1)
      }),
    )

    const safety = setTimeout(() => {
      if (!cancelled) {
        setFontsReady(true)
        setAssetsLoaded(assetsTotal)
      }
    }, SAFETY_TIMEOUT_MS)

    Promise.all([document.fonts.ready, ...assetPromises]).finally(() => clearTimeout(safety))

    return () => {
      cancelled = true
      clearTimeout(safety)
    }
  }, [assetsTotal])

  const totalSteps = 1 + assetsTotal
  const doneSteps = (fontsReady ? 1 : 0) + assetsLoaded
  const progress = Math.round((doneSteps / totalSteps) * 100)
  const ready = fontsReady && assetsLoaded === assetsTotal

  return { fontsReady, assetsLoaded, assetsTotal, progress, ready }
}
