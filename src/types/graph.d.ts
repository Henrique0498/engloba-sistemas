export type GraphType = {
  labels: string[] | undefined
  datasets: dataType[]
}

export type GraphDataSetsType = {
  label: string
  data: number[]
  backgroundColor: string | string[]
  borderColor: string | string[]
  borderWidth: number
  parsing: {
    yAxisKey: string | number
  }
}
