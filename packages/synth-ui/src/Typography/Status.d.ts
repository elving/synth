import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface StatusProps extends SynthReact.BoxProps {
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
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & StatusProps

type StatusComponent = SynthReact.SynthComponent<
  StatusComponentProps,
  HTMLElement
>

/**
 * @since 1.3.0
 */
declare const Status: StatusComponent

export { StatusComponent, StatusComponentProps, StatusProps }
export default Status
