import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthCardProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * The elements you want to display within the card.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the card's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
}

type SynthCardComponent = React.ComponentType<SynthCardProps>

/**
 * @since 1.0.0
 */
declare const Card: React.ForwardRefExoticComponent<SynthCardProps>

export { SynthCardComponent, SynthCardProps }
export default Card
