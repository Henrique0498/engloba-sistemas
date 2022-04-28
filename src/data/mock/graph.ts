export type stateType = {
  [key: string]: {
    title: string
    data: { title: string; key: string; value: number }[]
  }
}

export type GenerateDateType = {
  x: string
  id: string | number
  qtd: number
  qtdVol: number
  qtdRbd: number
  qtdVolRcb: number
}

function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function zeroFill(number: number) {
  return number < 9 ? `0${number}` : `${number}`
}

export function getDate(dayValue?: number, monthValue?: number) {
  const date = new Date()

  if (dayValue) {
    date.setDate(date.getDate() - dayValue)
  }

  if (monthValue) {
    date.setMonth(date.getMonth() - monthValue)
  }

  const day = zeroFill(date.getDate())
  const month = zeroFill(date.getMonth() + 1)
  const year = zeroFill(date.getFullYear())

  return { day, month, year }
}

export function generateDate(init?: number) {
  const result: GenerateDateType[] = []
  const currentDay = parseInt(getDate().day)

  for (let i = 0; i < 2; i++) {
    const { day, month, year } = getDate(i && currentDay)

    for (let i = 0; i < parseInt(day); i++) {
      result.push({
        id: `${parseInt(day) - i}+${month}`,
        x: `${parseInt(day) - i}/${month}/${year}`,
        qtd: getRandomNumber(0, 80),
        qtdVol: getRandomNumber(0, 80),
        qtdRbd: getRandomNumber(0, 80),
        qtdVolRcb: getRandomNumber(0, 80)
      })
    }
  }

  if (init) {
    result.splice(init, result.length)
  }

  return result
}

export const stateSideBar: stateType = {
  graph: {
    title: 'Gráfico',
    data: [
      { title: 'emitidos', key: 'displayed', value: 0 },
      { title: 'Falhados', key: 'fail', value: 1 }
    ]
  },
  interval: {
    title: 'intervalo',
    data: [
      { title: '10 segundos', key: '10s', value: 10 },
      { title: '15 segundos', key: '15s', value: 15 }
    ]
  },
  period: {
    title: 'período',
    data: [
      { title: '1 dia', key: '1day', value: 1 },
      { title: '7 dias', key: '7days', value: 7 },
      { title: '15 dias', key: '15days', value: 15 },
      { title: '31 dias', key: '31days', value: 31 }
    ]
  }
}
