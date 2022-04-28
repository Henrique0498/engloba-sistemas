import Link from 'next/link'
import { ListType } from 'types/forms'
import * as S from './styles'

const NavLeftLink = (data: ListType) => {
  if (data.href) {
    return (
      <S.Container>
        <Link href={data.href}>
          <a>
            <div className="icon">{data.icon}</div>
            {data.title}
          </a>
        </Link>
      </S.Container>
    )
  }

  return null
}

export default NavLeftLink
