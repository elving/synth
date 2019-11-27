import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthSidebarProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * The elements you want to display within the sidebar.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the sidebar's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
}

type SynthSidebarComponent = React.ComponentType<SynthSidebarProps>
declare const Sidebar: React.ForwardRefExoticComponent<SynthSidebarProps>

export { SynthSidebarComponent, SynthSidebarProps }
export default Sidebar
