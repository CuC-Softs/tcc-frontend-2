import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }) => {
  const mount = document.getElementById('__next')
  if (!mount) return children

  const el = document.createElement('div')

  useEffect(() => {
    mount.appendChild(el)
    return () => {
      mount.removeChild(el)
    }
  }, [el, mount])

  return createPortal(children, el)
}

export default Portal
