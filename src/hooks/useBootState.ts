import { useContext } from 'react'
import { BootContext } from '../contexts/bootContext'

export function useBootState() {
  return useContext(BootContext)
}
