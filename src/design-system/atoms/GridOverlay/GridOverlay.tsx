import { Wrapper, Inner, Line } from './GridOverlay.styles'

// Signature background layer: hairline verticals aligned to the container's edge
// and its column divisions. `colors.grid` sits only a shade above `background`,
// so this reads as structure, not decoration — the site's grid made visible.
const COLUMN_COUNT = 6

export function GridOverlay() {
  const positions = Array.from({ length: COLUMN_COUNT + 1 }, (_, i) => (i / COLUMN_COUNT) * 100)

  return (
    <Wrapper aria-hidden="true">
      <Inner>
        {positions.map((pct) => (
          <Line key={pct} style={{ left: `${pct}%` }} />
        ))}
      </Inner>
    </Wrapper>
  )
}
