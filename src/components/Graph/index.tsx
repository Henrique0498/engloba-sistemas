import * as S from './styles'
import { Bar } from 'react-chartjs-2'
import { transparentize } from 'polished'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
} from 'chart.js'

import { useEffect, useState } from 'react'
import { colorsDefault } from 'data/mock/colors'
import { GraphType } from 'types/graph'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
)

export interface GraphProps {
  className?: string
  title?: string
  labels?: string[]
  datasets?: {
    label: string
    data: number[]
  }[]
}

const Graph = ({ labels, datasets, title, className }: GraphProps) => {
  const [data, setData] = useState<GraphType>()

  useEffect(() => {
    if (labels && datasets) {
      const result = {
        labels: labels,
        datasets: datasets?.map((data, i) => {
          return {
            label: data.label,
            data: data.data,
            backgroundColor: transparentize(0.7, colorsDefault[i]),
            borderColor: colorsDefault[i],
            borderWidth: 1
          }
        })
      }

      setData(result)
    }
  }, [labels, datasets])

  if (data) {
    return (
      <S.Container className={`${className ?? ''}`}>
        <h2>{title}</h2>
        <Bar data={data} />
      </S.Container>
    )
  }

  return (
    <S.Container className={`notFound ${className ?? ''}`}>
      Valor não correspondido
    </S.Container>
  )
}

export default Graph
