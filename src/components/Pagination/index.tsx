import PaginationPage from './PaginationPage'
import * as S from './styles'

interface PaginationProps {
  title: string
  select: string
  data: { title: string; key: string | number }[]
  setValue: (value: string) => void
}

const Pagination = ({ data, title, select, setValue }: PaginationProps) => {
  return (
    <S.Container>
      <S.Container>
        <div className="title">{title}:</div>

        <div className="page">
          {data.map((page, i) => (
            <PaginationPage
              key={page.key.toString() + i}
              className={select === page.title ? 'active' : undefined}
              value={page.title}
              setValue={setValue}
            />
          ))}
        </div>
      </S.Container>
    </S.Container>
  )
}

export default Pagination
