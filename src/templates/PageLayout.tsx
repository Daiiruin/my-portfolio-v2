import type { ReactNode } from 'react'
import styled from 'styled-components'
import { Header } from '../design-system/organisms/Header'
import { Footer } from '../design-system/organisms/Footer'

const Main = styled.main`
  padding-top: 60px; /* header height */
`

type Props = {
  children: ReactNode
}

export function PageLayout({ children }: Props) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
