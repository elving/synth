import * as React from 'react'
import { SynthModalProps } from '../Modal'

interface SynthConfirmationModalProps extends SynthModalProps {
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
  renderCancel?(props: { cancelLabel?: string; onCancel?() }): React.ReactNode
  /**
   * An optional function you can provide to render a custom confirm button.
   */
  renderConfirm?(props: {
    confirmLabel?: string
    onConfirm?()
  }): React.ReactNode
}

type SynthConfirmationModalComponent = React.ComponentType<
  SynthConfirmationModalProps
>

/**
 * @since 1.2.0
 */
declare const ConfirmationModal: React.ForwardRefExoticComponent<SynthConfirmationModalProps>

export { SynthConfirmationModalComponent, SynthConfirmationModalProps }
export default ConfirmationModal
