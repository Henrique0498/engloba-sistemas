import { Dispatch, SetStateAction } from 'react'

import List from 'components/List'
import { NavigationList } from 'data/mock/navigation'

import * as S from './styles'

interface TopBarMenuProps {
  setShowMenu: Dispatch<SetStateAction<boolean>>
  showMenu: boolean
}

const TopBarMenu = ({ showMenu, setShowMenu }: TopBarMenuProps) => {
  function setMenu(set: boolean) {
    setShowMenu(set)
  }

  return (
    <S.Container>
      <S.Menu
        onMouseLeave={() => setMenu(false)}
        onMouseEnter={() => setMenu(true)}
      >
        <div className="button">
          <button>
            <span className={`iconMenu ${showMenu ? 'active' : ''}`}>
              <span />
            </span>
          </button>
        </div>

        {showMenu && <List data={NavigationList} />}
      </S.Menu>
    </S.Container>
  )
}

export default TopBarMenu
