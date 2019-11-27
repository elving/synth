import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthMenuDividerProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLHRElement> {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the menu divider's DOM element.
   */
  ref?: React.Ref<HTMLHRElement>
}

type SynthMenuDividerComponent = React.ForwardRefExoticComponent<
  SynthMenuDividerProps
>

declare const MenuDivider: React.ForwardRefExoticComponent<SynthMenuDividerProps>

export { SynthMenuDividerComponent, SynthMenuDividerProps }
export default MenuDivider
