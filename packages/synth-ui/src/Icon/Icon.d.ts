import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface IconProps {
  /**
   * The icon's markup.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A scale index from the `icons` synth token.
   */
  scale?: number
}

type IconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & IconProps

type IconComponent = SynthReact.SynthComponent<IconComponentProps, SVGElement>

/**
 * @since 1.0.0
 */
declare const Icon: IconComponent

export { IconComponent, IconComponentProps, IconProps }
export default Icon
