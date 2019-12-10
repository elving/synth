import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { TextProps } from './Text'

//React.HTMLAttributes<HTMLElement>
interface StatusProps extends TextProps {
  /**
   * The elements you want to display within the small component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type StatusComponentProps = React.HTMLAttributes<HTMLElement> &
  React.RefAttributes<HTMLElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & StatusProps

type StatusComponent = SynthReact.SynthComponent<
  StatusComponentProps,
  HTMLElement
>

/**
 * @since 1.2.0
 */
declare const Status: StatusComponent

export { StatusComponent, StatusComponentProps, StatusProps }
export default Status
