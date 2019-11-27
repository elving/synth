import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthHeaderProps
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
   * A React `ref` object that will point to the component's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
}

type SynthHeaderComponent = React.ComponentType<SynthHeaderProps>
declare const Header: React.ForwardRefExoticComponent<SynthHeaderProps>

export { SynthHeaderComponent, SynthHeaderProps }
export default Header
