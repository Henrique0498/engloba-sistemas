import { BiSearch } from 'react-icons/bi'
import { BsCaretDownFill } from 'react-icons/bs'
import { useState } from 'react'

import { ListType } from 'types/forms'
import Input from 'components/forms/Input'
import List from 'components/List'
import useForm from 'hooks/useForm'

import * as S from './styles'

const Search = () => {
  const search = useForm('search')
  const [itemSearch, setItemSearch] = useState('Código')
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const data: ListType[] = [
    {
      title: 'Código',
      id: 'coding',
      setValue: (value: string) => setItemSearch(value)
    },
    {
      title: 'CPF',
      id: 'cpf',
      setValue: (value: string) => setItemSearch(value)
    },
    {
      title: 'CNPJ',
      id: 'cnpj',
      setValue: (value: string) => setItemSearch(value)
    }
  ]

  function setMenu(set: boolean) {
    setShowMenu(set)
  }

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log('entrou')
  }

  return (
    <S.Container>
      <S.Search action="" onSubmit={handleSearch}>
        <S.Select
          onMouseLeave={() => setMenu(false)}
          onMouseEnter={() => setMenu(true)}
        >
          {itemSearch}
          <div className="icon">
            <BsCaretDownFill />
          </div>
          {showMenu && <List data={data} height={39} className={'list'} />}
        </S.Select>

        <Input
          id="searchNavBar"
          type="search"
          placeholder="Pesquisar..."
          icon={<BiSearch />}
          color="purple"
          outline={true}
          typeButton="submit"
          orderReverse={true}
          {...search}
        />
      </S.Search>
    </S.Container>
  )
}

export default Search
