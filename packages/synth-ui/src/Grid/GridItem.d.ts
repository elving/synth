import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface GridItemProps {
  /**
   * The elements you want to display within this component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The size of the grid item in relation to the number of columns it's parent grid is set to
   * display. This prop is generally passed down from the <Grid> component by specifying
   * a `columns` prop on it.
   */
  columnSize?: number
}

type GridItemComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & GridItemProps

type GridItemComponent = SynthReact.SynthComponent<
  GridItemComponentProps,
  HTMLDivElement
>

/**
 * @since 1.2.0
 */
declare const GridItem: GridItemComponent

export { GridItemComponent, GridItemComponentProps, GridItemProps }
export default GridItem
