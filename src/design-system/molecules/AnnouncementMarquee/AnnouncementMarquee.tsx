import { useTranslation } from 'react-i18next'
import { Badge } from '../../atoms/Badge'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { Wrapper, BadgeRow, Banner, Track, Item } from './AnnouncementMarquee.styles'

export function AnnouncementMarquee() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const message = t('projects.announcement.message')

  return (
    <Wrapper>
      <BadgeRow>
        <Badge variant="accent">{t('projects.announcement.badge')}</Badge>
      </BadgeRow>
      <Banner>
        <Track $animate={!reducedMotion} role="marquee">
          <Item>{message}</Item>
          {reducedMotion ? null : <Item aria-hidden="true">{message}</Item>}
        </Track>
      </Banner>
    </Wrapper>
  )
}
