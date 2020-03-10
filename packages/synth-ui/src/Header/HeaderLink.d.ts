import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface HeaderLinkProps {
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

type HeaderLinkComponentProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.RefAttributes<HTMLAnchorElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & HeaderLinkProps

type HeaderLinkComponent = SynthReact.SynthComponent<
  HeaderLinkComponentProps,
  HTMLAnchorElement
>

/**
 * @since 1.0.0
 */
declare const HeaderLink: HeaderLinkComponent

export { HeaderLinkComponent, HeaderLinkComponentProps, HeaderLinkProps }
export default HeaderLink
