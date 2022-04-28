import { useEffect, useState } from 'react'

import TitleSite from 'components/TitleSite'

import * as S from './styles'
import TopBarMenu from './TopBarMenu'
import Search from 'components/Search'
import TopBarUser from './TopBarUser'
import { useMedia } from 'hooks/useMedia'

const TopBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(true)
  const { match } = useMedia('(min-width: 630px)')

  useEffect(() => {
    let lastScrollTop = 3000

    function handleWatchScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }

      setShowMenu(false)
      lastScrollTop = scrollTop
    }

    window.addEventListener('scroll', handleWatchScroll)

    return () => {
      window.removeEventListener('scroll', handleWatchScroll)
    }
  }, [])

  return (
    <S.Container
      className={`${showNav ? 'active' : ''} ${match ? 'desktop' : ''}`}
    >
      <TitleSite href="/" />

      <TopBarMenu showMenu={showMenu} setShowMenu={setShowMenu} />

      {match && <Search />}

      <TopBarUser mobile={!match} />
    </S.Container>
  )
}

export default TopBar
