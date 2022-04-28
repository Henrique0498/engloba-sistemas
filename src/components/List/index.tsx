import Link from 'next/link'

import { ListType } from 'types/forms'

import * as S from './styles'

interface ListProps {
  data: ListType[]
  height?: number
  left?: number
  right?: number
  className?: string
}

const List = ({ data, height, left, right, className }: ListProps) => {
  function renderList(item: ListType, i: number) {
    if (item.href) {
      return (
        <li key={item.title + i + item.id}>
          <Link href={item.href}>
            <a>
              {item.icon && <span className="icon">{item.icon}</span>}
              {item.title}
            </a>
          </Link>
        </li>
      )
    }

    return (
      <li
        key={item.title + i + item.id}
        onClick={() => handleClick(item.setValue, item.title)}
      >
        {item.icon && <span className="icon">{item.icon}</span>}
        {item.title}
      </li>
    )
  }

  function handleClick(setValue?: (value: string) => void, newValue?: string) {
    if (setValue && newValue) {
      setValue(newValue)
    }
  }

  return (
    <S.Container
      height={height}
      left={left}
      right={right}
      className={className ?? ''}
    >
      <ul>{data.map((item, i) => renderList(item, i))}</ul>
    </S.Container>
  )
}

export default List
