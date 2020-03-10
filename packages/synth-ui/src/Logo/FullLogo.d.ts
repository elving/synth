import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface FullLogoProps {
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

type FullLogoComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & FullLogoProps

type FullLogoComponent = SynthReact.SynthComponent<
  FullLogoComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const FullLogo: FullLogoComponent

export { FullLogoComponent, FullLogoComponentProps, FullLogoProps }
export default FullLogo
