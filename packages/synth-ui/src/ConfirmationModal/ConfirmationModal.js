import PropTypes from 'prop-types'
import React from 'react'

import { Button } from '../Button'
import { Clickable } from '../Clickable'
import { Modal, ModalActions } from '../Modal'
import { Spacer } from '../Spacer'

import { noop, withForwardedRef } from '../utils'

/**
 * @param {object} props
 * @param {React.ReactNode} props.cancelLabel
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} props.onCancel
 * @returns {React.ReactElement<import('@beatgig/synth-ui').SynthClickableProps>}
 */
const defaultRenderCancel = ({ cancelLabel, onCancel }) => (
  <Clickable onClick={onCancel}>{cancelLabel}</Clickable>
)

/**
 * @param {object} props
 * @param {React.ReactNode} props.confirmLabel
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} props.onConfirm
 * @returns {React.ReactElement<import('@beatgig/synth-ui').SynthButtonProps>}
 */
const defaultRenderConfirm = ({ confirmLabel, onConfirm }) => (
  <Button onClick={onConfirm}>{confirmLabel}</Button>
)

const ConfirmationModal = ({
  cancelLabel = 'Cancel',
  children,
  className = '',
  confirmLabel = 'Confirm',
  onCancel = noop,
  onConfirm = noop,
  ref,
  renderCancel = defaultRenderCancel,
  renderConfirm = defaultRenderConfirm,
  ...props
}) => (
  <Modal {...props} className={className} ref={ref}>
    {children}
    <ModalActions>
      {renderCancel({ cancelLabel, onCancel })}
      <Spacer inline left scale={2} />
      {renderConfirm({ confirmLabel, onConfirm })}
    </ModalActions>
  </Modal>
)

ConfirmationModal.propTypes = {
  cancelLabel: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  confirmLabel: PropTypes.node,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  renderCancel: PropTypes.func,
  renderConfirm: PropTypes.func,
}

export default withForwardedRef(ConfirmationModal)
