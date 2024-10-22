import { useCallback } from 'react'

export function useScrollToElement(offset = 0) {
  return useCallback(
    (elementId) => {
      const element = document.getElementById(elementId)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    },
    [offset]
  )
}
