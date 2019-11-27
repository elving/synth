import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthModalTitleProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * The elements you want to display within heading.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the heading's DOM element.
   */
  ref?: React.Ref<HTMLHeadingElement>
}

type SynthModalTitleComponent = React.ForwardRefExoticComponent<
  SynthModalTitleProps
>

declare const ModalTitle: React.ForwardRefExoticComponent<SynthModalTitleProps>

export { SynthModalTitleComponent, SynthModalTitleProps }
export default ModalTitle
