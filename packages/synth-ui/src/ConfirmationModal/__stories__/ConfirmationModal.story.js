import { storiesOf } from '@storybook/react'
import React from 'react'

import ConfirmationModal from '../src/ConfirmationModal'
import { Button } from '../../Button'
import { ModalContent, ModalHeader, ModalTitle } from '../../Modal'
import { Text } from '../../Typography'
import { usePopup } from '../../Popup'

const WithHook = (props = {}) => {
  const {
    close,
    isOpen,
    open,
    modalRef,
    props: modalProps,
    triggerRef,
  } = usePopup(props)

  return (
    <div style={{ padding: 20 }}>
      <Button ref={triggerRef} onClick={open}>
        Open Modal
      </Button>

      {isOpen && (
        <ConfirmationModal
          {...props}
          {...modalProps}
          cancelLabel="No, stop it!"
          close={close}
          confirmLabel="Yes, do it now!"
          onCancel={close}
          onConfirm={() => console.log('confirmed!')}
          ref={modalRef}
        >
          <ModalHeader close={close}>
            <ModalTitle>Modal Title</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </ModalContent>
        </ConfirmationModal>
      )}
    </div>
  )
}

storiesOf('Modal/ConfirmationModal', module)
  .add('default', () => <WithHook />)
  .add('with custom cancel button', () => (
    <WithHook
      renderCancel={() => (
        <Button intent="danger" onClick={() => console.log('canceled!')}>
          Nope
        </Button>
      )}
    />
  ))
  .add('with custom confirm button', () => (
    <WithHook
      renderConfirm={() => (
        <Button intent="success" onClick={() => console.log('confirmed!')}>
          Yes!
        </Button>
      )}
    />
  ))
