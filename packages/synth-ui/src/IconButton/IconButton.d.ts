import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { ButtonProps } from '../Button'

interface IconButtonProps
  extends Omit<ButtonProps, 'children' | 'iconPosition'> {}

type IconButtonComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.RefAttributes<HTMLButtonElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & IconButtonProps

type IconButtonComponent = SynthReact.SynthComponent<
  IconButtonComponentProps,
  HTMLButtonElement
>

/**
 * @since 1.2.0
 */
declare const IconButton: IconButtonComponent

export { IconButtonComponent, IconButtonComponentProps, IconButtonProps }
export default IconButton
