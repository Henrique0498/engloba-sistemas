import TopBar from 'components/TopBar'

interface IsLogoutProps {
  children: React.ReactNode
}

import * as S from './styles'

const IsLogout = ({ children }: IsLogoutProps) => {
  return (
    <S.Container>
      <TopBar />
      {children}
    </S.Container>
  )
}

export default IsLogout
