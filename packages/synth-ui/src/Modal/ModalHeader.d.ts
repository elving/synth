import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthModalHeaderProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * The elements you want to display within modal's header.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A function used to close the modal when clicking on it's overlay
   * background. This function will generally be provided by the `usePopup` hook.
   */
  close?()
  /**
   * A callback function that is called whenever the user clicks on the modal's
   * close button.
   */
  onCloseClick?()
  /**
   * A React `ref` object that will point to the modal's header DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
}

type SynthModalHeaderComponent = React.ForwardRefExoticComponent<
  SynthModalHeaderProps
>

declare const ModalHeader: React.ForwardRefExoticComponent<SynthModalHeaderProps>

export { SynthModalHeaderComponent, SynthModalHeaderProps }
export default ModalHeader
