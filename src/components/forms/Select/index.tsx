import { useState } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'

import List from 'components/List'

import * as S from './styles'

interface SelectProps {
  title: string
  select: string
  data: { title: string; key: string | number }[]
  setValue: (value: string) => void
}

const Select = ({ data, title, select, setValue }: SelectProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  function setMenu(set: boolean) {
    setShowMenu(set)
  }

  return (
    <S.Container>
      <div className="title">{title}:</div>
      <div
        className="select"
        onMouseLeave={() => setMenu(false)}
        onMouseEnter={() => setMenu(true)}
      >
        {select}
        <BsCaretDownFill />
        {showMenu && (
          <List
            data={data.map((item) => {
              return { ...item, setValue }
            })}
            height={29}
            className="list"
          />
        )}
      </div>
    </S.Container>
  )
}

export default Select
