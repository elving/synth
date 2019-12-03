import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthMenuItemProps
  extends SynthReact.SynthComponentProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The elements you want to display within the menu item.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * An optional icon component that can be rendered along side the
   * menu item's content.
   */
  icon?: React.ReactElement
  /**
   * A React `ref` object that will point to the menu item's DOM element.
   */
  ref?: React.Ref<HTMLButtonElement>
  /**
   * A callback function that is called whenever the user clicks on the
   * menu item.
   */
  onClick?()
}

type SynthMenuItemComponent = React.ForwardRefExoticComponent<
  SynthMenuItemProps
>

declare const MenuItem: React.ForwardRefExoticComponent<SynthMenuItemProps>

export { SynthMenuItemComponent, SynthMenuItemProps }
export default MenuItem
