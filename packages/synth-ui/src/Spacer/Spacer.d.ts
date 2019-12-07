import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SpacerProps {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A boolean flag to determine if the space will be applied to the bottom
   * of the spacer element.
   */
  bottom?: boolean
  /**
   * A boolean flag to determine what the value of the `display` CSS property
   * will be, if `true`, then the `display` CSS property will be `inline-block`.
   */
  inline?: boolean
  /**
   * A boolean flag to determine if the space will be applied to the left
   * of the spacer element.
   */
  left?: boolean
  /**
   * A boolean flag to determine if the space will be applied to the right
   * of the spacer element.
   */
  right?: boolean
  /**
   * A scale index from the `spacing` synth token.
   */
  scale?: number
  /**
   * A boolean flag to determine if the space will be applied to the top
   * of the spacer element.
   */
  top?: boolean
}

type SpacerComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & SpacerProps

type SpacerComponent = SynthReact.SynthComponent<
  SpacerComponentProps,
  HTMLDivElement
>

/**
 * @since 1.0.0
 */
declare const Spacer: SpacerComponent

export { SpacerComponent, SpacerComponentProps, SpacerProps }
export default Spacer
