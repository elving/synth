import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

type ButtonIntent = 'none' | 'danger' | 'success' | 'highlight'
type ButtonIconPosition = 'top' | 'right' | 'bottom' | 'left'

interface ButtonProps {
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
  iconPosition?: ButtonIconPosition
  /**
   * The button's intent will determine it's text and background color.
   */
  intent?: ButtonIntent
  /**
   * Displays the button only using it's outline.
   */
  outline?: boolean
}

type ButtonComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.RefAttributes<HTMLButtonElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ButtonProps

type ButtonComponent = SynthReact.SynthComponent<
  ButtonComponentProps,
  HTMLButtonElement
>

/**
 * @since 1.0.0
 */
declare const Button: ButtonComponent

export {
  ButtonComponent,
  ButtonComponentProps,
  ButtonIconPosition,
  ButtonIntent,
  ButtonProps,
}
export default Button
