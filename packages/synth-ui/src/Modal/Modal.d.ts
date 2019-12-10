import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { PopupProps } from '../Popup'

interface ModalProps extends PopupProps {
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
}

type ModalComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ModalProps

type ModalComponent = SynthReact.SynthComponent<
  ModalComponentProps,
  HTMLDivElement
>

/**
 * @since 1.2.0
 */
declare const Modal: ModalComponent

export { ModalComponent, ModalComponentProps, ModalProps }
export default Modal
