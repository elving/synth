import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'
import { SynthIntentInterface } from '../Typography'

interface SynthButtonProps
  extends SynthIntentInterface,
    SynthReact.SynthComponentProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The elements you want to display within the button.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * An optional icon component that can be rendered along side the
   * button's content.
   */
  icon?: React.ReactElement
  /**
   * The icon's position.
   */
  iconPosition?: 'top' | 'right' | 'bottom' | 'left'
  /**
   * Displays the button only using it's outline.
   */
  outline?: boolean
  /**
   * A React `ref` object that will point to the button's DOM element.
   */
  ref?: React.Ref<HTMLButtonElement>
}

type SynthButtonComponent = React.ComponentType<SynthButtonProps>

/**
 * @since 1.0.0
 */
declare const Button: React.ForwardRefExoticComponent<SynthButtonProps>

export { SynthButtonComponent, SynthButtonProps }
export default Button
