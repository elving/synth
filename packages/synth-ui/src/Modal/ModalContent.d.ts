import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthModalContentProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * The elements you want to display within this component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the component's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
}

type SynthModalContentComponent = React.ForwardRefExoticComponent<
  SynthModalContentProps
>

declare const ModalContent: React.ForwardRefExoticComponent<SynthModalContentProps>

export { SynthModalContentComponent, SynthModalContentProps }
export default ModalContent
