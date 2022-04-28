import NavLeftLink from 'components/NavLeft/NavLeftLink'
import { NavigationList } from 'data/mock/navigation'
import * as S from './styles'

const HomePage = () => {
  return (
    <S.Container>
      {NavigationList.map((item, i) => (
        <NavLeftLink key={item.title + i} {...item} />
      ))}
    </S.Container>
  )
}

export default HomePage
