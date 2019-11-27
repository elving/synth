import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthTagProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLElement> {
  /**
   * The elements you want to display within the tag.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the tag's DOM element.
   */
  ref?: React.Ref<HTMLElement>
}

type SynthTagComponent = React.ForwardRefExoticComponent<SynthTagProps>

declare const Tag: React.ForwardRefExoticComponent<SynthTagProps>

export { SynthTagComponent, SynthTagProps }
export default Tag
