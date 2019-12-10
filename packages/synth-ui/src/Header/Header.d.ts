import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface HeaderProps {
  /**
   * The elements you want to display within this component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type HeaderComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & HeaderProps

type HeaderComponent = SynthReact.SynthComponent<
  HeaderComponentProps,
  HTMLDivElement
>

/**
 * @since 1.0.0
 */
declare const Header: HeaderComponent

export { HeaderComponent, HeaderComponentProps, HeaderProps }
export default Header
