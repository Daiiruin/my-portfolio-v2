import { Row, Path, Count } from './SectionMeta.styles'

type Props = {
  /** 1-based section index, matches document order. */
  index: number
  /** Diegetic path, e.g. "stack", "career", "projects" — no leading slash. */
  path: string
  count?: number
  countLabel?: string
}

// Replaces the old accent-colored uppercase label used identically across four
// sections. Reads as a file/module address instead of a marketing eyebrow.
export function SectionMeta({ index, path, count, countLabel }: Props) {
  const sec = `SEC.${String(index).padStart(2, '0')}`

  return (
    <Row>
      <Path>
        {sec} · <em>./{path}</em>
      </Path>
      {count !== undefined && (
        <Count>
          {String(count).padStart(2, '0')}
          {countLabel ? ` ${countLabel}` : ''}
        </Count>
      )}
    </Row>
  )
}
