import { storiesOf } from '@storybook/react'
import React from 'react'

import Modal from '../src/Modal'
import ModalActions from '../src/ModalActions'
import ModalContent from '../src/ModalContent'
import ModalHeader from '../src/ModalHeader'
import ModalTitle from '../src/ModalTitle'
import { Button } from '../../Button'
import { Heading, Text } from '../../Typography'
import { Spacer } from '../../Spacer'
import { usePopup } from '../../Popup'

const WithHook = (props = {}) => {
  const {
    close,
    isOpen,
    open,
    popupRef,
    props: popupProps,
    triggerRef,
  } = usePopup(props)

  return (
    <div>
      <Heading>Page Title</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Spacer scale={5} bottom />
      <Button ref={triggerRef} onClick={open}>
        Open Popup
      </Button>

      {isOpen && (
        <Modal {...props} {...popupProps} close={close} ref={popupRef}>
          <ModalHeader close={close}>
            <ModalTitle>Modal Title</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </ModalContent>
          <ModalActions>
            <Button ref={triggerRef} onClick={close}>
              Close
            </Button>
          </ModalActions>
        </Modal>
      )}
    </div>
  )
}

storiesOf('Modal/Default', module)
  .add('default', () => <WithHook />)
  .add('closes when clicking outside', () => <WithHook closeOnOverlayClick />)
