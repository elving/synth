import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface MenuItemProps {
  /**
   * The elements you want to display within the menu item.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * An optional icon component that can be rendered along side the
   * menu item's content.
   */
  icon?: React.ReactElement
  /**
   * A callback function that is called whenever the user clicks on the
   * menu item.
   */
  onClick?()
}

type MenuItemComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.RefAttributes<HTMLButtonElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & MenuItemProps

type MenuItemComponent = SynthReact.SynthComponent<
  MenuItemComponentProps,
  HTMLButtonElement
>

/**
 * @since 1.3.0
 */
declare const MenuItem: MenuItemComponent

export { MenuItemComponent, MenuItemComponentProps, MenuItemProps }
export default MenuItem
