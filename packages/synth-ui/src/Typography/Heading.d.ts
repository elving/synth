import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'
import { SynthIntentInterface } from './Text'

interface SynthHeadingProps
  extends SynthIntentInterface,
    SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * The elements you want to display within the heading component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * Sets the element's heading level (h1, h2, etc.) and it's font-size accordingly
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * A React `ref` object that will point to the heading component's DOM element.
   */
  ref?: React.Ref<HTMLHeadingElement>
}

type SynthHeadingComponent = React.ForwardRefExoticComponent<SynthHeadingProps>

declare const Heading: React.ForwardRefExoticComponent<SynthHeadingProps>

export { SynthHeadingComponent, SynthHeadingProps }
export default Heading
