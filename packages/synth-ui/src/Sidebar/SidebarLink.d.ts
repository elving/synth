import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthSidebarLinkProps
  extends SynthReact.SynthComponentProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
  /**
   * A React `ref` object that will point to the link's DOM element.
   */
  ref?: React.Ref<HTMLAnchorElement>
}

type SynthSidebarLinkComponent = React.ComponentType<SynthSidebarLinkProps>
declare const SidebarLink: React.ForwardRefExoticComponent<SynthSidebarLinkProps>

export { SynthSidebarLinkComponent, SynthSidebarLinkProps }
export default SidebarLink
