import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'
import GridItem from './GridItem'

interface SynthGridProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * The elements you want to display within this component.
   */
  children?: typeof GridItem
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The number of columns you want to display
   */
  columns?: number
  /**
   * A React `ref` object that will point to the component's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
}

type SynthGridComponent = React.ComponentType<SynthGridProps>
declare const Grid: React.ForwardRefExoticComponent<SynthGridProps>

export { SynthGridComponent, SynthGridProps }
export default Grid
