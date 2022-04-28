import { useEffect, useState } from 'react'

import { generateDate, GenerateDateType, stateSideBar } from 'data/mock/graph'
import { useMedia } from 'hooks/useMedia'
import Graph, { GraphProps } from 'components/Graph'
import NavLeft from 'components/NavLeft'
import Pagination from 'components/Pagination'
import Select from 'components/forms/Select'

import * as S from './styles'

const PageTemplate = () => {
  const [userData, setUserData] = useState<GraphProps>()
  const { match } = useMedia('(min-width: 1024px)')
  const [graph, setGraph] = useState('emitidos')
  const [interval, setInterval] = useState('10 segundos')
  const [period, setPeriod] = useState('7 dias')
  const [dataBase, setDataBase] = useState<GenerateDateType[]>()

  function getState(type: string, value: string) {
    return stateSideBar[type].data.find((props) => props.title === value)?.value
  }

  useEffect(() => {
    setDataBase(generateDate(getState('period', period)))
  }, [period, graph])

  useEffect(() => {
    if (dataBase) {
      setUserData({
        title: graph,
        labels: dataBase.map((data) => data.x.toString()),
        datasets: [
          {
            label: 'Quantidade',
            data: dataBase.map((data) => data.qtd)
          },
          {
            label: 'Quantidade de volumes',
            data: dataBase.map((data) => data.qtdVol)
          },
          {
            label: 'Quantidade de pedidos recebidos',
            data: dataBase.map((data) => data.qtdRbd)
          },
          {
            label: 'Quantidade de volumes recebidos',
            data: dataBase.map((data) => data.qtdVolRcb)
          }
        ]
      })
    }
  }, [dataBase, graph])

  return (
    <S.Container className={`${match ? 'desktop' : ''}`}>
      {match && <NavLeft />}

      <div className="graph">
        <Graph {...userData} />

        <div className="graphSideBar">
          <Select
            {...stateSideBar.graph}
            select={graph}
            setValue={(value) => setGraph(value)}
          />

          <Select
            {...stateSideBar.interval}
            select={interval}
            setValue={(value) => setInterval(value)}
          />

          <Pagination
            {...stateSideBar.period}
            select={period}
            setValue={(value) => setPeriod(value)}
          />
        </div>
      </div>
    </S.Container>
  )
}

export default PageTemplate
