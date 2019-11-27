import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthHeaderLinkProps
  extends SynthReact.SynthComponentProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The elements you want to display within this component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the component's DOM element.
   */
  ref?: React.Ref<HTMLAnchorElement>
}

type SynthHeaderLinkComponent = React.ComponentType<SynthHeaderLinkProps>
declare const HeaderLink: React.ForwardRefExoticComponent<SynthHeaderLinkProps>

export { SynthHeaderLinkComponent, SynthHeaderLinkProps }
export default HeaderLink
