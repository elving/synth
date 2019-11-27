import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthMenuProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * The elements you want to display within the menu.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the menu's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
}

type SynthMenuComponent = React.ForwardRefExoticComponent<SynthMenuProps>

declare const Menu: React.ForwardRefExoticComponent<SynthMenuProps>

export { SynthMenuComponent, SynthMenuProps }
export default Menu
