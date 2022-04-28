import * as S from './styles'

interface PaginationPage {
  value: string
  className?: 'active'
  setValue: (value: string) => void
}

const PaginationPage = ({ value, className, setValue }: PaginationPage) => {
  return (
    <S.Container className={className ?? ''} onClick={() => setValue(value)}>
      {value}
    </S.Container>
  )
}

export default PaginationPage
