import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthModalProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * The elements you want to display within the modal.
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
   * A boolean flag to determine if the modal should be closed when clicking
   * on it's overlay background.
   */
  closeOnOverlayClick?: boolean
  /**
   * A callback function that is called whenever the user clicks on the modal's
   * overlay background.
   */
  onOverlayClick?()
  /**
   * A React `ref` object that will point to the modal's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
}

type SynthModalComponent = React.ForwardRefExoticComponent<SynthModalProps>
declare const Modal: React.ForwardRefExoticComponent<SynthModalProps>

export { SynthModalComponent, SynthModalProps }
export default Modal
