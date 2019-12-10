import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import { Button } from '../Button'
import { Clickable } from '../Clickable'
import { Modal, ModalActions } from '../Modal'
import { Spacer } from '../Spacer'

import { noop } from '../utils'

/**
 * @param {object} props
 * @param {React.ReactNode} props.cancelLabel
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} props.onCancel
 * @returns {React.ReactElement<import('@beatgig/synth-ui').ClickableProps>}
 */
const defaultRenderCancel = ({ cancelLabel, onCancel }) => (
  <Clickable onClick={onCancel}>{cancelLabel}</Clickable>
)

/**
 * @param {object} props
 * @param {React.ReactNode} props.confirmLabel
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} props.onConfirm
 * @returns {React.ReactElement<import('@beatgig/synth-ui').ButtonProps>}
 */
const defaultRenderConfirm = ({ confirmLabel, onConfirm }) => (
  <Button onClick={onConfirm}>{confirmLabel}</Button>
)

const ConfirmationModal = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').ConfirmationModalProps} props
   */

  (
    {
      cancelLabel = 'Cancel',
      children,
      className = '',
      confirmLabel = 'Confirm',
      onCancel = noop,
      onConfirm = noop,
      renderCancel = defaultRenderCancel,
      renderConfirm = defaultRenderConfirm,
      ...props
    },
    ref,
  ) => (
    <Modal {...props} className={className} ref={ref}>
      {children}
      <ModalActions>
        {renderCancel({ cancelLabel, onCancel })}
        <Spacer inline left scale={2} />
        {renderConfirm({ confirmLabel, onConfirm })}
      </ModalActions>
    </Modal>
  ),
)

ConfirmationModal.propTypes = {
  ...Modal.propTypes,
  /**
   * The content used for the modal's cancel button which defaults to "Cancel".
   */
  cancelLabel: PropTypes.node,
  /**
   * The elements you want to display within the modal.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The content used for the modal's confirm button which defaults to "Confirm".
   */
  confirmLabel: PropTypes.node,
  /**
   * A callback function that is called whenever the user clicks on the modal's
   * cancel button.
   */
  onCancel: PropTypes.func,
  /**
   * A callback function that is called whenever the user clicks on the modal's
   * confirm button.
   */
  onConfirm: PropTypes.func,
  /**
   * An optional function you can provide to render a custom cancel button.
   */
  renderCancel: PropTypes.func,
  /**
   * An optional function you can provide to render a custom confirm button.
   */
  renderConfirm: PropTypes.func,
}

ConfirmationModal.defaultProps = {
  ...Modal.defaultProps,
  cancelLabel: 'Cancel',
  children: null,
  className: '',
  confirmLabel: 'Confirm',
  onCancel: noop,
  onConfirm: noop,
  renderCancel: defaultRenderCancel,
  renderConfirm: defaultRenderConfirm,
}

ConfirmationModal.displayName = 'ConfirmationModal'

export default ConfirmationModal
