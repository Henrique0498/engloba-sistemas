import { NavigationList } from 'data/mock/navigation'
import NavLeftLink from './NavLeftLink'
import * as S from './styles'

const NavLeft = () => {
  return (
    <S.Container>
      {NavigationList.map((item, i) => (
        <NavLeftLink key={item.title + i} {...item} />
      ))}
    </S.Container>
  )
}

export default NavLeft
