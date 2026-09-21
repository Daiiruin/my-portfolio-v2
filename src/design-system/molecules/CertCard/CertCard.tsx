import { Card, Thumb, Badge, Title } from './CertCard.styles'

type Props = {
  title: string
  link: string
  imageUrl: string
}

export function CertCard({ title, link, imageUrl }: Props) {
  return (
    <Card href={link} target="_blank" rel="noopener noreferrer">
      <Thumb>
        <Badge src={imageUrl} alt={title} />
      </Thumb>
      <Title>{title}</Title>
    </Card>
  )
}
