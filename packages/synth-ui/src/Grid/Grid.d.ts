import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import * as GridItem from './GridItem'

interface GridProps {
  /**
   * The elements you want to display within the grid.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The number of columns you want to display
   */
  columns?: number
}

type GridComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & GridProps

type GridComponent = SynthReact.SynthComponent<
  GridComponentProps,
  HTMLDivElement
>

/**
 * @since 1.3.0
 */
declare const Grid: GridComponent

export { GridComponent, GridComponentProps, GridProps }
export default Grid
