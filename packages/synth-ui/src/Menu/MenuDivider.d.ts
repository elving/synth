import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface MenuDividerProps {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type MenuDividerComponentProps = React.HTMLAttributes<HTMLHRElement> &
  React.RefAttributes<HTMLHRElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & MenuDividerProps

type MenuDividerComponent = SynthReact.SynthComponent<
  MenuDividerComponentProps,
  HTMLHRElement
>

/**
 * @since 1.2.0
 */
declare const MenuDivider: MenuDividerComponent

export { MenuDividerComponent, MenuDividerComponentProps, MenuDividerProps }
export default MenuDivider
