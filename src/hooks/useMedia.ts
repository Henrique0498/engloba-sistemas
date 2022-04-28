import { useEffect, useState } from 'react'

export const useMedia = (media?: string) => {
  const [match, setMatch] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [windowHeight, setWindowHeight] = useState<number>(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)

    function changeMatch() {
      if (media) {
        const { matches } = window.matchMedia(media)
        setMatch(matches)
      }
    }
    changeMatch()

    window.addEventListener('resize', changeMatch)

    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])

  return {
    match,
    windowWidth,
    windowHeight
  }
}
