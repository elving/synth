import React from 'react'
import styled from 'styled-components'

import { Button, Clickable } from '../../Button'
import { Modal, ModalActions } from '../../Modal'
import { noop } from '../../utils'
import { Spacer } from '../../Spacer'

/**
 * @param {object} props
 * @param {string} props.cancelLabel
 * @param {function} props.onCancel
 */
const defaultRenderCancel = ({ cancelLabel, onCancel }) => (
  <Clickable onClick={onCancel}>{cancelLabel}</Clickable>
)

/**
 * @param {object} props
 * @param {string} props.confirmLabel
 * @param {function} props.onConfirm
 */
const defaultRenderConfirm = ({ confirmLabel, onConfirm }) => (
  <Button onClick={onConfirm}>{confirmLabel}</Button>
)

const ConfirmationModal = ({
  /** @type {string} */
  cancelLabel = 'Cancel',
  children,
  /** @type {string} */
  className = '',
  confirmLabel = 'Confirm',
  /** @type {function} */
  onCancel = noop,
  onConfirm = noop,
  renderCancel = defaultRenderCancel,
  renderConfirm = defaultRenderConfirm,
  ...props
}) => (
  <Modal {...props} className={className}>
    {children}
    <ModalActions>
      {renderCancel({ cancelLabel, onCancel })}
      <Spacer inline left scale={2} />
      {renderConfirm({ confirmLabel, onConfirm })}
    </ModalActions>
  </Modal>
)

export default ConfirmationModal
