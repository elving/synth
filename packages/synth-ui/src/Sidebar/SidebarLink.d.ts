import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SidebarLinkProps {
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
   * link's content.
   */
  icon?: React.ReactElement
}

type SidebarLinkComponentProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.RefAttributes<HTMLAnchorElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & SidebarLinkProps

type SidebarLinkComponent = SynthReact.SynthComponent<
  SidebarLinkComponentProps,
  HTMLAnchorElement
>

/**
 * @since 1.0.0
 */
declare const SidebarLink: SidebarLinkComponent

export { SidebarLinkComponent, SidebarLinkComponentProps, SidebarLinkProps }
export default SidebarLink
