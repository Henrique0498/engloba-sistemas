import { useEffect, useState } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'
import Link from 'next/link'

import { useMedia } from 'hooks/useMedia'
import ImageCustom from 'components/forms/ImageCustom'
import List from 'components/List'
import useAuth from 'hooks/useAuth'

import * as S from './styles'
import { ListProfile, TopBarListProfile } from 'data/mock/navigation'

interface TopBarUserProps {
  mobile: boolean
}

const TopBarUser = ({ mobile }: TopBarUserProps) => {
  const { user } = useAuth()
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const { match } = useMedia('(min-width: 1024px)')
  const [listProfile, setListProfile] = useState(ListProfile)

  useEffect(() => {
    if (match) {
      setListProfile(ListProfile)
    } else {
      setListProfile(TopBarListProfile.concat(ListProfile))
    }
  }, [match])

  function setMenu(set: boolean) {
    setShowMenu(set)
  }

  return (
    <S.Container className={`${mobile ? 'mobile' : ''}`}>
      {match && (
        <S.Nav>
          {TopBarListProfile.map((item, i) => (
            <li key={item.href + i}>
              <Link href={item.href}>
                <a>
                  {item.alert && <div className="notification" />}
                  {item.icon}
                </a>
              </Link>
            </li>
          ))}
        </S.Nav>
      )}

      {user && (
        <S.User
          onMouseLeave={() => setMenu(false)}
          onMouseEnter={() => setMenu(true)}
        >
          <div className="photo">
            <ImageCustom
              src={user.imageProfile}
              alt={`foto do ${user.name}`}
              width={40}
              height={40}
            />
          </div>

          <div className="button">
            <BsCaretDownFill />
          </div>

          {showMenu && <List data={listProfile} right={0} height={50} />}
        </S.User>
      )}
    </S.Container>
  )
}

export default TopBarUser
