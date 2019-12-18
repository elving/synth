import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

type AspectRatios = '1:2' | '1:1' | '4:3' | '3:2' | '8:5' | '16:9' | '2:1'

interface AspectRatioProps extends SynthReact.BoxProps {
  /**
   * The element you want to scale according to the given `ratio` property.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The aspect ratio to be given to the component's `children`.
   */
  ratio?: string | number
}

type AspectRatioComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & AspectRatioProps

type AspectRatioComponent = SynthReact.SynthComponent<
  AspectRatioComponentProps,
  HTMLDivElement
>

/**
 * @since 1.3.0
 */
declare const AspectRatio: AspectRatioComponent

export { AspectRatioComponent, AspectRatioProps, AspectRatioComponentProps }
export default AspectRatio
