import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface MiniLogoProps {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A boolean flag to determine the color variant of the logo; The default is white.
   */
  dark?: boolean
  /**
   * The height to be given to the logo.
   */
  height?: number | string
  /**
   * The width to be given to the logo.
   */
  width?: number | string
}

type MiniLogoComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & MiniLogoProps

type MiniLogoComponent = SynthReact.SynthComponent<
  MiniLogoComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const MiniLogo: MiniLogoComponent

export { MiniLogoComponent, MiniLogoComponentProps, MiniLogoProps }
export default MiniLogo
