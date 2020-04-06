import * as React from 'react'

import { ButtonProps } from '../Button'

interface ClickableProps extends ButtonProps {
  /**
   * A boolean flag to determine if the button should **not** have any padding.
   */
  withoutPadding?: boolean
}

type ClickableComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.RefAttributes<HTMLButtonElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ClickableProps

type ClickableComponent = SynthReact.SynthComponent<
  ClickableComponentProps,
  HTMLButtonElement
>

/**
 * @since 1.0.0
 */
declare const Clickable: ClickableComponent

export { ClickableComponent, ClickableComponentProps, ClickableProps }
export default Clickable
