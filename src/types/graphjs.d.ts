// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChartTypeRegistry } from 'chart.js'

declare module 'chart.js' {
  interface ChartTypeRegistry {
    derivedBubble: ChartTypeRegistry['bubble']
  }
}
