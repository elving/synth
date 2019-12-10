import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface MenuProps {
  /**
   * The elements you want to display within the menu.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type MenuComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & MenuProps

type MenuComponent = SynthReact.SynthComponent<
  MenuComponentProps,
  HTMLDivElement
>

/**
 * @since 1.2.0
 */
declare const Menu: MenuComponent

export { MenuComponent, MenuComponentProps, MenuProps }
export default Menu
