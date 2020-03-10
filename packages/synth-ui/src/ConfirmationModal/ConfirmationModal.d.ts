import * as React from 'react'
import { ModalProps } from '../Modal'

interface ConfirmationModalProps extends ModalProps {
  /**
   * The content used for the modal's cancel button which defaults to "Cancel".
   */
  cancelLabel?: React.ReactNode
  /**
   * The content used for the modal's confirm button which defaults to "Confirm".
   */
  confirmLabel?: React.ReactNode
  /**
   * A callback function that is called whenever the user clicks on the modal's
   * cancel button.
   */
  onCancel?()
  /**
   * A callback function that is called whenever the user clicks on the modal's
   * confirm button.
   */
  onConfirm?()
  /**
   * An optional function you can provide to render a custom cancel button.
   */
  renderCancel?(props: {
    cancelLabel?: React.ReactNode
    onCancel?(event: React.MouseEvent<HTMLButtonElement>)
  }): React.ReactNode
  /**
   * An optional function you can provide to render a custom confirm button.
   */
  renderConfirm?(props: {
    confirmLabel?: React.ReactNode
    onConfirm?(event: React.MouseEvent<HTMLButtonElement>)
  }): React.ReactNode
}

type ConfirmationModalComponentProps = React.HTMLAttributes<HTMLInputElement> &
  React.RefAttributes<HTMLInputElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ConfirmationModalProps

type ConfirmationModalComponent = SynthReact.SynthComponent<
  ConfirmationModalComponentProps,
  HTMLInputElement
>

/**
 * @since 1.3.0
 */
declare const ConfirmationModal: ConfirmationModalComponent

export {
  ConfirmationModalComponent,
  ConfirmationModalComponentProps,
  ConfirmationModalProps,
}

export default ConfirmationModal
