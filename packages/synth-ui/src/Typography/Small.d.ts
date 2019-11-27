import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'
import { SynthIntentInterface } from './Text'

interface SynthSmallProps
  extends SynthIntentInterface,
    SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLElement> {
  /**
   * The elements you want to display within the small component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the small component's DOM element.
   */
  ref?: React.Ref<HTMLElement>
}

type SynthSmallComponent = React.ForwardRefExoticComponent<SynthSmallProps>

declare const Small: React.ForwardRefExoticComponent<SynthSmallProps>

export { SynthSmallComponent, SynthSmallProps }
export default Small
