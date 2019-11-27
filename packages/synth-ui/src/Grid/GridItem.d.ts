import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthGridItemProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
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
  /**
   * A React `ref` object that will point to the component's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
}

type SynthGridItemComponent = React.ComponentType<SynthGridItemProps>
declare const GridItem: React.ForwardRefExoticComponent<SynthGridItemProps>

export { SynthGridItemComponent, SynthGridItemProps }
export default GridItem
