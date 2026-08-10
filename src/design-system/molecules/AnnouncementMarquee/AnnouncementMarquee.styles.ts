import styled, { css, keyframes } from 'styled-components'

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.space['8']};
`

export const BadgeRow = styled.div`
  margin-bottom: ${({ theme }) => theme.space['3']};
`

export const Banner = styled.div`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.accentSubtle};
  border: 1px solid ${({ theme }) => theme.colors.accent}40;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => `${theme.space['3']} 0`};

  mask-image: linear-gradient(
    to right,
    transparent,
    black ${({ theme }) => theme.space['8']},
    black calc(100% - ${({ theme }) => theme.space['8']}),
    transparent
  );
`

export const Track = styled.div<{ $animate: boolean }>`
  display: flex;
  width: max-content;

  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${scroll} 22s linear infinite;
    `}
`

export const Item = styled.span`
  flex-shrink: 0;
  padding: 0 ${({ theme }) => theme.space['12']};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.font.size.sm};
  white-space: nowrap;
`
