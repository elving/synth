import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SidebarProps {
  /**
   * The elements you want to display within the sidebar.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type SidebarComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & SidebarProps

type SidebarComponent = SynthReact.SynthComponent<
  SidebarComponentProps,
  HTMLDivElement
>

/**
 * @since 1.0.0
 */
declare const Sidebar: SidebarComponent

export { SidebarComponent, SidebarComponentProps, SidebarProps }
export default Sidebar
