import * as CSS from 'csstype'
import * as React from 'react'
import * as SynthCSS from '@beatgig/synth-css'

import { SynthComponent } from '../withSynth'

type BoxProps = {
  /**
   * CSS Properties supported by Synth
   */
  [key in keyof SynthCSS.CamelCaseMap]?: string
} & {
  /**
   * The elements you want to display within this box component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type BoxComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & BoxProps

type BoxComponent = SynthComponent<BoxComponentProps, HTMLDivElement>

/**
 * @since 1.1.0
 */
declare const Box: BoxComponent

export { BoxComponent, BoxProps, BoxComponentProps }
export default Box
